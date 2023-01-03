"use strict";(self.webpackChunkreubenliengaard_github_io=self.webpackChunkreubenliengaard_github_io||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"constructing-a-3d-egg-shape-from-regular-polygons","metadata":{"permalink":"/blog/constructing-a-3d-egg-shape-from-regular-polygons","editUrl":"https://github.com/reubenliengaard/blog/2021-07-04-constructing-a-3d-egg-shape-from-regular-polygons.md","source":"@site/blog/2021-07-04-constructing-a-3d-egg-shape-from-regular-polygons.md","title":"Constructing a 3d egg shape from regular polygons","description":"Docusaurus Plushie","date":"2021-07-04T00:00:00.000Z","formattedDate":"July 4, 2021","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.02,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"constructing-a-3d-egg-shape-from-regular-polygons","title":"Constructing a 3d egg shape from regular polygons","authors":"reubenliengaard","tags":["hello","docusaurus"]},"nextItem":{"title":"designing-a-modular-circular-stage","permalink":"/blog/designing-a-modular-circular-stage"}},"content":"![Docusaurus Plushie](/img/egg-1.jpg)\\n\\n![Docusaurus Plushie](/img/egg-2.jpg)"},{"id":"designing-a-modular-circular-stage","metadata":{"permalink":"/blog/designing-a-modular-circular-stage","editUrl":"https://github.com/reubenliengaard/blog/2021-07-04-creating-a-modular-circular-stage.md","source":"@site/blog/2021-07-04-creating-a-modular-circular-stage.md","title":"designing-a-modular-circular-stage","description":"Docusaurus Plushie","date":"2021-07-04T00:00:00.000Z","formattedDate":"July 4, 2021","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.11,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"designing-a-modular-circular-stage","title":"designing-a-modular-circular-stage","authors":"reubenliengaard","tags":["hola","docusaurus"]},"prevItem":{"title":"Constructing a 3d egg shape from regular polygons","permalink":"/blog/constructing-a-3d-egg-shape-from-regular-polygons"},"nextItem":{"title":"House prices paid by parish","permalink":"/blog/house-price-paid-parish"}},"content":"![Docusaurus Plushie](/img/stage-1.jpg)\\n![Docusaurus Plushie](/img/stage-2.jpg)\\n![Docusaurus Plushie](/img/stage-3.jpg)\\n![Docusaurus Plushie](/img/stage-4.jpg)\\n![Docusaurus Plushie](/img/stage-5.jpg)\\n![Docusaurus Plushie](/img/stage-6.jpg)\\n![Docusaurus Plushie](/img/stage-7.jpg)\\n![Docusaurus Plushie](/img/stage-8.jpg)\\n![Docusaurus Plushie](/img/stage-9.jpg)\\n![Docusaurus Plushie](/img/stage-10.jpg)\\n![Docusaurus Plushie](/img/stage-11.jpg)"},{"id":"house-price-paid-parish","metadata":{"permalink":"/blog/house-price-paid-parish","editUrl":"https://github.com/reubenliengaard/blog/2021-07-04-house-prices-paid-by-parish.md","source":"@site/blog/2021-07-04-house-prices-paid-by-parish.md","title":"House prices paid by parish","description":"Docusaurus Plushie","date":"2021-07-04T00:00:00.000Z","formattedDate":"July 4, 2021","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":1.9,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"house-price-paid-parish","title":"House prices paid by parish","authors":"reubenliengaard","tags":["hello","docusaurus"]},"prevItem":{"title":"designing-a-modular-circular-stage","permalink":"/blog/designing-a-modular-circular-stage"},"nextItem":{"title":"Manchester Pride - Ruckus wireless heatmap","permalink":"/blog/manchester-pride"}},"content":"![Docusaurus Plushie](/img/price-paid-parish.jpg)\\n\\n# House prices paid by parish\\n\\nTo obtain the latitude and longitude positions of each house sale value, the house price paid postcodes from the land registry were cross-referenced with OS code point data. The UK parish data was then uploaded to PostGIS, and an SQL query was used to calculate the average price within each parish. This information was imported into QGIS and used to apply a style to the parish polygons based on the average value..\\n\\n\\n\\n\\n# Average Price Paid Parish\\n\\n## Download data\\n\\nDonloading a csv file of property price paid data for each of the last three years, postcode coordinates, and\\nboundry line polygons.\\n\\n```\\n$ wget bdline_gpkg_gb.zip\\n&& unzip bdline_gpkg_gb.zip\\n&& cd data\\n```\\n## Import bdline\\n\\nUsing ogr2ogr to convert the boundry line GeoPackage file into PostgreSQL file, reprojecting it from\\nOSGB1936 to WGS84, and importing it into the database.\\n\\n```\\nogr2ogr \\\\\\n-f \\"PostgreSQL\\" \\\\\\n-a_srs \\"EPSG:27700\\" \\\\\\n```\\n\\n```\\n-t_srs \\"EPSG:4326\\" \\\\\\n-progress PG:\\"dbname=\'gis\' host=\'$ip\' port=\'5432\' user=\'$user\'\\npassword=\'$password\'\\" \\\\\\nbdline_gb.gpkg\\n```\\n## Connect to server\\n\\nStarting a psql instance on the client in order to interact with the database on the server.\\n\\n```\\npsql -h 192.168.88.10 -U postgres gis\\n```\\n# Create priced paid polygons for every point\\n\\nUsing the point data already present in the database from the previous project to create a duplicate\\npolygon from the parish geometry table for every point each polygon contains, and appending the point\\nprice paid to it.\\n\\n### SELECT\\n\\n```\\nparish.geom,\\npoints.pounds\\nINTO pp_parish\\nFROM\\nparish INNER JOIN points\\nON st_contains(parish.geom, points.geom);\\n```\\n## Find avarage point value for duplicate polygons\\n\\nAs in the previous project, avaraging the values of the duplicate polygons back one.\\n\\n```\\nSELECT geom,avg(pounds)\\nINTO avg_pp_parish\\nFROM pp_parish\\nGROUP BY geom;\\n```\\n## Import new price paid polygons to file\\n\\n```\\nQgis > Database > DB Manager > Import Layer/File - Name: pp_parish\\n```\\n## Add price paid polygons layer to Qgis\\n\\n```\\nQgis > Layer > Add Layer > Add Vector Layer\\nQgis > Database > DB Manager > Import Layer/File - Name: pp_parish\\nVector Dataset(s): .shp\\n```\\n\\n## Colour polygons by attribute field\\n\\n```\\nRight click: Layer > Properties\\nSymbology > Single Symbol: Gradiated\\nVaule: pounds\\nColour Ramp: Spectral\\nInvert Colour Ramp\\nSegmentation: Equal Interval\\n```"},{"id":"manchester-pride","metadata":{"permalink":"/blog/manchester-pride","editUrl":"https://github.com/reubenliengaard/blog/2021-07-04-manchester-pride-heat-map.md","source":"@site/blog/2021-07-04-manchester-pride-heat-map.md","title":"Manchester Pride - Ruckus wireless heatmap","description":"During this deployment, we faced a physically challenging task. We mounted two sectors on the 18th floor of a tower block that was next to the site. From there, we transmitted the signal to multiple wireless point-to-point stations that were attached to temporary structures and buildings within the site. We also provided indoor wireless coverage in an underground parking garage that was used as one of the event venues. I created a heat map of the wireless signal strength in this area. In addition, we established uplinks at various locations to support ticket booths, CCTV cameras, payment terminals for bars, a production office, and emergency liaison cabins.","date":"2021-07-04T00:00:00.000Z","formattedDate":"July 4, 2021","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.535,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"manchester-pride","title":"Manchester Pride - Ruckus wireless heatmap","authors":"reubenliengaard","tags":["hola","docusaurus"]},"prevItem":{"title":"House prices paid by parish","permalink":"/blog/house-price-paid-parish"},"nextItem":{"title":"Modeling a Spherical Solar Concentrator","permalink":"/blog/modeling-a-spherical-solar-concentrator"}},"content":"During this deployment, we faced a physically challenging task. We mounted two sectors on the 18th floor of a tower block that was next to the site. From there, we transmitted the signal to multiple wireless point-to-point stations that were attached to temporary structures and buildings within the site. We also provided indoor wireless coverage in an underground parking garage that was used as one of the event venues. I created a heat map of the wireless signal strength in this area. In addition, we established uplinks at various locations to support ticket booths, CCTV cameras, payment terminals for bars, a production office, and emergency liaison cabins."},{"id":"modeling-a-spherical-solar-concentrator","metadata":{"permalink":"/blog/modeling-a-spherical-solar-concentrator","editUrl":"https://github.com/reubenliengaard/blog/2021-07-04-modeling-a-spherical-solar-concentrator.md","source":"@site/blog/2021-07-04-modeling-a-spherical-solar-concentrator.md","title":"Modeling a Spherical Solar Concentrator","description":"Docusaurus Plushie","date":"2021-07-04T00:00:00.000Z","formattedDate":"July 4, 2021","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.06,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"modeling-a-spherical-solar-concentrator","title":"Modeling a Spherical Solar Concentrator","authors":"reubenliengaard","tags":["hello","docusaurus"]},"prevItem":{"title":"Manchester Pride - Ruckus wireless heatmap","permalink":"/blog/manchester-pride"},"nextItem":{"title":"Modeling a truss connection","permalink":"/blog/modeling-a-truss-connection"}},"content":"![Docusaurus Plushie](/img/solar-concentrator-1.jpg)\\n![Docusaurus Plushie](/img/solar-concentrator-3.jpg)\\n![Docusaurus Plushie](/img/solar-concentrator-4.jpg)\\n\\n# Designing a Spherical Solar Concentrator"},{"id":"modeling-a-truss-connection","metadata":{"permalink":"/blog/modeling-a-truss-connection","editUrl":"https://github.com/reubenliengaard/blog/2021-07-04-modeling-a-truss-connection.md","source":"@site/blog/2021-07-04-modeling-a-truss-connection.md","title":"Modeling a truss connection","description":"Docusaurus Plushie","date":"2021-07-04T00:00:00.000Z","formattedDate":"July 4, 2021","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.03,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"modeling-a-truss-connection","title":"Modeling a truss connection","authors":"reubenliengaard","tags":["hola","docusaurus"]},"prevItem":{"title":"Modeling a Spherical Solar Concentrator","permalink":"/blog/modeling-a-spherical-solar-concentrator"},"nextItem":{"title":"House prices paid parcels","permalink":"/blog/house-price-parcels"}},"content":"![Docusaurus Plushie](/img/truss-1.jpg)\\n![Docusaurus Plushie](/img/truss-2.jpg)\\n![Docusaurus Plushie](/img/truss-3.png)"},{"id":"house-price-parcels","metadata":{"permalink":"/blog/house-price-parcels","editUrl":"https://github.com/reubenliengaard/blog/2021-07-02-house-prices-paid-by-parcels.md","source":"@site/blog/2021-07-02-house-prices-paid-by-parcels.md","title":"House prices paid parcels","description":"Prepare prices data","date":"2021-07-02T00:00:00.000Z","formattedDate":"July 2, 2021","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":3.535,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"house-price-parcels","title":"House prices paid parcels","authors":"reubenliengaard","tags":["hello","docusaurus"]},"prevItem":{"title":"Modeling a truss connection","permalink":"/blog/modeling-a-truss-connection"},"nextItem":{"title":"Royal Windsor Horse Show - Ruckus wireless heatmap","permalink":"/blog/windsor-horse-show"}},"content":"## Prepare prices data\\n\\n![Docusaurus Plushie](/img/price-paid-parcel.jpg)\\n\\n\\nConcatenating the three price paid files together into one file, removing unnecessary field quotes,\\nselecting only rows which contain the string GL followed by a number between zero and nine, then printing\\nout only columns four and two, adding column names, then deleting rows containing null values.\\n\\n```\\n$ cat pp-2018.csv pp-2019.csv pp-2020.csv | tr -d \'\\"\' > pp_3year.csv \\\\\\n&& awk -F\\",\\" \'/GL+[0-9]/ { print $4 \\",\\" $2}\' pp_3year.csv > gl_p_3.csv \\\\\\n&& { echo \\"postcode, pounds\\"; cat gl_p_3.csv; } > prices.csv \\\\\\n&& sed -i \'/\\\\\\\\N/d\' prices.csv\\n```\\n## Prepare location data\\n\\nApplying the same process as for the price data, minus the concatenation.\\n\\n```\\n$ awk -F\\",\\" \'/GL+[0-9]/ { print $1 \\",\\" $8 \\",\\" $9}\' open_postcode_geo.csv >\\ngl_l.csv \\\\\\n&& { echo \\"postcode, latitude, longitude\\"; cat gl_l.csv; } >\\ncoordinates.csv \\\\\\n&& sed -i \'/\\\\\\\\N/d\' coordinates.csv\\n```\\n## Import parcels\\n\\n\\nUsing ogr2ogr to convert the cadastral parcels GML file into PostgreSQL file, projecting it from OSGB\\nto WGS84, and importing it into the database.\\n\\n```\\nogr2ogr \\\\\\n-f \\"PostgreSQL\\" \\\\\\n-a_srs \\"EPSG:27700\\" \\\\\\n-t_srs \\"EPSG:4326\\" \\\\\\n-nln parcels \\\\\\n-progress \\\\\\nPG:\\"dbname=\'gis\' host=\'$ip\' port=\'5432\' user=\'$user\'\\npassword=\'$password\'\\" \\\\\\nLand_Registry_Cadastral_Parcels.gml\\n```\\n## Connect to server\\n\\nStarting a psql instance on the client in order to interact with the database on the server.\\n\\n```\\npsql -h 192.168.88.10 -U postgres gis\\n```\\n## Create prices table\\n\\nCreating a new empty table, with an auto incrementing primary key of type serial, and text and integer\\ncolumns for postcodes and pounds respectively.\\n\\n```\\nCREATE TABLE prices (\\np_prices_id serial PRIMARY KEY,\\np_postcode TEXT NOT NULL,\\npounds INTEGER NOT NULL\\n);\\n```\\n## Create location table\\n\\nCreating a similar empty table for locations, but with latitude, and longitude columns rather instead of a\\npounds column.\\n\\n```\\nCREATE TABLE coordinates (\\nc_id serial PRIMARY KEY,\\nc_postcode TEXT NOT NULL,\\nlatitude FLOAT NOT NULL,\\nlongitude FLOAT NOT NULL\\n);\\n```\\n## Populate prices table\\n\\n\\nImporting the prices data into the new price column using the \\\\copy command in psql.\\n\\n```\\n\\\\copy prices(p_postcode, pounds) FROM \'/home/reuben/Downloads/prices.csv\'\\nDELIMITER \',\' CSV HEADER;\\n```\\n## Populate coordinates table\\n\\nRepeating the process for the coordinates data.\\n\\n```\\n\\\\copy coordinates(c_postcode, latitude, longitude) FROM\\n\'/home/reuben/Downloads/coordinates.csv\' DELIMITER \',\' CSV HEADER;\\n```\\n# Join coordinates and prices into points\\n\\nUsing the SQL join command to make a new table containing the prices and coordinates which share the\\nsame postcode.\\n\\n### SELECT\\n\\n```\\nc_id,\\nc_postcode,\\nlatitude,\\nlongitude,\\npounds\\nINTO points\\nFROM coordinates INNER JOIN prices\\nON coordinates.c_postcode = prices.p_postcode;\\n```\\n# Add geometry column to points\\n\\nAdding an geometry column to the new table.\\n\\n```\\nALTER TABLE points ADD COLUMN geom GEOMETRY(Point, 4326 );\\n```\\n# Update points from coordinates\\n\\nPopulating the geometry column with points created using the contents of the latitude and longitude\\ncolumns.\\n\\n\\n```\\nUPDATE points SET geom = ST_SETSRID(ST_MakePoint(longitude,\\nlatitude), 4326 );\\n```\\n# Create priced polygons\\n\\nCreating a duplicate polygon for every point it contains, and appending the point price paid to it.\\n\\n### SELECT\\n\\n```\\nc_id,\\nparcels.wkb_geometry,\\npoints.pounds\\nINTO polygons\\nFROM\\nparcels INNER JOIN points\\nON st_contains(parcels.wkb_geometry, points.geom);\\n```\\n## Find avarage point value for duplicate polygons\\n\\nAvaraging the values of the duplicate polygons into one. I\'m sure there must be a more efficient way of\\ndoing this with less steps, I will have to look into it.\\n\\n```\\nSELECT c_id,geom,avg(pounds)\\nINTO avg_polygons\\nFROM polygons\\nGROUP BY geom;\\n```\\n## Import new price paid polygons to file\\n\\nUsing Qgis to export the table from the database.\\n\\n```\\nQgis > Database > DB Manager > Import Layer/File - Name: avg_polygons\\n```\\n## Add price paid polygons layer to Qgis\\n\\nDisplaying the layer in Qgis.\\n\\n```\\nQgis > Layer > Add Layer > Add Vector Layer\\nQgis > Database > DB Manager > Import Layer/File - Name: avg_polygons\\nVector Dataset(s): .shp\\n```\\n## Colour polygons by attribute field\\n\\nTweaking the layer properties in order to create a nice visual effect.\\n\\n```\\nRight click: Layer > Properties\\n```\\n\\n```\\nSymbology > Single Symbol: Graduated\\nValue: pounds\\nColour Ramp: Spectral\\nInvert Colour Ramp\\nSegmentation: Equal Interval\\n```\\nI think that some of the postcodes have fallen outside of their intended polygons, for the next project I will\\nuse a set of polygons with less resolution."},{"id":"windsor-horse-show","metadata":{"permalink":"/blog/windsor-horse-show","editUrl":"https://github.com/reubenliengaard/blog/2019-07-01-WHS2018-ruckus-wireless-heatmap.md","source":"@site/blog/2019-07-01-WHS2018-ruckus-wireless-heatmap.md","title":"Royal Windsor Horse Show - Ruckus wireless heatmap","description":"The Royal Windsor Horse Show is the largest outdoor horse show in the UK. We provided connectivity to the staff and trader areas. After deployment, a wireless heat map was created by extensively taking geolocated signal strength readings on a smartphone from all over the site. This data was uploaded into ArcGIS and used to create a heat map, which highlighted areas with weak signal strength or wireless black spots. This heat map was overlaid on a georeferenced site map, with the locations of wireless access points, cable routes, and network switch locations marked.","date":"2019-07-01T00:00:00.000Z","formattedDate":"July 1, 2019","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.47,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"windsor-horse-show","title":"Royal Windsor Horse Show - Ruckus wireless heatmap","authors":"reubenliengaard","tags":["hola","docusaurus"]},"prevItem":{"title":"House prices paid parcels","permalink":"/blog/house-price-parcels"},"nextItem":{"title":"Isle of Wight Festival Asset Tracking Network Hardware","permalink":"/blog/isle-of-wight"}},"content":"The Royal Windsor Horse Show is the largest outdoor horse show in the UK. We provided connectivity to the staff and trader areas. After deployment, a wireless heat map was created by extensively taking geolocated signal strength readings on a smartphone from all over the site. This data was uploaded into ArcGIS and used to create a heat map, which highlighted areas with weak signal strength or wireless black spots. This heat map was overlaid on a georeferenced site map, with the locations of wireless access points, cable routes, and network switch locations marked."},{"id":"isle-of-wight","metadata":{"permalink":"/blog/isle-of-wight","editUrl":"https://github.com/reubenliengaard/blog/2019-6-05-isle-of-wight-asset-tracking-network-hardware.md","source":"@site/blog/2019-6-05-isle-of-wight-asset-tracking-network-hardware.md","title":"Isle of Wight Festival Asset Tracking Network Hardware","description":"The Isle of Wight Festival 2019 took place at Seaclose Park on the Isle of Wight. It was a large site, covering 3km of arenas and fields. Network cabinets were set up in each arena and connected with miles of fiber optic cable. Each cabinet was connected to multiple ADSL connections that were bonded together. Smaller network switches were located within 100m of the cabinet and provided connectivity within the arena. Locations that were beyond the 100m limit for Ethernet were connected with wireless point-to-point links, either from poles attached to the sides of tents or by mounting wireless sectors on cherry pickers that could beam the signal out across the arena, where it could be picked up at distant locations through wireless point-to-point receivers attached to the sides of tents.","date":"2019-06-05T00:00:00.000Z","formattedDate":"June 5, 2019","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":2.69,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"isle-of-wight","title":"Isle of Wight Festival Asset Tracking Network Hardware","authors":"reubenliengaard","tags":["hello","docusaurus"]},"prevItem":{"title":"Royal Windsor Horse Show - Ruckus wireless heatmap","permalink":"/blog/windsor-horse-show"},"nextItem":{"title":"Live network status map for WOMAD 2020","permalink":"/blog/womad"}},"content":"The Isle of Wight Festival 2019 took place at Seaclose Park on the Isle of Wight. It was a large site, covering 3km of arenas and fields. Network cabinets were set up in each arena and connected with miles of fiber optic cable. Each cabinet was connected to multiple ADSL connections that were bonded together. Smaller network switches were located within 100m of the cabinet and provided connectivity within the arena. Locations that were beyond the 100m limit for Ethernet were connected with wireless point-to-point links, either from poles attached to the sides of tents or by mounting wireless sectors on cherry pickers that could beam the signal out across the arena, where it could be picked up at distant locations through wireless point-to-point receivers attached to the sides of tents.\\n\\nThis deployment was massive and complex. While we had a site plan and list of locations that needed connectivity, the physical network structure had to be adapted to the site during construction. We had to navigate around obstacles such as roads and areas of the arena that were accessible to the public. Each main cabinet and sub-cabinet needed its own power supply, which we had to coordinate with the electricians on the fly. Sometimes, if they had been to a location before us, we could locate our cabinets near their distribution boxes by following their cables. Other times, they would move the distribution boxes or we would arrive first and they would provide us with one.\\n\\n![Docusaurus Plushie](/img/iow.png)\\n\\nAt least one cherry picker, equipped with a pan-tilt-zoom CCTV camera, was stationed within each arena. CCTV cameras were also installed on scaffolding poles, gateway arches, and stage sides. All bars needed connectivity for their payment terminals. WiFi was provided in the crew and camping areas, and temporary offices were equipped with temporary WiFi and VoIP phones for both internal and external communication. This was necessary because the cellular network often becomes overloaded with the high number of people at events.\\n\\nI utilized QGIS\'s \'Align Raster\' tool to georeference a high-definition image of the site map. I then uploaded this map to Mapbox and created a basic Leaflet.js web map that used the host phone\'s geolocation to position a marker on the map. This helped us determine our exact location on the map, as physical landmarks were not always visible since the site was under construction. The map helped us identify which tents required connectivity and aided us in orienting ourselves with the site as we walked around.\\n\\nWe used the \'Map Marker\' app on Android to quickly locate network devices as we deployed them. The devices were categorized as AP (access point), SW (switch), router, PTZ (CCTV), VoIP (phone), PTP (point-to-point wireless), and cable types of CAT5 and fiber. Since the staff members who investigate faults or retrieve hardware after an event are often different from those who deployed it, it can be difficult to locate the devices. A detailed and up-to-date map that shows the locations and connections of all the devices helps to quickly trace faults in the network, which often requires physically searching through tents to find cables.\\n\\nWhen the event was finished, the map was used to quickly locate and retrieve all the equipment."},{"id":"womad","metadata":{"permalink":"/blog/womad","editUrl":"https://github.com/reubenliengaard/blog/2019-05-10-womad-live-network-status-map.md","source":"@site/blog/2019-05-10-womad-live-network-status-map.md","title":"Live network status map for WOMAD 2020","description":"","date":"2019-05-10T00:00:00.000Z","formattedDate":"May 10, 2019","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"womad","title":"Live network status map for WOMAD 2020","authors":"reubenliengaard","tags":["hello","docusaurus"]},"prevItem":{"title":"Isle of Wight Festival Asset Tracking Network Hardware","permalink":"/blog/isle-of-wight"},"nextItem":{"title":"Identify areas of flat terrain which receive the most sun","permalink":"/blog/flat-sunny"}},"content":""},{"id":"flat-sunny","metadata":{"permalink":"/blog/flat-sunny","editUrl":"https://github.com/reubenliengaard/blog/2019-05-09-flat-sunny-spots.md","source":"@site/blog/2019-05-09-flat-sunny-spots.md","title":"Identify areas of flat terrain which receive the most sun","description":"","date":"2019-05-09T00:00:00.000Z","formattedDate":"May 9, 2019","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"flat-sunny","title":"Identify areas of flat terrain which receive the most sun","authors":"reubenliengaard","tags":["hello","docusaurus"]},"prevItem":{"title":"Live network status map for WOMAD 2020","permalink":"/blog/womad"},"nextItem":{"title":"Bath Festival - Ruckus wireless heatmap","permalink":"/blog/bath-festival"}},"content":""},{"id":"bath-festival","metadata":{"permalink":"/blog/bath-festival","editUrl":"https://github.com/reubenliengaard/blog/2018-04-08-bath-festival-ruckus-wireless-heatmap .md","source":"@site/blog/2018-04-08-bath-festival-ruckus-wireless-heatmap .md","title":"Bath Festival - Ruckus wireless heatmap","description":"A small deployment of access points was placed around the tents at the Bath Festival. Each access point was connected to a sector on an adjacent building via a point-to-point wireless link, connected to both a ADSL line and a temporary satellite on the roof. Using an Android app, I collected a series of geolocated signal strength data points and formatted them in Excel. This data was then uploaded into ArcGIS, where a tool was used to create a heat map, which was overlayed over the site plan.","date":"2018-04-08T00:00:00.000Z","formattedDate":"April 8, 2018","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.44,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"bath-festival","title":"Bath Festival - Ruckus wireless heatmap","authors":"reubenliengaard","tags":["hola","docusaurus"]},"prevItem":{"title":"Identify areas of flat terrain which receive the most sun","permalink":"/blog/flat-sunny"},"nextItem":{"title":"AONB Permitted Development","permalink":"/blog/aonb-permitted-development"}},"content":"A small deployment of access points was placed around the tents at the Bath Festival. Each access point was connected to a sector on an adjacent building via a point-to-point wireless link, connected to both a ADSL line and a temporary satellite on the roof. Using an Android app, I collected a series of geolocated signal strength data points and formatted them in Excel. This data was then uploaded into ArcGIS, where a tool was used to create a heat map, which was overlayed over the site plan."},{"id":"aonb-permitted-development","metadata":{"permalink":"/blog/aonb-permitted-development","editUrl":"https://github.com/reubenliengaard/blog/2018-04-01-aonb-permitted-development.md","source":"@site/blog/2018-04-01-aonb-permitted-development.md","title":"AONB Permitted Development","description":"Docusaurus Plushie","date":"2018-04-01T00:00:00.000Z","formattedDate":"April 1, 2018","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.01,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"aonb-permitted-development","title":"AONB Permitted Development","authors":"reubenliengaard","tags":["hola","docusaurus"]},"prevItem":{"title":"Bath Festival - Ruckus wireless heatmap","permalink":"/blog/bath-festival"},"nextItem":{"title":"Flood risk analasis for pudding brooke","permalink":"/blog/pudding-brook"}},"content":"![Docusaurus Plushie](/img/permitted-development.jpg)"},{"id":"pudding-brook","metadata":{"permalink":"/blog/pudding-brook","editUrl":"https://github.com/reubenliengaard/blog/2017-03-05-flood-risk-analasis-of-pudding-brook.md","source":"@site/blog/2017-03-05-flood-risk-analasis-of-pudding-brook.md","title":"Flood risk analasis for pudding brooke","description":"Digital Terrain Model LIDAR tiles were imported into QGIS and used to create contour polygons at 2m intervals. A graduated style was applied to color the polygons by their elevation. Potential sites for outbuildings were then selected in appropriate high ground locations.","date":"2017-03-05T00:00:00.000Z","formattedDate":"March 5, 2017","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.22,"hasTruncateMarker":false,"authors":[{"name":"Reuben Liengaard","title":"Maintainer","url":"https://reubenliengaard.github.io","key":"reubenliengaard"}],"frontMatter":{"slug":"pudding-brook","title":"Flood risk analasis for pudding brooke","authors":"reubenliengaard","tags":["hola","docusaurus"]},"prevItem":{"title":"AONB Permitted Development","permalink":"/blog/aonb-permitted-development"}},"content":"Digital Terrain Model LIDAR tiles were imported into QGIS and used to create contour polygons at 2m intervals. A graduated style was applied to color the polygons by their elevation. Potential sites for outbuildings were then selected in appropriate high ground locations.\\n\\n![Docusaurus Plushie](/img/pudding-brook.jpg)"}]}')}}]);