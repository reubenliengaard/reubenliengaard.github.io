---
sidebar_position: 2
---

# InfluxDB

## Introduction

### What?

> InfluxDB is an open-source time series database (TSDB) developed by the company InfluxData. It is written in the Go programming language for storage and retrieval of time series data in fields such as operations monitoring, application metrics, Internet of Things sensor data, and real-time analytics. It also has support for processing data from Graphite.[

### Why?



## Body?

### How?

``` bash
docker run \
      -p 8086:8086 \
      -v myInfluxVolume:/var/lib/influxdb2 \
      influxdb:latest
```
## Conclusion

## References

[InfluxDB](https://en.wikipedia.org/wiki/InfluxDB)