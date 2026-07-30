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
        {/* ⭐ Basaesoft Internship (NEW) */}
        <div className="bg-[#1F2937] dark:bg-gray-200 rounded-2xl p-6 hover:scale-105 transition duration-300">
          <div className="h-48 bg-gray-600 dark:bg-gray-400 rounded-md mb-4 overflow-hidden">
            <Image
              src="/images/basesoft.png"
              width={400}
              height={200}
              alt="Basaesoft ERP System"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>

          <h3 className="text-white dark:text-gray-900 text-xl font-semibold mb-2">
            Basaesoft ERP System (Internship)
          </h3>

          <p className="text-gray-400 dark:text-gray-700 text-sm leading-6 mb-5">
            Completed a 6-month Front-End Internship working on a real-world ERP
            system. Built and improved interfaces for accounting, sales,
            treasury, and inventory workflows, focusing on usability,
            maintainability, and delivering valuable features in collaboration
            with the development team.
          </p>

          <Link
            href="https://basesoft.ir"
            target="_blank"
            className="inline-block w-full text-center py-2 rounded-lg bg-[#EAB308] text-black font-semibold hover:bg-[#facc15] transition"
          >
            Visit Site
          </Link>
        </div>

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
            A full-stack coffee shop platform featuring product management,
            responsive interfaces, and a seamless user experience. Developed
            with modern web technologies while focusing on clean architecture
            and maintainable code.
          </p>

          <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
            <Link
              href="https://piano-coffee.vercel.app"
              target="_blank"
              className="flex-1 text-center py-2 rounded-lg bg-[#EAB308] text-black font-semibold hover:bg-[#facc15] transition"
            >
              Live
            </Link>

            <Link
              href="https://github.com/mostafagerayli/piano-coffee2"
              target="_blank"
              className="flex-1 text-center py-2 rounded-lg border border-gray-500 text-white dark:text-gray-900 hover:border-[#EAB308] hover:text-[#EAB308] transition"
            >
              GitHub
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
