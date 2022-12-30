---
sidebar_position: 1
---

# AC Current

### Hardware

- RPICT7V1 AC current sensor 
- SCT-013-000 100a Current Transformer
- UK: 77DB-06-09 Voltage Sensor

### Script

``` python
MQTT_SERV = "localhost"
MQTT_PATH = "RPICT7V1"
MQTT_USER = ""
MQTT_PASS = ""

CHANNELS = ["NodeID", "RP1", "RP2", "RP3", "RP4", "RP5", "RP6", "RP7",
		"Irms1", "Irms2", "Irms3", "Irms4", "Irms5", "Irms6", "Irms7",
		"Vrms"]

import paho.mqtt.client as mqtt
import serial
ser = serial.Serial('/dev/ttyAMA0', 38400)

client = mqtt.Client("P1")
client.username_pw_set(MQTT_USER, MQTT_PASS)
client.connect(MQTT_SERV)

try:
 	while 1:
 		# Read one line from the serial buffer
		 line = ser.readline()
	 
	 	# Remove the trailing carriage return line feed
	 	line = line[:-2]
	 
	 	# Create an array of the data
	 	Z = line.split(' ')
	 
	 	# Print it for debug
	 	print line
	 
		# Publish to the MQTT broker
 		for i in range(len(Z)):
 			client.publish("%s/%s" % (MQTT_PATH, CHANNELS[i]), Z[i]) 
 
except KeyboardInterrupt:
	client.disconnect()
	ser.close()
```


## References

[RPICT7V1](http://lechacal.com/wiki/index.php?title=Raspberrypi_Current_and_Temperature_Sensor_Adaptor#RPICT_Series)