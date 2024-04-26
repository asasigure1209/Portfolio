import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="mt-24 mb-10">お気に入りの写真</h1>

      <div className="grid text-center w-full max-w-5xl grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-4">
        <div className="relative before:content-[''] pb-[100%]">
          <Image
            src="/photos/sky.jpg"
            fill
            alt="moon"
            sizes="(max-width: 768px) 100vw, 492px"
            className="object-cover"
          />
        </div>
        <div className="relative before:content-[''] pb-[100%]">
          <Image
            src="/photos/moist.jpg"
            fill
            alt="moist"
            sizes="(max-width: 768px) 100vw, 492px"
            className="object-cover"
          />
        </div>
        <div className="relative before:content-[''] pb-[100%]">
          <Image
            src="/photos/moist.jpg"
            fill
            alt="moist"
            sizes="(max-width: 768px) 100vw, 492px"
            className="object-cover"
          />
        </div>
        <div className="relative before:content-[''] pb-[100%]">
          <Image
            src="/photos/sky.jpg"
            fill
            alt="moon"
            sizes="(max-width: 768px) 100vw, 492px"
            className="object-cover"
          />
        </div>
        <div className="relative before:content-[''] pb-[100%]">
          <Image
            src="/photos/moist.jpg"
            fill
            alt="moist"
            sizes="(max-width: 768px) 100vw, 492px"
            className="object-cover"
          />
        </div>
        <div className="relative before:content-[''] pb-[100%]">
          <Image
            src="/photos/moist.jpg"
            fill
            alt="moist"
            sizes="(max-width: 768px) 100vw, 492px"
            className="object-cover"
          />
        </div>
        <div className="relative before:content-[''] pb-[100%]">
          <Image
            src="/photos/sky.jpg"
            fill
            alt="moon"
            sizes="(max-width: 768px) 100vw, 492px"
            className="object-cover"
          />
        </div>
        <div className="relative before:content-[''] pb-[100%]">
          <Image
            src="/photos/moist.jpg"
            fill
            alt="moist"
            sizes="(max-width: 768px) 100vw, 492px"
            className="object-cover"
          />
        </div>
        <div className="relative before:content-[''] pb-[100%]">
          <Image
            src="/photos/moist.jpg"
            fill
            alt="moist"
            sizes="(max-width: 768px) 100vw, 492px"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
