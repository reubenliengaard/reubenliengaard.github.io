---
slug: provisioning-cisco-cloud-wireless-controller
title: Provisioning Cisco Cloud Wireless Controller
authors: reubenliengaard
tags: [hola, docusaurus]
---

# Provisioning Cisco Cloud Wireless Controller

We installed and configured the Cisco Catalyst c9800-CL wireless controller using KVM (Kernel-based Virtual Machine). The c9800-CL is a cloud-based wireless controller that can be used to manage both on-premises and cloud-based wireless networks, and is a part of the Cisco Catalyst 9800 series. It offers features such as wireless intrusion prevention, location services, and guest access.

To begin, we installed virtualization software and enabled the libvirtd service. Then, we created a network bridge using the brctl command. After that, we used the virt-install command to install the c9800-CL on a new virtual machine, specifying options such as the connection to the virtualization server, the operating system variant, the architecture of the virtual machine, and the CPU type.

Once the virtual machine was set up and the c9800-CL was installed, we provided a script to configure the controller. This script included steps such as setting the hostname, creating a user account, configuring the Gigabit Ethernet interfaces, creating a VLAN, setting up static routes, shutting down and re-enabling the radio frequencies, and setting the country code. We also configured the virtual wireless LAN controller (VWLC) and set the DNS and NTP servers.

Finally, we showed you how to access the GUI of the c9800-CL at the specified IP address and go through the zero-day configuration steps to set up a wireless network.