"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getPhotoById } from "@/data/photsData";
import { useImageSizeOnTheScreen } from "@/hooks/useImageSizeOnTheScreen";

export default function Modal({ params: { id } }: { params: { id: string } }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const photo = getPhotoById(parseInt(id));

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const [width, height] = useImageSizeOnTheScreen(
    photo?.width || 0,
    photo?.height || 0,
    0.8,
  );

  if (photo === undefined) {
    return <p>画像が見つかりませんでした</p>;
  }

  function onDismiss() {
    router.back();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      onClick={onDismiss}
      className="backdrop:bg-[rgba(0,0,0,0.6)] bg-transparent"
    >
      {height !== 0 && width !== 0 && (
        <>
          <h1 className="text-center text-white mb-2">{photo.alt}</h1>
          <Image
            src={`/photos/${photo.fileName}`}
            alt={photo.alt}
            placeholder="blur"
            blurDataURL={photo.blurDataURL}
            quality={100}
            width={width}
            height={height}
            style={{ width, height }}
            className="bg-black"
          ></Image>
        </>
      )}
    </dialog>
  );
}
