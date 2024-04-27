"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ params: { id } }: { params: { id: string } }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
      {id}
      <button onClick={onDismiss} className="close-button">
        モーダルを閉じる
      </button>
    </dialog>
  );
}
