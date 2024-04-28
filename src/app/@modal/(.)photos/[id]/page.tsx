"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getPhotoById } from "@/data/photsData";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Modal({ params: { id } }: { params: { id: string } }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const { windowSize } = useWindowSize();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const photo = getPhotoById(parseInt(id));

  if (photo === undefined) {
    return <p>画像が見つかりませんでした</p>;
  }

  // 画像が画面に収まるようなサイズ計算
  const naturalWidth = photo.width;
  const naturalHeight = photo.height;
  const windowRatio = windowSize.width / windowSize.height;
  const imageRatio = naturalWidth / naturalHeight;
  let width, height;

  if (windowRatio > imageRatio) {
    height = windowSize.height;
    width = height * imageRatio;
  } else {
    width = windowSize.width;
    height = width / imageRatio;
  }

  height *= 0.8;
  width = height * imageRatio;

  function onDismiss() {
    router.back();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      onClick={onDismiss}
      className="backdrop:bg-[rgba(0,0,0,0.6)]"
    >
      <Image
        src={`/photos/${photo.fileName}`}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className="bg-black"
      ></Image>
    </dialog>
  );
}
