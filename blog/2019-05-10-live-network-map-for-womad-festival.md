---
slug: live-network-map-for-womad-festival
title: Live Network Map for WOMAD Festival - Visualizing Status and Coverage
authors: reubenliengaard
tags: [hello, docusaurus]
---

# Live Network Map for WOMAD Festival - Visualizing Status and Coverage

The web application we developed allows users to access and update the location data for network devices. When the location of a device needs to be recorded, the user simply enters the device's MAC address into the app. The MAC address is then checked against a list of available device MAC addresses in the database to verify its authenticity. If the MAC address exists in the database, it is marked as "deployed" and the coordinates of the user's phone, on which the update was made, are added to the latitude and longitude columns. If the MAC address is entered incorrectly or does not correspond to a device in the database, the app user is notified and asked to enter a different MAC address.

The deployed devices are displayed on a map in real-time, allowing users to easily view and locate them. Each device can be clicked on to view information such as its device type, MAC address, IP address, and more. Users also have the option to select a device for deletion, which changes the corresponding value in the "deployment status" column to "false" and removes the latitude and longitude position values from the database.

To aid in testing and debugging the app, we also developed a BASH script that produces fake data for testing purposes. This script generates a CSV file containing random MAC addresses, asset tags, device models, and locations, which can then be uploaded to the database for testing purposes. By using this script, we were able to simulate different scenarios and ensure that the app was functioning correctly before deploying it in a live environment.

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


