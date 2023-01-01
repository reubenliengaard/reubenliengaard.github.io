---
sidebar_position: 1
---

# Copy files into directories by extension

## Original code
It works but it is not the most efficient.
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

### AI improved code
The most efficient way would be to not run the cp command, as it will always be slower than the shell.
Here is a shell-only solution that moves the files within the same directory, which is much faster:
``` bash
for filename in *; do
  if [[ -f "$filename" ]]; then
      base=${filename%.*}
      ext=${filename#$base.}
    mkdir -p "${ext}"
    mv "$filename" "${ext}"
  fi
done
```


## References