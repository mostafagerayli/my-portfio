import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiSupabase,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500 w-6 h-6" />,
      level: 90,
    },
    {
      name: "CSS3 / Tailwind CSS",
      icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
      level: 90,
    },
    {
      name: "JavaScript (ES6+)",
      icon: <FaJs className="text-yellow-400 w-6 h-6" />,
      level: 80,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400 w-6 h-6" />,
      level: 85,
    },
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs className="text-black dark:text-white w-6 h-6" />
      ),
      level: 85,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 w-6 h-6" />,
      level: 50,
    },
    {
      name: "React Query",
      icon: <SiReactquery className="text-red-500 w-6 h-6" />,
      level: 80,
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux className="text-violet-500 w-6 h-6" />,
      level: 80,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600 w-6 h-6" />,
      level: 80,
    },
    {
      name: "REST API",
      icon: <TbApi className="text-green-500 w-6 h-6" />,
      level: 85,
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-emerald-500 w-6 h-6" />,
      level: 75,
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
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center mb-3">
                {skill.icon}

                <p className="ml-3 font-semibold text-white dark:text-gray-900">
                  {skill.name}
                </p>

                <span className="ml-auto text-sm text-gray-400 dark:text-gray-700">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-3.5 rounded-full bg-gray-700 dark:bg-gray-300 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#EAB308] dark:bg-amber-500 transition-all duration-700"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;