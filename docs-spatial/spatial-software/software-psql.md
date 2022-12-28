---
sidebar_position: 4
---

# PSQL 
## Database Front-End 

### connect to database using psql

``` bash
psql -h 0.0.0.0 -p 5432 -d postgres -U postgres
```

### display data
``` sql
select * from public.topographicpoint;
```



