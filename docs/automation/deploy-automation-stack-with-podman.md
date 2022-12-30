---
sidebar_position: 2
---

# Grafana + Influxdb with Podman

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
podman generate kube automation-stack-podman.yaml
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

## Here's the YAML file
``` yaml



```