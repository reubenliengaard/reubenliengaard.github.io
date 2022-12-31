---
sidebar_position: 1
---

# Starting Scripts with Systemd

``` bash
cp script.py /usr/local/bin/script.py
```

``` service
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

```



## References

[RPICT7V1](https://docs.fedoraproject.org/en-US/fedora-coreos/tutorial-services/)

