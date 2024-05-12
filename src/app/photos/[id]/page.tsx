"use client";

import { type ElementRef, useEffect, useRef } from "react";
import Image from "next/image";
import { getPhotoById } from "@/data/photsData";

export default function Modal({ params: { id } }: { params: { id: string } }) {
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const photo = getPhotoById(parseInt(id));

  if (photo === undefined) {
    return <p>画像が見つかりませんでした</p>;
  }

  return (
    <div className="relative flex flex-col items-center">
      <h1 className="mb-10">{photo.alt}</h1>
      <Image
        src={`/photos/${photo.fileName}`}
        alt={photo.alt}
        placeholder="blur"
        blurDataURL={photo.blurDataURL}
        fill
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="bg-black w-full !relative !h-auto"
        priority
      ></Image>
    </div>
  );
}
