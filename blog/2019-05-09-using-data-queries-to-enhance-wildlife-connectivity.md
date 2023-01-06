---
slug: using-data-queries-to-enhance-wildlife-connectivity
title: Using Data Queries to Enhance Wildlife Connectivity
authors: reubenliengaard
tags: [hello, docusaurus]
---

# Using Data Queries to Enhance Wildlife Connectivity

This SQL query selects all rows from the "topographicarea" table where the value "Natural Environment" is present in the "descriptivegroup" column. The "descriptivegroup" column likely contains an array of descriptive tags or categories associated with each topographic area. By searching for rows where "Natural Environment" is present in this array, the query is able to identify topographic areas that are potentially characterized by natural environments such as forests, wetlands, or other wild areas. These areas could potentially be rewilded or restored in order to provide corridors for wildlife to move through urban environments. The results of this query could be used to inform planning and conservation efforts to enhance biodiversity and improve the connectivity of natural habitats in urban areas.

``` sql
SELECT *
FROM topographicarea
WHERE 'Natural Environment' = ANY (descriptivegroup)
```

![Docusaurus Plushie](/img/wildlife-corridors-2.png)

![Docusaurus Plushie](/img/wildlife-corridors-2.png)

You can see how the edges or roads and railway tracs could be used as wildlife corridors.

![Docusaurus Plushie](/img/wildlife-corridors-3.png)
