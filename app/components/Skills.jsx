"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML / 5", icon: <FaHtml5 className="text-orange-500 w-6 h-6" />, level: 90 },
    { name: "CSS / Tailwind", icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />, level: 95 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-6 h-6" />, level: 80 },
    { name: "React", icon: <FaReact className="text-blue-400 w-6 h-6" />, level: 80 },
    { name: "Next.js", icon: <SiNextdotjs className="text-white w-6 h-6" />, level: 70 },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-6 h-6" />, level: 65 },
    { name: "React-Query", icon: <FaReact className="text-green-500 w-6 h-6" />, level: 100 },
    { name: "Redux / Redux-Toolkit", icon: <SiRedux className="text-green-500 w-6 h-6" />, level: 100 },
  ];

  return (
    <div className="bg-[#020617] dark:bg-slate-300 py-16 px-6 md:px-20">
      <h2 className="text-white dark:text-gray-900 text-3xl font-bold text-center mb-12">
        My <span className="text-[#EAB308] dark:text-amber-500">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col">
            <div className="flex items-center mb-2">
              {skill.icon}
              <p className="text-white dark:text-gray-900 ml-3 font-semibold">{skill.name}</p>
              <span className="text-gray-400 dark:text-gray-700 ml-auto">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 dark:bg-gray-300 h-3 rounded-full">
              <div
                className="h-3 rounded-full bg-[#EAB308] dark:bg-amber-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
