---
sidebar_position: 6
---

# Least cost path wildlife corridors
Identify the current locations of important wildlife habitats in the study area, such as parks, green spaces, and natural areas.
Identify the current barriers to wildlife movement, such as roads, railways, and other infrastructure.
Identify potential corridors that could be used by wildlife to move between habitats, such as the edges of railways and roads, the ends of public gardens, and parts of parks.
Evaluate the feasibility of using each potential corridor for wildlife movement, taking into account factors such as the potential impact on human uses of the area, the potential for conflicts with other land uses, and the potential for habitat degradation or loss.
Use GIS software to create a map showing the proposed improvements to the urban wildlife corridors, including any modifications that may be needed to make the corridors more usable by wildlife (e.g. the installation of wildlife crossings or fencing).
Consult with relevant stakeholders, such as local governments, community groups, and environmental organizations, to solicit feedback on the proposed improvements and incorporate any necessary revisions.


### Show column names
``` sql
SELECT COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'topographicarea'
```

``` sql
SELECT *
FROM topographicarea
LIMIT 1000
```
 
### Show entries in descriptivegroup column
``` sql
SELECT descriptivegroup
FROM topographicarea
```

### Show entries in descriptivegroup column
``` sql
SELECT descriptiveterm
FROM topographicarea
```

### Select scrub land
``` sql
SELECT fid, descriptiveterm, wkb_geometry
FROM topographicarea
WHERE 'Natural Environment' = ANY (descriptivegroup)
```

``` sql
SELECT fid, descriptiveterm, wkb_geometry
FROM topographicarea
WHERE '%Rail%' = LIKE (descriptiveterm)
```

![Docusaurus Plushie](/img/wildlife-corridors-4.png)

wildlife-corridors-5.png

## References
