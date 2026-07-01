"use client";

import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <div className="bg-[#111827] dark:bg-gray-50 min-h-screen px-6 py-16 md:px-20">
      {/* عنوان صفحه */}
      <h2 className="text-white dark:text-gray-900 text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-[#EAB308] dark:text-amber-500">Projects</span>
      </h2>

      {/* لیست پروژه‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* پروژه نمونه */}
        <Link
          href="https://piano-coffee.vercel.app"
          target="_blank"
          className="bg-[#1F2937] dark:bg-gray-200 rounded-2xl p-6 hover:scale-105 transition duration-300"
        >
          <div className="h-48 bg-gray-600 dark:bg-gray-400 rounded-md mb-4 overflow-hidden">
            <Image
              src="/images/Screenshot 2026-07-01 171047.png"
              width={400}
              height={200}
              alt="Piano Coffee"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>

          <h3 className="text-white dark:text-gray-900 text-xl font-semibold mb-2">
            Piano Coffee
          </h3>

          <p className="text-gray-400 dark:text-gray-700 text-sm leading-6 mb-5">
            A modern full-stack coffee shop platform built with Next.js,
            Supabase, and Tailwind CSS. Features secure authentication, a
            protected admin dashboard, full CRUD product management, dynamic
            product filtering, reusable components, and a fully responsive UI.
          </p>

          <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
            <Link
              href="https://piano-coffee.vercel.app"
              target="_blank"
              className="flex-1 text-center py-2 rounded-lg bg-[#EAB308] text-black font-semibold hover:bg-[#facc15] transition"
            >
              Live Demo
            </Link>

            <Link
              href="https://github.com/mostafagerayli/piano-coffee2"
              target="_blank"
              className="flex-1 text-center py-2 rounded-lg border border-gray-500 text-white dark:text-gray-900 hover:border-[#EAB308] hover:text-[#EAB308] dark:hover:text-[#EAB308] transition"
            >
              GitHub
            </Link>
          </div>
        </Link>
        <Link
          href="https://world-wise-qdw3.vercel.app"
          className="bg-[#1F2937] dark:bg-gray-200 rounded-2xl p-6 hover:scale-105 transform transition duration-300"
        >
          <div className="h-48 bg-gray-600 dark:bg-gray-400 rounded-md mb-4">
            <Image
              src="/images/Screenshot 2025-12-28 101208.png"
              width={400}
              height={200}
              alt="project image"
              className="rounded-sm object-cover h-48"
            />
          </div>
          <h3 className="text-white dark:text-gray-900 text-xl font-semibold mb-2">
            world wise
          </h3>
          <p className="text-gray-400 dark:text-gray-700 text-sm">
            In this project, I used Context, Reducer, React, CSS Module, and
            JSON Server.
          </p>
        </Link>

        <Link
          href="https://react-quiz-eight-omega.vercel.app/"
          className="bg-[#1F2937] dark:bg-gray-200 rounded-2xl p-6 hover:scale-105 transform transition duration-300"
        >
          <div className="h-48 bg-gray-600 dark:bg-gray-400 rounded-md mb-4">
            <Image
              src="/images/Screenshot 2025-12-29 112545.png"
              width={400}
              height={200}
              alt="project image"
              className="rounded-sm object-cover h-48"
            />
          </div>
          <h3 className="text-white dark:text-gray-900 text-xl font-semibold mb-2">
            React quiz
          </h3>
          <p className="text-gray-400 dark:text-gray-700 text-sm">
            In this project, I used Reducer, React, CSS Module, fetch API
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
