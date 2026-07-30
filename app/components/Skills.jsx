function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },

    {
      title: "Backend & Database",
      skills: [
        "Supabase",
        "PostgreSQL",
        "Prisma ORM",
        "REST APIs",
        "Next.js API Routes",
        "Server Actions",
      ],
    },

    {
      title: "Languages",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
      ],
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Figma",
      ],
    },

    {
      title: "State & Data",
      skills: [
        "Redux Toolkit",
        "React Query",
        "React Hook Form",
        "Zod",
        "Context API",
      ],
    },

    {
      title: "Concepts",
      skills: [
        "Authentication",
        "Authorization",
        "SSR",
        "CSR",
        "SEO",
        "Performance Optimization",
        "Component-Based Architecture",
      ],
    },
  ];

  return (
    <section className="bg-[#020617] dark:bg-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-white dark:text-gray-900 mb-12">
          My{" "}
          <span className="text-[#EAB308] dark:text-amber-500">
            Skills
          </span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/50
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#EAB308]
                dark:bg-white
                dark:border-slate-200
              "
            >

              <h3 className="mb-5 text-xl font-bold text-[#EAB308]">
                {group.title}
              </h3>


              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-lg
                      border
                      border-slate-700
                      bg-slate-800/80
                      px-3
                      py-2
                      text-sm
                      text-gray-200
                      transition
                      hover:border-[#EAB308]
                      hover:text-[#EAB308]
                      dark:bg-slate-100
                      dark:border-slate-300
                      dark:text-gray-800
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;