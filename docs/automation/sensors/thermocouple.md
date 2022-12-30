---
sidebar_position: 3
---

# Thermocouple

### Hardware

### Script

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


## References

[Adafruit](https://www.adafruit.com/product/269)