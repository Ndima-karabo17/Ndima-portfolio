import { FaAward, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Training & Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Professional software development training through accredited
            programmes, building practical skills in frontend, backend,
            databases, and modern development tools.
          </p>
        </div>

        <div className="space-y-10">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-900/20"
            >
              {/* Header */}
              <div className="flex flex-col gap-6 md:flex-row md:justify-between">

                <div className="flex items-center gap-5">

                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-3">
                    {experience.logo ? (
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="max-h-14 object-contain"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-slate-700">
                        {experience.company.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-lg text-violet-400">
                      {experience.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                    <FaCalendarAlt />
                    {experience.period}
                  </span>
                </div>

              </div>

              {/* Responsibilities */}
              <div className="mt-8 space-y-4">
                {experience.description.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="mt-1 text-violet-400" />

                    <p className="text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Certificate */}
              {experience.certificate && (
                <div className="mt-8">
                  <a
                    href={experience.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700"
                  >
                    <FaAward />
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;