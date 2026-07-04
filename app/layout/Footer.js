import Link from "next/link";
import GradientText from "../components/GradientText";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-100/90 dark:bg-[#020617] border-t border-slate-300 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
        <div className="flex flex-col items-center text-center gap-6">

          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="text-3xl font-bold"
          >
            Mostafa Gerayli
          </GradientText>

          <p className="max-w-xl text-slate-600 dark:text-slate-400 leading-7">
            Front-End Developer specializing in React.js, Next.js, TypeScript,
            and modern web technologies. Passionate about building clean,
            responsive, and high-performance web applications.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/mostafagerayli"
              target="_blank"
              className="group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 transition-all duration-300 group-hover:bg-yellow-400 group-hover:scale-110">
                <FaGithub
                  size={22}
                  className="text-slate-700 dark:text-white group-hover:text-black"
                />
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/mostafa-gerayli-react"
              target="_blank"
              className="group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 transition-all duration-300 group-hover:bg-yellow-400 group-hover:scale-110">
                <FaLinkedin
                  size={22}
                  className="text-blue-600 dark:text-blue-400 group-hover:text-black"
                />
              </div>
            </Link>

            <Link
              href="mailto:YOUR_EMAIL@gmail.com"
              className="group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 transition-all duration-300 group-hover:bg-yellow-400 group-hover:scale-110">
                <FaEnvelope
                  size={22}
                  className="text-red-500 group-hover:text-black"
                />
              </div>
            </Link>
          </div>

          <div className="w-full border-t border-slate-300 dark:border-white/5 pt-6">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Mostafa Gerayli. Built with ❤️ using
              Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;