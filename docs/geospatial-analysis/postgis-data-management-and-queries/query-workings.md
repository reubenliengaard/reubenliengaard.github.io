---
sidebar_position: 4
---

# Query workings

``` sql
select * 
from osmm_topo.cartographictext 
WHERE ST_DWithin(osmm_topo.cartographictext.wkb_geometry,  ST_Transform(ST_GeomFromText(
              'POINT(  -2.2199 51.69382 )',4326), 27700) , 2000.0)
AND osmm_topo.cartographictext.textstring like '%Workings%';
```

## References