---
sidebar_position: 2
---

# Car OBD Port

### Hardware

> OBD-II PIDs (On-board diagnostics Parameter IDs) are codes used to request data from a vehicle, used as a diagnostic tool.

### Script

``` python
#!/usr/bin/python3
import obd
import time
import json
import paho.mqtt.client as mqtt

# define variables
connection = obd.Async("/dev/ttyUSB0")

# global variables to hold values
latest_speed = {}
latest_rpm = {}
latest_engine_load = {}
latest_coolant_temp = {}
latest_intake_pressure = {}
latest_intake_temp = {}
latest_maf = {}
latest_distance_w_mil = {}
latest_fuel_rail_pressure_direct = {}
latest_commanded_egr = {}
latest_fuel_level = {}
latest_barometric_pressure = {}

# loop
def myLoop():
    message = [
                {
                    "measurement": "obd",
                        "fields": {
                            "commanded_egr": latest_commanded_egr,
                            "speed": latest_speed,
                            "rpm": latest_rpm,
                            "engine_load": latest_engine_load,
                            "coolant_temp": latest_coolant_temp,
                            "intake_pressure": latest_intake_pressure,
                            "intake_temp": latest_intake_temp,                            
                            "maf": latest_maf,
                            "distance_w_mil": latest_distance_w_mil,
                            "fuel_rail_pressure_direct": latest_fuel_rail_pressure_direct,
                            "commanded_egr": latest_commanded_egr,
                            "fuel_level": latest_fuel_level,
                            "barometric_pressure": latest_barometric_pressure
                    }
            }
            ]
    # convert to json string
    data_out=json.dumps(message) 

    # This is the Publisher  
    client = mqtt.Client()
    client.username_pw_set(username="admin",password="35d8e")
    client.connect("localhost",1883,60)
    client.publish("sensors/obd", data_out);
    client.disconnect();
    time.sleep(3)

# callbacks for each sensor
def new_speed(r):
    global latest_speed
    latest_speed = r.value.magnitude
    
def new_rpm(r):
    global latest_rpm
    latest_rpm = r.value.magnitude

def new_engine_load(r):
    global latest_engine_load
    latest_engine_load = r.value.magnitude
   
def new_coolant_temp(r):
    global latest_coolant_temp
    latest_coolant_temp = r.value.magnitude
    
def new_intake_pressure(r):
    global latest_intake_pressure
    latest_intake_pressure = r.value.magnitude
    
def new_intake_temp(r):
    global latest_intake_temp
    latest_intake_temp = r.value.magnitude
    
def new_maf(r):
    global latest_maf
    latest_maf = r.value.magnitude
    
def new_distance_w_mil(r):
    global latest_distance_w_mil
    latest_distance_w_mil = r.value.magnitude
    
def new_fuel_rail_pressure_direct(r):
    global latest_fuel_rail_pressure_direct
    latest_fuel_rail_pressure_direct =  r.value.magnitude
    
def new_commanded_egr(r):
    global latest_commanded_egr
    latest_commanded_egr = r.value.magnitude
    
def new_fuel_level(r):
    global latest_fuel_level
    latest_fuel_level = r.value.magnitude
    
def new_barometric_pressure(r):
    global latest_barometric_pressure
    latest_barometric_pressure = r.value.magnitude
   
# callbacks will fire upon receipt of new values
connection.watch(obd.commands.SPEED, callback=new_speed)
connection.watch(obd.commands.RPM, callback=new_rpm)
connection.watch(obd.commands.ENGINE_LOAD, callback=new_engine_load)
connection.watch(obd.commands.COOLANT_TEMP, callback=new_coolant_temp)
connection.watch(obd.commands.INTAKE_PRESSURE, callback=new_intake_pressure)
connection.watch(obd.commands.INTAKE_TEMP, callback=new_intake_temp)
connection.watch(obd.commands.MAF, callback=new_maf)
connection.watch(obd.commands.DISTANCE_W_MIL, callback=new_distance_w_mil)
connection.watch(obd.commands.FUEL_RAIL_PRESSURE_DIRECT, callback=new_fuel_rail_pressure_direct)
connection.watch(obd.commands.COMMANDED_EGR, callback=new_commanded_egr)
connection.watch(obd.commands.FUEL_LEVEL, callback=new_fuel_level)
connection.watch(obd.commands.BAROMETRIC_PRESSURE, callback=new_barometric_pressure)

# start connection
connection.start()

while True:
    myLoop()
    time.sleep(3)

time.sleep(60000)
connection.stop()
```

## References

[Wikipedia](https://en.wikipedia.org/wiki/OBD-II_PIDs)
[GitHub](https://github.com/VilmaH/Python-OBD-MQTT/blob/master/obdmqtt.py)