import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#111827] p-10 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
      {/* متن بخش چپ */}
      <div className="md:col-span-4 text-center md:text-left">
        <p className="text-yellow-500 text-lg">Hello, Welcome</p>
        <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">
          I’m Mostafa Gerayli
        </h1>
        <p className="text-slate-500 mt-2 mb-4">
          I’m a Front-End Developer who builds modern, fast, and user-focused
          web interfaces.
        </p>
        <Link href="/contact" className="bg-yellow-300 p-3 rounded-sm">
          contact us
        </Link>
      </div>

      {/* فضای خالی وسط فقط در دسکتاپ */}
      <div className="hidden md:block md:col-span-4"></div>

      {/* تصویر */}
      <div className="md:col-span-4 flex justify-center">
        <div className="bg-[#111827] rounded-3xl p-3 shadow-lg">
          <Image
            src="/images/photo_2025-12-01_12-36-23.jpg"
            width={260}
            height={260}
            alt="profile image"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
