import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <div className="bg-[#111827] min-h-screen px-6 py-16 md:px-20">
      {/* عنوان صفحه */}
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-[#EAB308]">Projects</span>
      </h2>

      {/* لیست پروژه‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* پروژه نمونه */}
        <Link
          href="https://world-wise-qdw3.vercel.app/"
          className="bg-[#1F2937] rounded-2xl p-6 hover:scale-105 transform transition duration-300"
        >
          <div className="h-48 bg-gray-600 rounded-md mb-4">
            {/* تصویر پروژه */}
            <Image
              src="/images/Screenshot 2025-12-28 101208.png"
              width={400}
              height={200}
              alt="profile image"
              className="rounded-sm object-cover h-49"
            />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">world wise</h3>
          <p className="text-gray-400 text-sm">
            In this project, I used Context, Reducer, React, CSS Module, and
            Jason Server.
          </p>
        </Link>

        <Link href='https://react-quiz-eight-omega.vercel.app/' className="bg-[#1F2937] rounded-2xl p-6 hover:scale-105 transform transition duration-300">
          <div className="h-48 bg-gray-600 rounded-md mb-4">
                        {/* تصویر پروژه */}
            <Image
              src="/images/Screenshot 2025-12-29 112545.png"
              width={400}
              height={200}
              alt="profile image"
              className="rounded-sm object-cover h-49"
            />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">
            React quiz
          </h3>
          <p className="text-gray-400 text-sm">
            In this project, I used  Reducer, React, CSS Module , fetch api
          </p>
        </Link>

        <Link href='https://next-store-e6gsb7kzb-mostafagerayli778-1110s-projects.vercel.app/' className="bg-[#1F2937] rounded-2xl p-6 hover:scale-105 transform transition duration-300">
          <div className="h-48 bg-gray-600 rounded-md mb-4">
          {/* تصویر پروژه */}
            <Image
              src="/images/Screenshot 2025-12-28 151500.png"
              width={400}
              height={200}
              alt="profile image"
              className="rounded-sm object-cover h-49"
            />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">
           Task manager
          </h3>
          <p className="text-gray-400 text-sm">
           In this project, I used  reactQuery , React, tailwind css , supabase
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
