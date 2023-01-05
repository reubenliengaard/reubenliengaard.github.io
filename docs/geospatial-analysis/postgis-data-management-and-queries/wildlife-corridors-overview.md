---
sidebar_position: 7
---
# Wildlife corridor overview

# Aims
- Identify areas of high connectivity between different land cover types, such as forests and grasslands. These areas are likely to be used by wildlife as corridors for movement.

- Identify potential barriers to wildlife movement, such as roads or urban areas



### Show column names
``` sql
SELECT COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'topographicarea'
```

### Show entries in descriptivegroup column
``` sql
SELECT descriptivegroup
FROM topographicarea
```

### Show entries in column which match Natural Environment in descriptivegroup column
``` sql
SELECT *
FROM topographicarea
WHERE 'Natural Environment' = ANY (descriptivegroup)
```

### Show entries in column which match Road in descriptivegroup column
``` sql
SELECT *
FROM topographicarea
WHERE 'Road' = ANY (descriptiveterm)
```

### Show entries in column which match Building in descriptivegroup column

``` sql
SELECT *
FROM topographicarea
WHERE 'Building' = ANY (descriptivegroup)
```

![Docusaurus Plushie](/img/wildlife-corridors-1.png)

![Docusaurus Plushie](/img/wildlife-corridors-2.png)

You can see how the edges or roads and railway tracs could be used as wildlife corridors.

![Docusaurus Plushie](/img/wildlife-corridors-3.png)


## References