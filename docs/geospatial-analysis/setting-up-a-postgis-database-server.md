---
sidebar_position: 1
---

# Setting up PostGIS Database Server

### Create a pod
``` bash
podman pod create -p 8080:8080 -p 5432:5432 -n geospatial
```

### Run image in pod
``` bash
podman run \
--pod geospatial \
--name postgis \
-e POSTGRES_PASSWORD=postgres \
-d postgis/postgis
```

### auto gen systemd file
``` bash
podman generate systemd postgis >
/home/$user/.config/systemd/user/postgis.service
```

### start postgis service
``` bash
systemctl start --user postgis.service
```

### enable postgis service
``` bash
systemctl start --user postgis.service
```

``` bash
podman start postgis
```
## Check
``` bash
psql -h localhost -p 5432 -U postgres 
```


### Generate YAML file
``` bash
podman generate kube geospatial -f geospatial-stack-podman.yaml
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
    io.kubernetes.cri-o.ContainerType/geoserver: container
    io.kubernetes.cri-o.ContainerType/postgis: container
    io.kubernetes.cri-o.SandboxID/geoserver: 5579c50f78551192cbc7eafed6f04db71155c3690d677c9a5741b25fe54fc14
    io.kubernetes.cri-o.SandboxID/postgis: 5579c50f78551192cbc7eafed6f04db71155c3690d677c9a5741b25fe54fc14
    io.kubernetes.cri-o.TTY/geoserver: "true"
    io.kubernetes.cri-o.TTY/postgis: "true"
    io.podman.annotations.autoremove/geoserver: "FALSE"
    io.podman.annotations.autoremove/postgis: "FALSE"
    io.podman.annotations.init/geoserver: "FALSE"
    io.podman.annotations.init/postgis: "FALSE"
    io.podman.annotations.privileged/geoserver: "FALSE"
    io.podman.annotations.privileged/postgis: "FALSE"
    io.podman.annotations.publish-all/geoserver: "FALSE"
    io.podman.annotations.publish-all/postgis: "FALSE"
  creationTimestamp: "2022-12-30T13:47:48Z"
  labels:
    app: geospatial
  name: geospatial
spec:
  automountServiceAccountToken: false
  containers:
  - env:
    - name: GEOSERVER_ADMIN_USER
      value: postgres
    - name: GEOSERVER_ADMIN_PASSWORD
      value: postgres
    image: docker.io/kartoza/geoserver:latest
    name: geoserver
    ports:
    - containerPort: 5432
      hostPort: 5432
    - containerPort: 8080
      hostPort: 8080
    resources: {}
    securityContext:
      capabilities:
        drop:
        - CAP_MKNOD
        - CAP_NET_RAW
        - CAP_AUDIT_WRITE
    tty: true
  - env:
    - name: POSTGRES_PASS
      value: postgres
    - name: POSTGRES_USER
      value: postgres
    image: docker.io/kartoza/postgis:latest
    name: postgis
    resources: {}
    securityContext:
      capabilities:
        drop:
        - CAP_MKNOD
        - CAP_NET_RAW
        - CAP_AUDIT_WRITE
    tty: true
    volumeMounts:
    - mountPath: /var/lib/postgresql
      name: 3276e85c3fc649e1904e0161ff79599dcc3292e9121982d648c0f2c47585abaf-pvc
  enableServiceLinks: false
  hostname: geospatial
  restartPolicy: Never
  volumes:
  - name: 3276e85c3fc649e1904e0161ff79599dcc3292e9121982d648c0f2c47585abaf-pvc
    persistentVolumeClaim:
      claimName: 3276e85c3fc649e1904e0161ff79599dcc3292e9121982d648c0f2c47585abaf
status: {}
```

### Test YAML file

#### Remove postgis container
``` bash
podman rm -vf postgis
```

#### Remove geoserver container
``` bash
podman rm -vf geoserver
```

#### Remove spatial pod
``` bash
podman pod rm spatial
```

#### Install everything again using the YAML file
``` bash
podman play kube geospatial-stack-podman.yaml
```