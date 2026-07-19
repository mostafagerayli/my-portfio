import Image from "next/image";
import GradientText from "./GradientText";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-[#111827] dark:bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          {/* Text */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <p className="text-yellow-500 dark:text-yellow-400 text-lg font-medium">
              Hello, Welcome 👋
            </p>

            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left"
            >
              I&apos;m Mostafa Gerayli
            </GradientText>

            <p className="mt-6 text-gray-400 dark:text-gray-700 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              I&apos;m a Front-End Developer specializing in React and Next.js.
              I build modern, fast, scalable, and user-focused web applications
              with clean architecture and excellent user experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/resume/Mostafa_Gerayli_Front_End_Resume.pdf"
                download
                className="px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 transition font-semibold text-black"
              >
                Download Resume
              </Link>

              <Link
                href="https://github.com/mostafagerayli"
                target="_blank"
                className="px-6 py-3 rounded-lg border border-gray-500 text-white dark:text-gray-900 hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Mostafa Gerayli"
                width={380}
                height={380}
                priority
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}