#!/bin/bash

# resize.shで横幅10pxにした画像をbase64URLでエンコード

directory="../public/photos/resize"
cd "$directory"

for file in *.jpg; do
  if [ -f "$file" ]; then
    echo "encode $file..."

    BASE64_IMAGE=$(base64 "$file" -w 0)
    echo $file >> "base64_images.txt"
    echo "data:image/jpg;base64,${BASE64_IMAGE}" >> "base64_images.txt"
  fi
done

echo "All files base64 encoded."
