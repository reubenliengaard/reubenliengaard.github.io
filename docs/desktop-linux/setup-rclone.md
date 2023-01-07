---
sidebar_position: 4
---

# Setup rclone

### Install rclone from the package manager
``` bash
sudo dnf install rclone
```

### Run the rclone configuration wizard to set up a remote storage provider
``` bash
rclone config
```


### Open the rclone service file in a text editor
``` bash
sudo vim ~/.config/systemd/user/rclone.service
```

### Add the following content to the service file
```
[Unit]
Description=Rclone Sync
After=network.target

[Service]
Type=simple
# Specify the sync command to be run at boot
ExecStart=/usr/bin/rclone sync /Documents/ google:Documents/ 
# Restart the service if it fails
Restart=on-failure

[Install]
# Enable the service to start at boot
WantedBy=multi-user.target
```

### Check the status of the rclone service
``` bash
systemctl --user status rclone.service
```

### Start the rclone service immediately
``` bash
systemctl --user start rclone.service
```

### Enable the rclone service to start at boot
``` bash
systemctl --user enable rclone.service
```

### Reload the system manager configuration
``` bash
systemctl --user daemon-reload
```