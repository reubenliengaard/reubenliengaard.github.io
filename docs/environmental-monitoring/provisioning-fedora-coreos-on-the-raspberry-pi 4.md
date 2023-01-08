---
sidebar_position: 1
---

# Provisioning Fedora CoreOS on the Raspberry Pi 4
### prep seperate usb for firmware
``` bash
VERSION=v1.32  # use latest one from https://github.com/pftf/RPi4/releases
UEFIDISK=/dev/sdX
sudo mkfs.vfat $UEFIDISK
mkdir /tmp/UEFIdisk
sudo mount $UEFIDISK /tmp/UEFIdisk
pushd /tmp/UEFIdisk
sudo curl -LO https://github.com/pftf/RPi4/releases/download/${VERSION}/RPi4_UEFI_Firmware_${VERSION}.zip
sudo unzip RPi4_UEFI_Firmware_${VERSION}.zip
sudo rm RPi4_UEFI_Firmware_${VERSION}.zip
popd
sudo umount /tmp/UEFIdisk
```

### Install CoreOS tools
``` bash
sudo dnf install -y rpi-imager coreos-installer butane ignition-validate
```

### Make working directory and change to it
``` bash
mkdir ~/coreos
cd ~/coreos
``` 

### Download CoreOS image
``` bash
coreos-installer download -p qemu -f qcow2.xz --decompress
```

### Rename image to simpler name
``` bash
mv *.qcow2 fedora-coreos.qcow2
```

### Create rpict.bu 
``` yaml
variant: fcos
version: 1.4.0
passwd:
  users:
    - name: core
      ssh_authorized_keys:
        - ssh-rsa AAAA...
systemd:
  units:
    - name: serial-getty@ttyS0.service
      dropins:
      - name: autologin-core.conf
        contents: |
          [Service]
          # Override Execstart in main unit
          ExecStart=
          # Add new Execstart with `-` prefix to ignore failure
          ExecStart=-/usr/sbin/agetty --autologin core --noclear %I $TERM
          TTYVTDisallocate=no
    - name: failure.service
      enabled: true
      contents: |
        [Service]
        Type=oneshot
        ExecStart=/usr/bin/false
        RemainAfterExit=yes

        [Install]
        WantedBy=multi-user.target
    - name: etcd-member.service
      enabled: true
      contents: |
        [Unit]
        Description=Run a single node etcd
        After=network-online.target
        Wants=network-online.target

        [Service]
        ExecStartPre=mkdir -p /var/lib/rpict2mqtt
        ExecStartPre=-/bin/podman kill rpict2mqtt
        ExecStartPre=-/bin/podman rm rpict2mqtt
        ExecStartPre=-/bin/podman pull docker.io/gtricot/rpict-mqtt:latest
        ExecStart=/bin/podman run --name rpict2mqtt \
                           --device=/dev/ttyAMA0:/dev/ttyAMA0 \
                            -e MQTT_URL="mqtt://my_mqtt_broker:1883" \
                           -e MQTT_USER="my-super-user" \
                           -e MQTT_PASSWORD="my-secret-password" \
                           -e MQTT_BASE_TOPIC="custom-rpict-topic" \
                           -e ABSOLUTE_VALUES=true \
                           -e SENSOR_VALUE_THRESHOLD=2 \
                            gtricot/rpict-mqtt
        ExecStop=/bin/podman stop rpict2mqtt

        [Install]
        WantedBy=multi-user.target
storage:
  files:
    - path: /etc/hostname
      mode: 0644
      contents:
        inline: |
          tutorial
    - path: /etc/profile.d/systemd-pager.sh
      mode: 0644
      contents:
        inline: |
          # Tell systemd to not use a pager when printing information
          export SYSTEMD_PAGER=cat
```

### Transpile butane file into an ignition file
``` bash
butane --pretty --strict rpict.bu --output rpict.ign
```

## Test ignition file in virtual machine
``` bash
ignition-validate rpict.ign && echo 'Success!'
```

#### Setup the correct SELinux label to allow access to the config
``` bash
chcon --verbose --type svirt_home_t rpict.ign
```

#### Start a Fedora CoreOS virtual machine
``` bash
virt-install --name=fcos --vcpus=2 --ram=2048 --os-variant=fedora-coreos-stable \
    --import --network=bridge=virbr0 --graphics=none \
    --qemu-commandline="-fw_cfg name=opt/com.coreos/config,file=${PWD}/rpict.ign" \
    --disk=size=20,backing_store=${PWD}/fedora-coreos.qcow2
```
#### Exit and destroy virtual machine 
> CTRL + ] to exit kvm
### to destroy run
``` bash
virsh destroy fcos
virsh undefine --remove-all-storage fcos
```

### Write to disk
``` bash
## set disc
FCOSDISK=/dev/sdX
```

``` bash
# Create customized.iso which:
coreos-installer iso customize \
    --architecture=aarch64 \
    --dest-device $FCOSDISK \ # - Automatically installs to /dev/sda
    --dest-ignition config.ign \ # - Provisions with config.ign
    --network-keyfile $networkManagerConnectionFile  \ # -  network configuration
    --ignition-ca ca.pem \ # - Trusts HTTPS certificates signed by ca.pem
    --post-install post.sh \ # - Runs post.sh after installing
    -o custom.iso input.iso
```

## Reference
[FedoraOnRpi](https://docs.fedoraproject.org/en-US/fedora-coreos/provisioning-raspberry-pi4/)

[customizing-install](https://coreos.github.io/coreos-installer/customizing-install/#customize-options)

[pftf](https://github.com/pftf/RPi4)



### To do
- setup MQTT gateway
- write CoreOS to SD and boot pi with external monitor
- test whether /dev/ttyAMA0 is accesible with CoreOS on RPI4