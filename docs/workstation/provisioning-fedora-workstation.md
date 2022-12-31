---
sidebar_position: 4
---

# Provisioning Fedora Workstation

## To do
- qgis
- psql
- pgadmin4
- wallpaper


## Fast updates

### Increase max downloads
``` bash
sudo echo 'max_parallel_downloads=10' >> /etc/dnf/dnf.conf
```

### Switch to fast mirrors
``` bash
sudo echo 'fastestmirror=True' >> /etc/dnf/dnf.conf
```

### Update and upgrade
``` bash
sudo dnf update && sudo dnf upgrade
```

## Repositories

### RPM fusion

Free rpm repository

``` bash
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
```
Non-free rpm repository

``` bash
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Flathub

``` bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

## Updates

### Upgrade

``` bash
sudo dnf upgrade --refresh
```

### Update

``` bash
sudo dnf groupupdate core
```

### Firmware updates

``` bash
sudo fwupdmgr refresh --force
```
``` bash
sudo fwupdmgr get-updates
```
``` bash
sudo fwupdmgr update
```

### Reboot

``` bash
reboot
```

## Tweaks

### Enable tap to click in settings

### Install gnome tweak tool

``` bash
sudo dnf install gnome-tweak-tool
```

### Install stuff
``` bash
sudo dnf install -y rpi-imager coreos-installer butane ignition-validate
```


### Show battery as percentage

``` bash
gsettings set org.gnome.desktop.interface show-battery-percentage true
```

### Extensions manager 

``` bash
flatpak install org.gnome.Extensions
```

## Add draw on screen 2 extension

Draw on screen 2 extension

### Add bluetooth quick connect extension

### fonts
``` bash
sudo dnf install -y ibm-plex-fonts-all 'google-roboto*' 'mozilla-fira*' fira-code-fonts
```

### Battery optimize

``` bash
sudo dnf install tlp tlp-rdw
```

## Basic software

``` bash
sudo dnf install -y unzip ranger vim
```
## Conclusion

## References

[The guide I used]