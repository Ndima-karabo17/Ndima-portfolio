import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Experience
          </h2>

          <p className="mt-4 text-slate-400">
            My software development training and practical experience.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="text-violet-400">
                    {experience.company}
                  </p>
                </div>

                <span className="text-slate-400">
                  {experience.period}
                </span>
              </div>

              <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-300">
                {experience.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;