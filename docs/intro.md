---
sidebar_position: 1
---

# Introduction

Streamlining technology stacks.


``` yaml
variant: fcos
version: 1.4.0
systemd:
  units:
    - name: serial-getty@ttyS0.service
      dropins:
      - name: autologin-core.conf
        contents: |
          [Service]
          # Override Execstart in main unit
          ExecStart=
          # Add new Execstart with `-` prefix to ignore failure`
          ExecStart=-/usr/sbin/agetty --autologin core --noclear %I $TERM
    - name: issuegen-public-ipv4.service
      enabled: true
      contents: |
        [Unit]
        Before=systemd-user-sessions.service
        Wants=network-online.target
        After=network-online.target
        ConditionPathExists=!/var/lib/issuegen-public-ipv4

        [Service]
        Type=oneshot
        ExecStart=/usr/local/bin/public-ipv4.sh
        ExecStartPost=/usr/bin/touch /var/lib/issuegen-public-ipv4
        RemainAfterExit=yes

        [Install]
        WantedBy=multi-user.target
storage:
  files:
    - path: /etc/hostname
      mode: 0644
      contents:
        inline: |
          coreos-python-sensor
    - path: /etc/profile.d/systemd-pager.sh
      mode: 0644
      contents:
        inline: |
          # Tell systemd to not use a pager when printing information
          export SYSTEMD_PAGER=cat
    - path: /usr/local/bin/public-ipv4.sh
      mode: 0755
      contents:
        inline: |
          #!/bin/bash
          echo "Detected Public IPv4: is $(curl https://ipv4.icanhazip.com)" > \
              /etc/issue.d/50_public-ipv4.issue

              ``` 