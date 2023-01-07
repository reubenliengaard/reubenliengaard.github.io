---
sidebar_position: 2
---

# Extract all zips

This script will find all .zip files in the current directory and its subdirectories, and it will unzip each of them.

``` bash
#!/usr/bin/bash
find . -name "*.zip" -exec unzip {} \;
```



## References

