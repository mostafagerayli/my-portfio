import Link from "next/link";

function Contact() {
  return (
    <section className="bg-[#111827] dark:bg-gray-50 px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-900">
            Get{" "}
            <span className="text-[#EAB308] dark:text-amber-500">
              In Touch
            </span>
          </h2>

          <p className="mt-4 text-gray-400 dark:text-gray-700 max-w-xl mx-auto">
            I&apos;m open to frontend opportunities, collaborations, and
            interesting projects. Feel free to reach out.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          {/* Contact Information */}
          <div
            className="
              rounded-2xl
              border
              border-slate-700
              bg-[#020617]/50
              p-8
              transition-all
              duration-300
              hover:border-[#EAB308]
              dark:bg-white
              dark:border-slate-200
            "
          >

            <h3 className="text-xl font-bold text-[#EAB308] mb-6">
              Contact Information
            </h3>


            <div className="space-y-5">

              <div>
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  Email
                </p>

                <p className="mt-1 text-white dark:text-gray-900">
                  mostafagerayli778@gmail.com
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  Phone
                </p>

                <p className="mt-1 text-white dark:text-gray-900">
                  +98 939 523 6615
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  Location
                </p>

                <p className="mt-1 text-white dark:text-gray-900">
                  Iran
                </p>
              </div>

            </div>


            <div className="mt-8 flex gap-4">

              <Link
                href="https://github.com/mostafagerayli"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-lg
                  border
                  border-slate-600
                  px-4
                  py-2
                  text-sm
                  text-white
                  transition
                  hover:border-[#EAB308]
                  hover:text-[#EAB308]
                  dark:text-gray-900
                "
              >
                GitHub
              </Link>


              <Link
                href="https://www.linkedin.com/in/mostafa-gerayli-react/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-lg
                  border
                  border-slate-600
                  px-4
                  py-2
                  text-sm
                  text-white
                  transition
                  hover:border-[#EAB308]
                  hover:text-[#EAB308]
                  dark:text-gray-900
                "
              >
                LinkedIn
              </Link>

            </div>

          </div>



          {/* Collaboration Card */}
          <div
            className="
              rounded-2xl
              border
              border-slate-700
              bg-[#020617]/50
              p-8
              transition-all
              duration-300
              hover:border-[#EAB308]
              dark:bg-white
              dark:border-slate-200
            "
          >

            <h3 className="text-2xl font-bold text-white dark:text-gray-900">
              Let&apos;s build something valuable
            </h3>


            <p className="mt-4 text-gray-400 dark:text-gray-700 leading-7">
              I&apos;m looking for opportunities where I can contribute,
              improve my skills, and grow with a professional development team.
            </p>


            <Link
              href="mailto:mostafagerayli778@gmail.com"
              className="
                inline-block
                mt-8
                rounded-lg
                bg-[#EAB308]
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:bg-yellow-400
              "
            >
              Send Email
            </Link>

          </div>


        </div>

      </div>
    </section>
  );
}

export default Contact;