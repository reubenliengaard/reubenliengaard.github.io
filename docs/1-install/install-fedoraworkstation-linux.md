---
sidebar_position: 1
---

# Install Fedora Workstation Linux

Why Fedora?

- Easy to install
- Up to data packge repositories without conflicts
- Very polished well integrated experience
- Latest technologies
- Flakpak support
- Btrfs
- Backed by RedHat / IBM
- Stock Gnome
- Native podman support
- Wayland display manager, no more X11

## live usb using media writer

### download tool
Download it [here](https://getfedora.org/en/workstation/download/)

### run tool
insert usb, run tool, select desired version

## installer

### reboot into installer
once finished, reboot whilst holding down boot menu key and boot into usb stick

### installation
click through installation, select encrypt and use a strong password

## first boot
reboot and remove usb stick

### enter wifi

### connect online account

## fast updates

### increase max downloads
``` bash
sudo echo 'max_parallel_downloads=10' >> /etc/dnf/dnf.conf
```

### switch to fast mirrors
``` bash
sudo echo 'fastestmirror=True' >> /etc/dnf/dnf.conf
```

### update and upgrade
``` bash
sudo dnf update && sudo dnf upgrade
```

## repositories

### rpm fusion

free rpm repository

``` bash
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
```
non-free rpm repository

``` bash
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### flathub
``` bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

## updates

### upgrade
``` bash
sudo dnf upgrade --refresh
```

### update
``` bash
sudo dnf groupupdate core
```

### firmware updates
``` bash
sudo fwupdmgr refresh --force
```
``` bash
sudo fwupdmgr get-updates
```
``` bash
sudo fwupdmgr update
```

### reboot
``` bash
reboot
```

## tweaks

### enable tap to click in settings

### install gnome tweak tool
``` bash
sudo dnf install gnome-tweak-tool
```
### show battery as percentage
``` bash
gsettings set org.gnome.desktop.interface show-battery-percentage true
```

### extensions manager 
``` bash
flatpak install org.gnome.Extensions
```

## add draw on screen 2 extension
Draw on screen 2 extension

### add bluetooth quick connect extension

### fonts
``` bash
sudo dnf install -y ibm-plex-fonts-all 'google-roboto*' 'mozilla-fira*' fira-code-fonts
```

### battery optimize
``` bash
sudo dnf install tlp tlp-rdw
```

## basic software
``` bash
sudo dnf install -y unzip ranger vim
```