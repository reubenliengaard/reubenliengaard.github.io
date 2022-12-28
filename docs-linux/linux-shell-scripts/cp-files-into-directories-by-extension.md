---
sidebar_position: 1
---

# Copy files into Directories by Extension

## Introduction
### What?

### Why?

## Body
### How?

``` bash
#!/usr/bin/bash
for filename in *; do
  if [[ -f "$filename" ]]; then
      base=${filename%.*}
      ext=${filename#$base.}
    mkdir -p "${ext}"
    cp "$filename" "${ext}"
  fi
done
```

## Conclusion

## References