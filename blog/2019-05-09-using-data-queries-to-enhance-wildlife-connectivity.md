---
slug: using-data-queries-to-enhance-wildlife-connectivity
title: Using Data Queries to Enhance Wildlife Connectivity
authors: reubenliengaard
tags: [hello, docusaurus]
---

# Using Data Queries to Enhance Wildlife Connectivity

Rewilding involves the restoration of natural habitats in areas that have been modified or degraded by human activity. One way to identify suitable areas for rewilding is to search for topographic areas that are characterized by natural environments. This can be achieved through the use of a SQL query to search for rows in a database table where the value "Natural Environment" appears in the "descriptivegroup" column. This column likely contains an array of descriptive tags or categories for each topographic area.

The results of this query can inform planning and conservation efforts by identifying areas that are potentially well-suited for rewilding. These areas could provide corridors for wildlife movement through urban environments and enhance biodiversity in these areas. By prioritizing these areas for restoration and rewilding, it is possible to improve the connectivity of natural habitats in urban areas and promote the health and well-being of these ecosystems.

``` sql
SELECT *
FROM topographicarea
WHERE 'Natural Environment' = ANY (descriptivegroup)
```

![Docusaurus Plushie](/img/wildlife-corridors-2.png)

![Docusaurus Plushie](/img/wildlife-corridors-2.png)

You can see how the edges or roads and railway tracs could be used as wildlife corridors.

![Docusaurus Plushie](/img/wildlife-corridors-3.png)
