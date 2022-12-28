---
sidebar_position: 3
---

 # Thermocouple


## Introduction

### What?
- MAX31855  ?

### Why?
- monitor pottery kiln temperature
- store data to understand effect firing temperature has on pots
- control temperature through switch solid state relay

## Body

### How?

``` python
import time
import board
import busio
import digitalio
import adafruit_max31855
from influxdb import InfluxDBClient

dbClient = InfluxDBClient('192.168.88.48', 8086, 'root', 'root', 'workshop')


spi = busio.SPI(board.SCK, MOSI=board.MOSI, MISO=board.MISO)
cs = digitalio.DigitalInOut(board.D5)

max31855 = adafruit_max31855.MAX31855(spi, cs)

while True:
    try:
        tempC = max31855.temperature
        tempF = tempC * 9 / 5 + 32
        print("Temperature: {} C {} F ".format(tempC, tempF))
        loginEvents = [{"measurement":"kiln",
                    "fields": {
                            "temp": tempC
                            }
                  }
             ]
        dbClient.write_points(loginEvents)
        time.sleep(2.0)
    except:
        pass
```

## Conclusion

## References