import photosData from "@/data/photsData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="mb-10">お気に入りの写真</h1>

      <div className="grid text-center w-full max-w-5xl grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-4">
        {photosData.contents.map((photo) => (
          <Link
            key={photo.id}
            className="relative before:content-[''] pb-[100%]"
            href={`/photos/${photo.id}`}
            scroll={false}
            passHref
          >
            <Image
              src={`/photos/${photo.fileName}`}
              fill
              alt={photo.alt}
              sizes="(max-width: 768px) 100vw, 492px"
              className="object-cover"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
