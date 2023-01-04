---
sidebar_position: 4
---

# Provisioning Fedora Workstation

## To do
- qgis
- psql
- pgadmin4
- wallpaper
- shell


``` bash
#!/bin/bash

# Set Fedora version
FEDORA_VER=$(rpm -E %fedora)

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

# Install pgadmin4
sudo dnf install pgadmin4

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
```
