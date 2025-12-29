"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:bg-gray-50 bg-[#111827] px-6 py-14 md:px-20 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
      
      {/* متن */}
      <div className="md:col-span-4 text-center md:text-left">
        <p className="text-yellow-500 dark:text-yellow-400 text-lg">Hello, Welcome</p>
        
        <h1 className="dark:text-gray-900 text-white text-3xl md:text-4xl font-bold mt-4">
          I’m Mostafa Gerayli
        </h1>
        
        <p className="dark:text-gray-700 text-slate-500 mt-2 mb-6">
          I’m a Front-End Developer who builds modern, fast, and user-focused
          web interfaces.
        </p>
        
        <a
          href="/resume/resume.pdf"
          download
          className="inline-block bg-yellow-400 dark:bg-yellow-500 text-black dark:text-white px-5 py-2 rounded-md font-medium hover:bg-yellow-300 dark:hover:bg-yellow-400 transition"
        >
          Download Resume
        </a>
      </div>

      {/* spacer */}
      <div className="hidden md:block md:col-span-4" />

      {/* image */}
      <div className="md:col-span-4 flex justify-center mt-20">
        <div className="rounded-3xl p-3 shadow-md dark:shadow-lg">
          <Image
            src="/images/photo_2025-12-28_08-40-12.jpg"
            width={240}
            height={240}
            alt="profile image"
            className="rounded-2xl object-cover h-60"
          />
        </div>
      </div>

    </div>
  );
}
