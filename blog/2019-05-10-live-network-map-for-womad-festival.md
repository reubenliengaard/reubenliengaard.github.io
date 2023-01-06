---
slug: live-network-map-for-womad-festival
title: Live Network Map for WOMAD Festival - Visualizing Status and Coverage
authors: reubenliengaard
tags: [hello, docusaurus]
---

# Live Network Map for WOMAD Festival - Visualizing Status and Coverage

"We created a web application that requests permission to access the user's location data. When the location of a network device needs to be recorded, the user enters the device's MAC address into the app. This MAC address is checked against a list of available device MAC addresses in the database. If the MAC address exists in the database, it is marked as "deployed" and the coordinates of the user's phone, on which the update was made, are added to the latitude and longitude columns. If the MAC address is entered incorrectly or does not correspond to a device in the database, the app user is notified and asked to enter a different MAC address. Deployed devices are displayed on a map in real-time and can be clicked on to view information about them, such as their device type, MAC address, IP address, or selected for deletion. If a device is selected for deletion, the corresponding value in the "deployment status" column is changed to "false" and the latitude and longitude position values are removed from the latitude and longitude columns."


A BASH script was developed to produce fake data for testing the app. One of these scripts, written in Linux shell language, generates a CSV file containing random MAC addresses, asset tags, device models, and locations. This CSV file is then uploaded to the database for testing purposes.
``` bash
#!/bin/bash

# Generate 100 random devices
for i in {1..100}
do
  # Generate a random MAC address
  mac=$(c=0; until [ $c -eq "6" ]; do printf ":%02X" $(( $RANDOM % 256 )); let c=c+1; done | sed s/://)

  # Generate a random asset number
  asset=$(( $RANDOM % 9999 + 1000 ))

  # Choose a random location from the locations.txt file
  location=$(shuf -n 1 locations.txt)

  # Choose a random model from the models.txt file
  model=$(shuf -n 1 models.txt)

  # Output the device information to a CSV file
  echo "$asset, $mac, $model, $location"
done > devices.csv
```


