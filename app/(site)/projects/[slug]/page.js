import Link from "next/link";
import data from "../../../data/data.json"

async function ProjectDetails({params}) {
    const { slug } = await params;
  const project = data[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-[#EAB308] text-sm mb-3">Engineering Details</p>

          <h1 className="text-3xl font-bold mb-5">Project Not Found</h1>

          <Link
            href="/#projects"
            className="text-gray-400 hover:text-[#EAB308] transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }
  return (
    <section className="min-h-screen bg-[#111827] px-6 py-16 dark:bg-gray-50 md:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <Link
          href="/#projects"
          className="
            mb-8
            inline-flex
            items-center
            gap-2
            text-sm
            text-gray-400
            transition
            hover:text-[#EAB308]
            dark:text-gray-600
            dark:hover:text-amber-500
          "
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#EAB308] dark:text-amber-500">
            Engineering Case Study
          </p>

          <h1 className="mb-5 text-3xl font-bold text-white dark:text-gray-900 md:text-5xl">
            {project.title}
          </h1>

          <p className="text-base leading-7 text-gray-400 dark:text-gray-600 md:text-lg">
            {project.description}
          </p>
        </div>

        {/* Engineering Decisions */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white dark:text-gray-900 md:text-3xl">
              Engineering{" "}
              <span className="text-[#EAB308] dark:text-amber-500">
                Decisions
              </span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 dark:text-gray-600">
              Key architectural and technical decisions made during the
              development of the project.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {project.decisions.map((decision , index) => (
              <article
                key={decision.title}
                className="
                  rounded-2xl
                  border
                  border-gray-700
                  bg-[#1F2937]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#EAB308]/50
                  hover:shadow-lg
                  dark:border-gray-200
                  dark:bg-white
                  dark:hover:border-amber-400
                "
              >
                <div className="mb-5 flex items-start gap-4">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#EAB308]/10
                      text-sm
                      font-bold
                      text-[#EAB308]
                      dark:bg-amber-500/10
                      dark:text-amber-600
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="pt-1 text-lg font-semibold leading-7 text-white dark:text-gray-900">
                    {decision.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-400 dark:text-gray-600">
                  {decision.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white dark:text-gray-900 md:text-3xl">
              Engineering{" "}
              <span className="text-[#EAB308] dark:text-amber-500">
                Challenges
              </span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 dark:text-gray-600">
              Real implementation challenges and the approaches used to solve
              them.
            </p>
          </div>

          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-700
                  bg-[#1F2937]
                  dark:border-gray-200
                  dark:bg-white
                "
              >
                {/* Challenge Header */}
                <div className="flex items-start gap-4 border-b border-gray-700 px-6 py-5 dark:border-gray-200">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#EAB308]/10
                      text-sm
                      font-bold
                      text-[#EAB308]
                      dark:bg-amber-500/10
                      dark:text-amber-600
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="pt-1 text-lg font-semibold leading-7 text-white dark:text-gray-900">
                    {challenge.title}
                  </h3>
                </div>

                {/* Problem / Solution */}
                <div className="grid md:grid-cols-2">
                  <div className="border-b border-gray-700 p-6 md:border-b-0 md:border-r dark:border-gray-200">
                    <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#EAB308] dark:text-amber-600">
                      Problem
                    </span>

                    <p className="text-sm leading-7 text-gray-400 dark:text-gray-600">
                      {challenge.problem}
                    </p>
                  </div>

                  <div className="p-6">
                    <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#EAB308] dark:text-amber-600">
                      Solution
                    </span>

                    <p className="text-sm leading-7 text-gray-400 dark:text-gray-600">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="mt-16 border-t border-gray-700 pt-8 dark:border-gray-200">
          <Link
            href="/#projects"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-gray-600
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:border-[#EAB308]
              hover:text-[#EAB308]
              dark:border-gray-300
              dark:text-gray-900
              dark:hover:border-amber-500
              dark:hover:text-amber-600
            "
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;