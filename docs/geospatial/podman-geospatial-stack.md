---
sidebar_position: 1
---

# Geospatial Stack Podman






podman pod create -p 8080:8080 -p 5432:5432 -n geospatial



podman pull kartoza/geoserver

podman run -d -t \
--name geoserver \
--pod geospatial \
-e GEOSERVER_ADMIN_USER=postgres \
-e GEOSERVER_ADMIN_PASSWORD=postgres \
kartoza/geoserver 




podman pull kartoza/postgis

podman run -d -t \
--name postgis \
--pod geospatial \
-e POSTGRES_PASS=postgres \
-e POSTGRES_USER=postgres \
kartoza/postgis

podman generate kube geospatial-stack-podman.yaml

podman play kube geospatial-stack-podman.yaml