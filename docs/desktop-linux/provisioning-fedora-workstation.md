---
sidebar_position: 4
---

# Provisioning Fedora Workstation

## To do
- qgis
- psql
- pgadmin4
- wallpaper


``` bash
#!/bin/bash

# Install the PostgreSQL repository
sudo rpm -i https://ftp.postgresql.org/pub/pgadmin/pgadmin4/yum/pgadmin4-fedora-repo-2-1.noarch.rpm

# Install pgadmin4
sudo yum install pgadmin4

# Set dnf configuration options
echo 'max_parallel_downloads=10' | sudo tee -a /etc/dnf/dnf.conf
echo 'fastestmirror=True' | sudo tee -a /etc/dnf/dnf.conf

# Update and upgrade packages
sudo dnf update && sudo dnf upgrade

# Install RPM Fusion repositories
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

# Add Flathub repository
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Refresh package list and update core packages
sudo dnf upgrade --refresh
sudo dnf groupupdate core

# Update firmware
sudo fwupdmgr refresh --force
sudo fwupdmgr get-updates
sudo fwupdmgr update

# Install Gnome Tweak Tool
sudo dnf install gnome-tweak-tool

# Install other tools
sudo dnf install -y rpi-imager coreos-installer butane ignition-validate

# Enable display of battery percentage
gsettings set org.gnome.desktop.interface show-battery-percentage true

# Install Gnome Extensions
flatpak install org.gnome.Extensions

# Install fonts
sudo dnf install -y ibm-plex-fonts-all 'google-roboto*' 'mozilla-fira*' fira-code-fonts

# Install TLP and vim
sudo dnf install tlp tlp-rdw
sudo dnf install -y unzip ranger vim
```
