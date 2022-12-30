---
sidebar_position: 1
---

# Fedora CoreOS on a Rpi4

### Install Imager
``` bash
dnf install rpi-imager
```

### Install Butane
``` bash
sudo dnf install -y butane
```

``` yaml
variant: fcos
version: 1.4.0
passwd:
  users:
    - name: core
      ssh_authorized_keys:
        - ssh-rsa AAAA...
```

``` bash
butane --pretty --strict example.bu > example.ign
```



??????



### Write to disk
``` bash
FCOSDISK=/dev/sdX
sudo coreos-installer install --architecture=aarch64 -i config.ign 
```
## Reference
[FedoraOnRpi](https://docs.fedoraproject.org/en-US/fedora-coreos/provisioning-raspberry-pi4/)