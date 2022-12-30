---
sidebar_position: 2
---

# Influxdb using podman play kube

First create a pod and inflluxdb container using podman, then generate a YAML file using podman play.

The YAML file can be used to recreate the pod in podman, or in kubernetes.

### Create a pod
``` bash
podman pod create -p 8086:8086 -n monitoring
```

### Pull postgis image
``` bash
podman pull influxdb:latest
```

### Run image in pod
``` bash
podman run -d -t \
--name influxdb \
--pod monitoring \
influxdb:latest
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
    io.kubernetes.cri-o.SandboxID/influxdb: 2d22998804363b3df085ac8fac27ed13c9b1914f8264e2c79f30ef05fc47cf2
    io.kubernetes.cri-o.TTY/influxdb: "true"
    io.podman.annotations.autoremove/influxdb: "FALSE"
    io.podman.annotations.init/influxdb: "FALSE"
    io.podman.annotations.privileged/influxdb: "FALSE"
    io.podman.annotations.publish-all/influxdb: "FALSE"
  creationTimestamp: "2022-12-30T19:42:08Z"
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
    volumeMounts:
    - mountPath: /var/lib/influxdb2
      name: 36831ad4fbc16de21fa23d0036a1c5e96457432aee4485e2d62a06b11617628c-pvc
    - mountPath: /etc/influxdb2
      name: 0ef8bec1d4f74ecc07366abfe90077413b6a6ca093c510443e350b4a8c118288-pvc
  enableServiceLinks: false
  hostname: monitoring
  restartPolicy: Never
  volumes:
  - name: 36831ad4fbc16de21fa23d0036a1c5e96457432aee4485e2d62a06b11617628c-pvc
    persistentVolumeClaim:
      claimName: 36831ad4fbc16de21fa23d0036a1c5e96457432aee4485e2d62a06b11617628c
  - name: 0ef8bec1d4f74ecc07366abfe90077413b6a6ca093c510443e350b4a8c118288-pvc
    persistentVolumeClaim:
      claimName: 0ef8bec1d4f74ecc07366abfe90077413b6a6ca093c510443e350b4a8c118288
status: {}

```

### Test YAML file

Delete container

``` bash
podman rm -vf influxdb
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