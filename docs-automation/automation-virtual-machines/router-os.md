---
sidebar_position: 1
---

# RouterOS

## Introduction

### What?

### Why?

## Body

### How?

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

## Conclusion

## References