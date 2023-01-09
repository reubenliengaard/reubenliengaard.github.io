---
slug: tracking-network-hardware-assets-at-the-isle-of-wight-festival
title: Tracking Network Hardware Assets at the Isle of Wight Festival
authors: reubenliengaard
tags: [hello, docusaurus]
---

# Tracking Network Hardware Assets at the Isle of Wight Festival

The Isle of Wight Festival 2019 was a large-scale event that took place at Seaclose Park on the Isle of Wight. With 3km of arenas and fields to cover, the deployment of the network was a massive and complex undertaking. To ensure that the site was properly connected, network cabinets were set up in each arena and connected with miles of fiber optic cable. These cabinets were then connected to multiple ADSL connections that were bonded together, providing a robust and reliable internet connection.

To provide connectivity within each arena, smaller network switches were located within 100m of the cabinets. Locations that were beyond this range were connected with wireless point-to-point links, which were either mounted on poles attached to the sides of tents or beam out across the arena from wireless sectors mounted on cherry pickers. These signals were then picked up at distant locations through wireless point-to-point receivers attached to the sides of tents.

In addition to the network infrastructure, the event also required a comprehensive CCTV system to ensure the safety of attendees. To this end, at least one cherry picker equipped with a pan-tilt-zoom CCTV camera was stationed within each arena, with additional cameras installed on scaffolding poles, gateway arches, and stage sides. WiFi was also provided in the crew and camping areas, and temporary offices were equipped with temporary WiFi and VoIP phones for both internal and external communication.

To aid in the deployment and management of the network, we utilized a number of tools and resources. For example, we used QGIS's 'Align Raster' tool to georeference a high-definition image of the site map, which we then uploaded to Mapbox and used to create a basic Leaflet.js web map. This map used the host phone's geolocation to position a marker, helping us to determine our exact location on the site and identify which tents required connectivity. We also used the 'Map Marker' app on Android to quickly locate network devices as we deployed them.

After the event, the map was used to quickly locate and retrieve all of the equipment. This was particularly useful as the staff members who investigate faults or retrieve hardware after an event are often different from those who deployed it, making it difficult to locate the devices without a detailed and up-to-date map showing their locations and connections. By using this map, we were able to efficiently trace faults in the network and ensure that all of the equipment was properly accounted for. Overall, the deployment and management of the network at the Isle of Wight Festival was a successful and complex endeavor that helped to ensure the smooth operation of the event.

