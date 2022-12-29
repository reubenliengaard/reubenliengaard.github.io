---
sidebar_position: 1
---

# Cisco Wireless Cloud Controller

## Introduction

### What?

### Why?

## Body

### How?

## Adding syntax hilighting for RouterOS code

```
Ctrl + P
ext install cperezabo.routeros-syntax```
```

# Set up RouterOS

## Install Winbox

Here's a github project I found which helps automate installing Winbox on linux. clone https://github.com/mriza/winbox-installer.git cd winbox-installer sudobash cd /tmp git
./winbox-setup install

## Update RouterOS

```
System > Packages > Check For Updates > Download And InstallSystem > Routerboard > Upgrade > Yes
```
## Forward a port for NextCloud remote access

Will also probably need to open port 80 and dstnat it to port 8080 in order for LetsEncrypt to renew itscertificate at some point.

/ip firewall natadd action=dst-nat (^) chain=dstnat dst-port=$port in-interface-list=WAN
protocol tcp =\to-addresses (^) =$ip to-ports=$port

## Create a static DNS entry for the server

/ip dns add addressstatic=$ip (^) name=$domain

## Redirect DNS packets to LAN

```
/ip firewall nat add chain=dstnat in-interface-list=lan protocol=tcp dst-port=
action =redirect to-ports=
/ip firewall nat add chain=dstnat in-interface-list=lan protocol=udp dst-port=
action=redirect to-ports=
```

## Set up DNS over HTTPS

```
/tool /certificate import fetch url="https://cacerts.digicert.com/DigiCertGlobalRootCA.crt.pem"file-name=DigiCertGlobalRootCA.crt.pem
/ip dns cert=yesset use-doh-server=https://cloudflare-dns.com/dns-query verify-doh-
/ip dns set servers=1.1.1.
```
## Disable peer DNS

```
/ip dhcp-client set use-peer-dns=no
```
## Create a new user and password, and delete the old one

```
/user /user addremove name admin=$name password=$password group=full
```
## Restrict user login to local network.

```
/user set 0 allowed-address=$ip
```
## Disable un-neccisary services

/ip service /ip service printdisable (^) telnet,ftp,www,api,api-ssl

## Change SSH to non default port

```
/ip service /ip service setprint ssh port=$new_port
```
## Restict Winbox login to local network.

```
/ip service set winbox address=192.168.88.0/
```
### Disable everything to do with MAC Server

```
/tool mac-server /tool mac-server setprint allowed-interface-list =none
```
(^) /tool mac-server mac-winbox set allowed-interface-list=none
/tool mac-server mac-winbox print
/tool mac-server ping /tool mac-server ping setprint enabled=no

### Turn off local discovery

```
/ip neighbor discovery-settings set discover-interface-list=none
```
### Disable bandwidth server

```
/tool bandwidth-server set enabled=no
```
## Force secure SSH

```
/ip ssh set strong-crypto=yes
```

## Conclusion

## References