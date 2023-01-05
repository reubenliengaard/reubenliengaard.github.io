---
sidebar_position: 4
---

# Query workings

Identify mines within 2km of given point.

``` sql
select * 
from osmm_topo.cartographictext 
WHERE ST_DWithin(cartographictext.wkb_geometry,  ST_Transform(ST_GeomFromText(
              'POINT(  -2.2199 51.69382 )',4326), 27700) , 2000.0)
AND cartographictext.textstring like '%Workings%';
```

## References