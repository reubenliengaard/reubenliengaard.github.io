---
sidebar_position: 3
---

# Flood risk

To calculate flood risk from LiDAR data in PostGIS, you will need to follow these steps:

Import the LiDAR data into PostGIS. This can be done using the ST_LASToSQL function, which will convert the LiDAR data into a format that can be stored in a PostGIS database.

Use the ST_Union function to merge all of the LiDAR points into a single geometry. This will create a "point cloud" representation of the terrain.

Use the ST_Triangulate function to triangulate the point cloud. This will create a set of triangular facets, each of which represents a portion of the terrain surface.

Use the ST_Dump function to extract the individual triangles from the triangulated surface.

Use the ST_Z function to extract the elevation of each vertex of each triangle.

Use the ST_Area function to calculate the area of each triangle.

Use the ST_Centroid function to calculate the centroid of each triangle.

Use the ST_Distance function to calculate the distance from the centroid of each triangle to the nearest river or stream.

Use the elevation and distance information to calculate the flood risk for each triangle.

Use the ST_Union function to merge all of the triangles into a single polygon, and use the ST_ConvexHull function to create a convex hull around the polygon.

Use the ST_Intersection function to calculate the intersection between the convex hull and the floodplain.

Use the ST_Area function to calculate the area of the intersection, and use this value to calculate the overall flood risk for the region.


## References