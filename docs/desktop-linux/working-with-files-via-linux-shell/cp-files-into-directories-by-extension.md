---
sidebar_position: 1
---

# Copy files into directories by extension
This script will take all the files in the current directory and sort them into directories based on their file extension. For example, all .txt files will be placed in a txt directory, all .pdf files will be placed in a pdf directory, and so on.

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