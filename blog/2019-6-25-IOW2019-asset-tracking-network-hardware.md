---
slug: isle-of-wight
title: Isle of Wight Festival Asset Tracking Network Hardware
authors: reubenliengaard
tags: [hello, docusaurus]
---

# Isle of Wight Festival Asset Tracking Network Hardware

The Isle of Wight Festival 2019 took place at Seaclose Park on the Isle of Wight. It was a large site, covering 3km of arenas and fields. Network cabinets were set up in each arena and connected with miles of fiber optic cable. Each cabinet was connected to multiple ADSL connections that were bonded together. Smaller network switches were located within 100m of the cabinet and provided connectivity within the arena. Locations that were beyond the 100m limit for Ethernet were connected with wireless point-to-point links, either from poles attached to the sides of tents or by mounting wireless sectors on cherry pickers that could beam the signal out across the arena, where it could be picked up at distant locations through wireless point-to-point receivers attached to the sides of tents.

This deployment was massive and complex. While we had a site plan and list of locations that needed connectivity, the physical network structure had to be adapted to the site during construction. We had to navigate around obstacles such as roads and areas of the arena that were accessible to the public. Each main cabinet and sub-cabinet needed its own power supply, which we had to coordinate with the electricians on the fly. Sometimes, if they had been to a location before us, we could locate our cabinets near their distribution boxes by following their cables. Other times, they would move the distribution boxes or we would arrive first and they would provide us with one.

At least one cherry picker, equipped with a pan-tilt-zoom CCTV camera, was stationed within each arena. CCTV cameras were also installed on scaffolding poles, gateway arches, and stage sides. All bars needed connectivity for their payment terminals. WiFi was provided in the crew and camping areas, and temporary offices were equipped with temporary WiFi and VoIP phones for both internal and external communication. This was necessary because the cellular network often becomes overloaded with the high number of people at events.

I utilized QGIS's 'Align Raster' tool to georeference a high-definition image of the site map. I then uploaded this map to Mapbox and created a basic Leaflet.js web map that used the host phone's geolocation to position a marker on the map. This helped us determine our exact location on the map, as physical landmarks were not always visible since the site was under construction. The map helped us identify which tents required connectivity and aided us in orienting ourselves with the site as we walked around.

We used the 'Map Marker' app on Android to quickly locate network devices as we deployed them. The devices were categorized as AP (access point), SW (switch), router, PTZ (CCTV), VoIP (phone), PTP (point-to-point wireless), and cable types of CAT5 and fiber. Since the staff members who investigate faults or retrieve hardware after an event are often different from those who deployed it, it can be difficult to locate the devices. A detailed and up-to-date map that shows the locations and connections of all the devices helps to quickly trace faults in the network, which often requires physically searching through tents to find cables.

When the event was finished, the map was used to quickly locate and retrieve all the equipment.