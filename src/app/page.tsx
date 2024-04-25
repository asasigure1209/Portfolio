import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="mt-24 mb-10">お気に入りの写真</h1>

      <div className="grid text-center w-full max-w-3xl grid-cols-3 gap-4">
        <Image
          src="/photos/moon.jpg"
          alt="moon"
          width={246}
          height={246}
          className="w-full"
        />
      </div>
    </>
  );
}
