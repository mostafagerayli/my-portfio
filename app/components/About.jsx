"use client";

import Image from "next/image";

function About() {
  return (
    <section className="bg-[#020617] dark:bg-slate-300 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 py-16 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="order-1 lg:order-2 lg:col-span-7 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white dark:text-gray-900">
              About{" "}
              <span className="text-[#EAB308] dark:text-amber-500">Me</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400 dark:text-gray-700 max-w-2xl mx-auto lg:mx-0">
              I’m a Frontend Developer with 2 years of experience building
              modern, responsive, and user-friendly web applications. I enjoy
              solving real-world problems, writing clean and maintainable code,
              and continuously improving my skills. My goal is to create
              products that deliver real value to users while growing as part of
              a collaborative and professional development team.
            </p>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-2xl border-4 border-amber-400 dark:border-amber-500"></div>

              <Image
                src="/images/photo_2025-12-28_08-38-06.jpg"
                alt="Mostafa Gerayli"
                width={320}
                height={320}
                className="absolute top-4 left-4 rounded-2xl object-cover w-64 h-64 sm:w-72 sm:h-72 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
