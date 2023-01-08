---
sidebar_position: 2
---

# Setting up InfluxDB Database Server with Podman

First create a pod and inflluxdb container using podman, then generate a YAML file using podman play.

The YAML file can be used to recreate the pod in podman, or in kubernetes.

### Create a pod
``` bash
podman pod create -p 8086:8086 -p 1883:1883 -p 9001:9001 -n monitoring
```

### Pull influxdb image
``` bash
podman pull docker.io/influxdb:latest
```

### Run image in pod
``` bash
podman run -d -t \
--name influxdb \
--pod monitoring \
influxdb:latest
```

### Pull mosquitto image
``` bash
podman pull docker.io/eclipse-mosquitto
```

### Run image in pod
``` bash
podman run -t \
--name mosquitto \
--pod monitoring \
eclipse-mosquitto
```


### Generate YAML file
``` bash
podman generate kube monitoring -f monitoring-stack.yaml
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
    io.kubernetes.cri-o.ContainerType/influxdb: container
    io.kubernetes.cri-o.ContainerType/mosquitto: container
    io.kubernetes.cri-o.SandboxID/influxdb: 3e6d0de4f62b7090a2b3e0e4d64f69881894d6d4988b4f87cde736c43e26a62
    io.kubernetes.cri-o.SandboxID/mosquitto: 3e6d0de4f62b7090a2b3e0e4d64f69881894d6d4988b4f87cde736c43e26a62
    io.kubernetes.cri-o.TTY/influxdb: "true"
    io.kubernetes.cri-o.TTY/mosquitto: "true"
    io.podman.annotations.autoremove/influxdb: "FALSE"
    io.podman.annotations.autoremove/mosquitto: "FALSE"
    io.podman.annotations.init/influxdb: "FALSE"
    io.podman.annotations.init/mosquitto: "FALSE"
    io.podman.annotations.privileged/influxdb: "FALSE"
    io.podman.annotations.privileged/mosquitto: "FALSE"
    io.podman.annotations.publish-all/influxdb: "FALSE"
    io.podman.annotations.publish-all/mosquitto: "FALSE"
  creationTimestamp: "2022-12-31T02:23:51Z"
  labels:
    app: monitoring
  name: monitoring
spec:
  automountServiceAccountToken: false
  containers:
  - args:
    - influxd
    image: docker.io/library/influxdb:latest
    name: influxdb
    ports:
    - containerPort: 1883
      hostPort: 1883
    - containerPort: 8086
      hostPort: 8086
    - containerPort: 9001
      hostPort: 9001
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
      name: 130b34101cdf2ca9f58b6166ea376a0f79c5fe18889a00c42f458d3259a8fd8e-pvc
    - mountPath: /var/lib/influxdb2
      name: 70d043a228ff0ccb924b9950887e9b947cfebed5956652cbf2d454ac26a66879-pvc
  - args:
    - /usr/sbin/mosquitto
    - -c
    - /mosquitto/config/mosquitto.conf
    image: docker.io/library/eclipse-mosquitto:latest
    name: mosquitto
    resources: {}
    securityContext:
      capabilities:
        drop:
        - CAP_MKNOD
        - CAP_NET_RAW
        - CAP_AUDIT_WRITE
    tty: true
    volumeMounts:
    - mountPath: /mosquitto/log
      name: f01fc59a9790fea52fd1e862b517d10aaefa3af04ad70e912004b72fd64e95b0-pvc
    - mountPath: /mosquitto/data
      name: 3439da031be88b060d2c4fb4c835a309c573809fcfb45f98dfc12e281f6d263e-pvc
  enableServiceLinks: false
  hostname: monitoring
  restartPolicy: Never
  volumes:
  - name: 130b34101cdf2ca9f58b6166ea376a0f79c5fe18889a00c42f458d3259a8fd8e-pvc
    persistentVolumeClaim:
      claimName: 130b34101cdf2ca9f58b6166ea376a0f79c5fe18889a00c42f458d3259a8fd8e
  - name: 70d043a228ff0ccb924b9950887e9b947cfebed5956652cbf2d454ac26a66879-pvc
    persistentVolumeClaim:
      claimName: 70d043a228ff0ccb924b9950887e9b947cfebed5956652cbf2d454ac26a66879
  - name: f01fc59a9790fea52fd1e862b517d10aaefa3af04ad70e912004b72fd64e95b0-pvc
    persistentVolumeClaim:
      claimName: f01fc59a9790fea52fd1e862b517d10aaefa3af04ad70e912004b72fd64e95b0
  - name: 3439da031be88b060d2c4fb4c835a309c573809fcfb45f98dfc12e281f6d263e-pvc
    persistentVolumeClaim:
      claimName: 3439da031be88b060d2c4fb4c835a309c573809fcfb45f98dfc12e281f6d263e
status: {}
```

### Test YAML file

Delete containers

``` bash
podman rm -vf influxdb
```
``` bash
podman rm -vf mosquitto
```
Delete pod

``` bash
podman pod rm monitoring
```

Re-build pod using podman play and YAML file.

``` bash
podman play kube monitoring-stack.yaml
```

### Reference
[Oracle-Base](https://oracle-base.com/articles/linux/podman-generate-and-play-kubernetes-yaml-files#:~:text=Podman%20can%20generate%20Kubernetes%20YAML,similar%20to%20Docker%20Compose%20files.)





### To do
- mosquitto configuration
- influxdb directory