import Image from "next/image";
import GradientText from "./GradientText";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-[#111827] dark:bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          {/* Text */}

          <div className="lg:col-span-6 mt-20 lg:mt-0 text-center lg:text-left">
            <p className="text-yellow-500 dark:text-yellow-400 text-lg font-medium">
              Hello, Welcome 👋
            </p>

            <h1
              className="
      mt-4
      whitespace-nowrap
      text-3xl
      sm:text-4xl
      lg:text-5xl
      font-bold
      leading-[1.2]
      bg-gradient-to-r
      from-purple-500
      via-pink-400
      to-purple-300
      bg-clip-text
      text-transparent
      pb-2
    "
            >
              I&apos;m Mostafa Gerayli
            </h1>

            <p
              className="
      mt-6
      max-w-xl
      mx-auto
      lg:mx-0
      text-lg
      leading-8
      text-gray-400
      dark:text-gray-700
    "
            >
              I&apos;m a passionate Frontend Developer focused on building
              modern, user-friendly web applications. I enjoy solving problems,
              improving my skills, and creating valuable digital products while
              growing as part of a professional development team.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Link
                href="/resume/Mostafa_Gerayli_FrontEnd_Resume.pdf"
                download
                className="
        rounded-lg
        bg-yellow-400
        px-6 py-3
        font-semibold
        text-black
        transition
        hover:bg-yellow-300
      "
              >
                Download Resume
              </Link>

              <Link
                href="https://github.com/mostafagerayli"
                target="_blank"
                className="
        rounded-lg
        border border-gray-500
        px-6 py-3
        text-white
        transition
        hover:border-yellow-400
        hover:text-yellow-400
        dark:text-gray-900
      "
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pb-10 lg:pb-0">
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
