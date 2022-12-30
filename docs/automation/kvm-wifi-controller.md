---
sidebar_position: 2
---

# KVM Wifi Controller

## Introduction
Cisco c9800-CL with KVM

### What?

> The Cisco Catalyst 9800-CL is the next generation of enterprise-class wireless controller for cloud that runs open Cisco IOS XE Software and sets the standard for always-on and secure wireless network, bringing the world's most popular wireless networking platform to AWS

### 
``` bash
sudo dnf group install --with-optional virtualization
```

``` bash
sudo systemctl start libvirtd && sudo systemctl enable libvirtd
```

## Install Virtual Machine
``` bash
virt-install \

--connect=qemu:///system \
--os-type=linux \
--os-variant=rhel4 \
--arch=x86_64 \
--cpu host \
--console pty,target_type=virtio \
--hvm \
--import \
--name=my_c9k_vm \
--disk path=<path_to_c9800-c_qcow2>,bus=ide,format=qcow2 \
--vcpus=1,sockets=1,cores=1,threads=1 \
--ram=4096 \
--network=network:<network name>,model=virtio \
--network=network:<network name>,model=virtio \
--network=network:<network name>,model=virtio  \
--noreboot \

```


### Enter these commands on the controller to setup the web gui

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
ap country BE,US
no ap dot11 5ghz shutdown
no ap dot11 24ghz shutdown
exit
wireless config vwlc-ssc key-size 2048 signature-algo sha256 password 0 Cisco123
conf t
ip name-server 1.1.1.1
ntp server pool.ntp.org
```


## References

[FedoraVirtGuide](https://docs.fedoraproject.org/en-US/quick-docs/getting-started-with-virtualization/)
