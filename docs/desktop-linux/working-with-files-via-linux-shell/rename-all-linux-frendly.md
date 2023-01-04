---
sidebar_position: 3
---

# Rename all linux frendly

This command will rename all the files in the current directory, replacing any non-alphanumeric or non-period characters with nothing.

``` bash
for file in *; do mv "$file" "$(echo ${file//[^a-zA-Z0-9.]/})" ; done
```

## References
