---
sidebar_position: 2
---

# Podman Automation Stack

### Create a pod
``` bash
podman pod create -p 8086:8086  -p 3000:3000 -n automation
```

### Pull geoserver image
``` bash
podman pull grafana/grafana
```

### Run image in pod
``` bash
podman run -d -t \
--name grafana \
--pod automation \
grafana/grafana
```

### Pull postgis image
``` bash
podman pull influxdb:latest
```


### Run image in pod
``` bash
podman run -d -t \
--name influxdb \
--pod automation \
influxdb:latest
```

### Generate YAML file
``` bash
podman generate kube automation -f automation-stack-podman.yaml
```

## Here's the YAML file
``` yaml
# Save the output of this file and use kubectl create -f to import
# it into Kubernetes.
#
# Created with podman-4.3.1
apiVersion: v1
kind: Pod
metadata:
  annotations:
    io.kubernetes.cri-o.ContainerType/grafana: container
    io.kubernetes.cri-o.ContainerType/influxdb: container
    io.kubernetes.cri-o.SandboxID/grafana: c5e2d37a92c924151f0a0f940087b6845b01f0be64fb3bdcffcc03ba867dba6
    io.kubernetes.cri-o.SandboxID/influxdb: c5e2d37a92c924151f0a0f940087b6845b01f0be64fb3bdcffcc03ba867dba6
    io.kubernetes.cri-o.TTY/grafana: "true"
    io.kubernetes.cri-o.TTY/influxdb: "true"
    io.podman.annotations.autoremove/grafana: "FALSE"
    io.podman.annotations.autoremove/influxdb: "FALSE"
    io.podman.annotations.init/grafana: "FALSE"
    io.podman.annotations.init/influxdb: "FALSE"
    io.podman.annotations.privileged/grafana: "FALSE"
    io.podman.annotations.privileged/influxdb: "FALSE"
    io.podman.annotations.publish-all/grafana: "FALSE"
    io.podman.annotations.publish-all/influxdb: "FALSE"
  creationTimestamp: "2022-12-30T19:10:13Z"
  labels:
    app: automation
  name: automation
spec:
  automountServiceAccountToken: false
  containers:
  - image: docker.io/grafana/grafana:latest
    name: grafana
    ports:
    - containerPort: 3000
      hostPort: 3000
    - containerPort: 8086
      hostPort: 8086
    resources: {}
    securityContext:
      capabilities:
        drop:
        - CAP_MKNOD
        - CAP_NET_RAW
        - CAP_AUDIT_WRITE
    tty: true
  - args:
    - influxd
    env:
    - name: INFLUX_CLI_VERSION
      value: 2.6.0
    - name: INFLUXDB_VERSION
      value: 2.6.0
    image: docker.io/library/influxdb:latest
    name: influxdb
    resources: {}
    securityContext:
      capabilities:
        drop:
        - CAP_MKNOD
        - CAP_NET_RAW
        - CAP_AUDIT_WRITE
    tty: true
    volumeMounts:
    - mountPath: /etc/influxdb2
      name: ab808e2802d90f40b10635167d81e832444543b8fff5632777b17b693cd42935-pvc
    - mountPath: /var/lib/influxdb2
      name: d78125111df55a4b0dfd7ac3cf58fcc990988b20651ce6d07d9fe9b0ab3f53fd-pvc
  enableServiceLinks: false
  hostname: automation
  restartPolicy: Never
  volumes:
  - name: ab808e2802d90f40b10635167d81e832444543b8fff5632777b17b693cd42935-pvc
    persistentVolumeClaim:
      claimName: ab808e2802d90f40b10635167d81e832444543b8fff5632777b17b693cd42935
  - name: d78125111df55a4b0dfd7ac3cf58fcc990988b20651ce6d07d9fe9b0ab3f53fd-pvc
    persistentVolumeClaim:
      claimName: d78125111df55a4b0dfd7ac3cf58fcc990988b20651ce6d07d9fe9b0ab3f53fd
status: {}
```

### Test YAML file
``` bash
podman rm -vf postgis
```
``` bash
podman rm -vf geoserver
```
``` bash
podman pod rm spatial
```
``` bash
podman play kube automation-stack-podman.yaml
```

### Reference
[Oracle-Base](https://oracle-base.com/articles/linux/podman-generate-and-play-kubernetes-yaml-files#:~:text=Podman%20can%20generate%20Kubernetes%20YAML,similar%20to%20Docker%20Compose%20files.)