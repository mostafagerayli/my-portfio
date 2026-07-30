import Image from "next/image";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      title: "Peste Peste",
      image: "/images/pestepeste.png",
      description:
        "Developed a full-stack e-commerce platform for selling pistachio products with authentication, product management, shopping cart, checkout, and responsive RTL interfaces. Built scalable data management using Prisma ORM and PostgreSQL.",
      live: "https://pestepeste.vercel.app",
      github: "https://github.com/mostafagerayli/store",
    },

    {
      title: "Basaesoft ERP System (Internship)",
      image: "/images/basesoft.png",
      description:
        "Contributed to a real-world ERP system by building responsive interfaces for accounting, treasury, sales, and inventory modules, improving usability and supporting business workflows in collaboration with the development team.",
      live: "https://basesoft.ir",
      github: null,
    },
    {
      title: "Piano Coffee",
      image: "/images/Screenshot 2026-07-01 171047.png",
      description:
        "Built a full-stack coffee shop platform with authentication, admin dashboard, product management, reusable components, responsive UI, and CRUD operations using modern Next.js architecture.",
      live: "https://piano-coffee.vercel.app",
      github: "https://github.com/mostafagerayli/piano-coffee2",
    },

  ];

  return (
    <section className="bg-[#111827] dark:bg-gray-50 min-h-screen px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-white dark:text-gray-900 text-3xl md:text-4xl font-bold text-center mb-12">
          My{" "}
          <span className="text-[#EAB308] dark:text-amber-500">
            Projects
          </span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
              bg-[#1F2937]
              dark:bg-gray-200
              rounded-2xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >

              <div className="h-48 rounded-md overflow-hidden mb-4">
                <Image
                  src={project.image}
                  width={400}
                  height={200}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>


              <h3 className="text-white dark:text-gray-900 text-xl font-semibold mb-3">
                {project.title}
              </h3>


              <p className="text-gray-400 dark:text-gray-700 text-sm leading-6 mb-6">
                {project.description}
              </p>


              <div className="flex gap-3">

                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="
                    flex-1
                    text-center
                    py-2
                    rounded-lg
                    bg-[#EAB308]
                    text-black
                    font-semibold
                    hover:bg-[#facc15]
                    transition
                    "
                  >
                    {project.title.includes("ERP")
                      ? "Website"
                      : "Live Demo"}
                  </Link>
                )}


                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="
                    flex-1
                    text-center
                    py-2
                    rounded-lg
                    border
                    border-gray-500
                    text-white
                    dark:text-gray-900
                    hover:border-[#EAB308]
                    hover:text-[#EAB308]
                    transition
                    "
                  >
                    GitHub
                  </Link>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;