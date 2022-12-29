---
sidebar_position: 3
---

# Thermocouple

## Introduction

### What?
> Thermocouples are very sensitive, requiring a good amplifier with a cold-compensation reference. The MAX31855K does everything for you, and can be easily interfaced with any microcontroller, even one without an analog input. This breakout board has the chip itself, a 3.3V regulator with 10uF bypass capacitors and level shifting circuitry, all assembled and tested. Comes with a 2 pin terminal block (for connecting to the thermocouple) and pin header (to plug into any breadboard or perfboard).

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

[Adafruit](https://www.adafruit.com/product/269)