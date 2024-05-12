#!/bin/bash

# next/imageのblurDataURLに指定する画像データを作成するためのリサイズ処理

directory="../public/photos"
cd "$directory"

for file in *.jpg; do
  if [ -f "$file" ]; then
    echo "Resizing $file..."
    convert "$file" -strip -resize 10x10 "resize/$file"
  fi
done

echo "All files resized."
