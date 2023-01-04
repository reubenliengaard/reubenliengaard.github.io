---
sidebar_position: 2
---

# Installing Cisco Cloud Wireless Controller with KVM

## Cisco c9800-CL with KVM

### What?

The Cisco Catalyst c9800-CL is a wireless controller that is part of the Cisco Catalyst 9800 series. It is designed to manage and secure wireless networks, and provides features such as wireless intrusion prevention, location services, and guest access. The c9800-CL model is a cloud-based controller that is designed to be deployed in a virtual environment, and can be used to manage both on-premises and cloud-based wireless networks.

### Install virtualization sowftware group
``` bash
sudo dnf group install --with-optional virtualization
```

### Enable libvirtd service
``` bash
sudo systemctl start libvirtd && sudo systemctl enable libvirtd
```



## Create network bridge br10
???

## Install Virtual Machine
``` bash
virt-install \
--connect=qemu:///system \
--os-variant=rhel4.0 \
--arch=x86_64 \
--cpu host \
--console pty,target_type=virtio \
--hvm \
--import \
--name=my_c9k_vm \
--disk path=C9800-CL.qcow2,bus=ide,format=qcow2,backing_store \
--vcpus=1,sockets=1,cores=1,threads=1 \
--ram=4096 \
--network=network:model=virtio \
--network=network:br10,model=virtio \
--network=network:model=virtio  \
--noreboot 
```
> We use the backing_store option to virt-install --disk to quickly create a new disk image and avoid writing to the original image we have downloaded. This new disk image can be easily thrown away.
> 
### To exit KVM
CTRL + ] 

### If you need to start again, use this to destroy the VM
``` bash
virsh destroy fcos
virsh undefine --remove-all-storage fcos
```

### Configure the controller

The wireless controller is configured with this script. It sets the hostname of the controller to "9800-1" and creates a user with the name "admin" and password "Cisco123", giving the user privilege level 15. The Gigabit Ethernet interfaces 1 and 2 are then configured, with interface 1 being set up with a static IP address and interface 2 being set up as a trunk port with native VLAN 77. VLAN 77 is created and assigned an IP address, and static routes for the 10.10.10.0/24 and 0.0.0.0/0 networks are set up. The 5 GHz and 2.4 GHz radios on the controller are shut down, the country code is set to Great Britain, and the radios are re-enabled. Finally, the virtual wireless LAN controller (VWLC) is configured and the DNS server is set to 1.1.1.1 and the NTP server to pool.ntp.org.

``` ios
conf t
hostname 9800-1
user-name admin
 privilege 15
 password 0 Cisco123
 exit
int gig 1
 no switchport
 ip address 10.10.10.10 255.255.255.0
 no shut
 exit
int gig 2
 switchport
 switchport mode trunk
 switchport trunk native vlan 77
 no shut
 exit
int vlan 77
 ip address 192.168.77.10 255.255.255.0
 no shut
 exit
ip route 10.10.10.0 255.255.255.0 10.10.10.1
ip route 0.0.0.0 0.0.0.0 192.168.77.1
wireless management interface vlan 77
ap dot11 5ghz shutdown 
ap dot11 24ghz shutdown 
ap country GB
no ap dot11 5ghz shutdown
no ap dot11 24ghz shutdown
exit
wireless config vwlc-ssc key-size 2048 signature-algo sha256 password 0 Cisco123
conf t
ip name-server 1.1.1.1
ntp server pool.ntp.org
```

### Access the GUI

Now the GUI can be accessed at 192.168.77.1, login and go through the sero day configuration steps to setup a wireless network.

## References

[FedoraVirtGuide](https://docs.fedoraproject.org/en-US/quick-docs/getting-started-with-virtualization/)

[CiscoGuide](https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/9800-cloud/installation/b-c9800-cl-install-guide/installing_the_controller_in_kvm_environment.html)

[CiscoSal](https://youtu.be/6ttSeDTODWM)

[wireless_boi](https://youtu.be/MeDwvj0LxhU)