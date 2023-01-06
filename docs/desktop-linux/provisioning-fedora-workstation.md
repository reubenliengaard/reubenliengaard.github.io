---
sidebar_position: 4
---

# Provisioning Fedora Workstation

This script installs and updates various packages and tools on a Fedora system. It installs the PostgreSQL database management system, the RPM Fusion repositories, and the Flathub repository. It also updates the system's packages and firmware, installs the Gnome Tweak Tool, some tools for working with CoreOS, and sets some configuration options for dnf (the Fedora package manager).

``` bash
#!/bin/bash

# Set Fedora version
FEDORA_VER=$(rpm -E %fedora)

# Remove any old pgadmin repos
sudo rpm -e pgadmin4-fedora-repo

# Set URLs for RPM Fusion repositories
FREE_REPO_URL="https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-${FEDORA_VER}.noarch.rpm"
NONFREE_REPO_URL="https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-${FEDORA_VER}.noarch.rpm"

# Set URL for pgAdmin4 repository
PGADMIN_REPO_URL="https://ftp.postgresql.org/pub/pgadmin/pgadmin4/yum/pgadmin4-fedora-repo-2-1.noarch.rpm"

# Set dnf configuration options
echo 'max_parallel_downloads=10' | sudo tee -a /etc/dnf/dnf.conf
echo 'fastestmirror=True' | sudo tee -a /etc/dnf/dnf.conf

# Add the PostgreSQL repository
sudo rpm -i "$PGADMIN_REPO_URL"

# Install RPM Fusion repositories
sudo dnf install "$FREE_REPO_URL" "$NONFREE_REPO_URL"

# Add Flathub repository
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Update and upgrade packages
sudo dnf update && sudo dnf upgrade

# Refresh package list and update core packages
sudo dnf upgrade --refresh
sudo dnf groupupdate core

# Update firmware
sudo fwupdmgr refresh --force
sudo fwupdmgr get-updates
sudo fwupdmgr update

# Install Gnome Tweak Tool and tool for working with CoreOS
sudo dnf install gnome-tweak-tool rpi-imager coreos-installer

# Install Qgis
sudo dnf install qgis python3-qgis qgis-grass qgis-server

# Install pgadmin4
sudo tum install pgadmin4

# Install ranger
sudo dnf ranger

# Install zsh
sudo dnf zsh

# Install kitty
sudo dnf kitty

# Install psql
sudo dnf psql

# Oh My ZSH
wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh
sh install.sh
```

