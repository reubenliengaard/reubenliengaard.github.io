---
sidebar_position: 2
---

# PSQL 

## Introduction

### What?

> psql is a terminal-based front-end to PostgreSQL. It enables you to type in queries interactively, issue them to PostgreSQL, and see the query results. Alternatively, input can be from a file or from command line arguments. In addition, psql provides a number of meta-commands and various shell-like features to facilitate writing scripts and automating a wide variety of tasks.

### Why?

## Body

### How?

### Connect to database using psql

``` bash
psql -h 0.0.0.0 -p 5432 -d postgres -U postgres
```

### Display data

``` sql
select * from public.topographicpoint;
```

## Conclusion

## References

[Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)