---
slug: creating-3d-buildings-from-mastermap-with-qgis
title: Creating 3d Buildings From Mastermap With Qgis
authors: reubenliengaard
tags: [hola, docusaurus]
---

# Creating 3d Buildings From Mastermap With Qgis

We can create 3D models of buildings using data from the Ordnance Survey Mastermap Topography Layer, the Building Height Attribute (BHA), and the Environment Agency LiDAR Digital Terrain Model (DTM). The BHA data provides information on the heights of buildings and is available in File Geodatabase format from Digimap. We can visualize the BHA data in 3D using the Qgis2ThreeJS plugin in QGIS. To do this, we must first install the plugin and load the BHA data, DTM data, and any additional desired layers into the QGIS project. We can then use the Qgis2ThreeJS plugin to style the BHA data and create a 3D model by specifying the BHA data and the desired height attribute for extrusion. The resulting 3D model can be saved as an HTML file and viewed in a web browser. When combined with the LiDAR DTM, this data provides a fairly accurate 3D model that can be opened in Grasshopper, a visual programming language and environment that runs within the Rhinoceros 3D CAD application. With the addition of the Ladybug plugin, we can use this 3D model to perform detailed analyses of climate data and create customized, interactive visualizations for environmentally-informed design, such as sunlight studies.

![Docusaurus Plushie](/img/bha-1.png)
![Docusaurus Plushie](/img/bha-2.png)
![Docusaurus Plushie](/img/bha-3.png)
![Docusaurus Plushie](/img/bha-4.png)
![Docusaurus Plushie](/img/bha-5.png)
![Docusaurus Plushie](/img/bha-6.png)
![Docusaurus Plushie](/img/bha-7.png)
![Docusaurus Plushie](/img/bha-8.png)
![Docusaurus Plushie](/img/bha-9.png)
![Docusaurus Plushie](/img/bha-10.png)
![Docusaurus Plushie](/img/bha-11.png)
![Docusaurus Plushie](/img/bha-12.png)


# References
[qgis bha](https://digimap.edina.ac.uk/help/gis/qgis/qgis_bha/)

