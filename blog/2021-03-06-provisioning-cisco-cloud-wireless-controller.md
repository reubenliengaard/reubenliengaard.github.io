---
slug: provisioning-cisco-cloud-wireless-controller
title: Provisioning Cisco Cloud Wireless Controller
authors: reubenliengaard
tags: [hola, docusaurus]
---

# Provisioning Cisco Cloud Wireless Controller

In this project, we aimed to successfully install and configure the Cisco Catalyst c9800-CL wireless controller using KVM (Kernel-based Virtual Machine). The c9800-CL is a powerful and flexible cloud-based wireless controller that is capable of managing both on-premises and cloud-based wireless networks. It belongs to the Cisco Catalyst 9800 series and offers a range of advanced features such as wireless intrusion prevention, location services, and guest access.

To begin, we installed virtualization software and enabled the libvirtd service on our system. This allowed us to create and manage virtual machines using KVM. We then created a network bridge using the brctl command, which enabled communication between the virtual machine and the host system.

With the necessary infrastructure in place, we used the virt-install command to install the c9800-CL on a new virtual machine. During the installation process, we specified a number of options such as the connection to the virtualization server, the operating system variant, the architecture of the virtual machine, and the CPU type.

Once the virtual machine was set up and the c9800-CL was installed, we provided a script to configure the controller. This script contained a series of steps that were necessary to properly set up the c9800-CL. These steps included setting the hostname, creating a user account, configuring the Gigabit Ethernet interfaces, creating a VLAN, setting up static routes, shutting down and re-enabling the radio frequencies, and setting the country code. We also configured the virtual wireless LAN controller (VWLC) and set the DNS and NTP servers to ensure proper network connectivity and synchronization.

Finally, we demonstrated how to access the GUI of the c9800-CL at the specified IP address and walk through the zero-day configuration steps to set up a wireless network. By following these steps, users can easily configure the c9800-CL to meet the specific needs of their wireless network.