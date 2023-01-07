---
sidebar_position: 1
---

# Copy files into directories by extension
This script searches all subdirectories for files and moves them into subdirectories named after their file extensions, while also handling filenames that contain special characters:

``` bash
find . -type f | while read -r filename; do
  base=$(basename "$filename" .*)
  ext=${filename##*.}
  counter=1
  sanitized_base=$(echo "$base" | tr -dc '[:alnum:]\n\r')
  sanitized_ext=$(echo "$ext" | tr -dc '[:alnum:]\n\r')
  while [[ -f "${sanitized_ext}/${sanitized_base}_${counter}.${sanitized_ext}" ]]; do
      ((counter++))
  done
  mkdir -p "${sanitized_ext}"
  mv "$filename" "${sanitized_ext}/${sanitized_base}_${counter}.${sanitized_ext}"
done


## now test there is files in the directories  




```

If a file with the same name already exists in the destination directory, it will append a number to the file name to make it unique. For example, if the file "example.txt" already exists in the "txt" directory, the script will move the new file "example.txt" to "txt/example_1.txt". If there is already a file "example_1.txt" in the "txt" directory, the script will move the new file to "txt/example_2.txt", and so on.

The script also sanitizes the file names to remove any special characters that might cause errors. It does this by using the tr command to remove all characters that are not alphanumeric or newline characters from the file names. This ensures that the resulting file names will only contain safe characters.


## References