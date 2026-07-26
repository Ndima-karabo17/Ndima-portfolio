import { skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Technical Skills
          </h2>

          <p className="mt-4 text-slate-400">
            Technologies and tools I use to build modern applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-2 hover:border-violet-500"
            >
              <h3 className="mb-5 text-2xl font-semibold text-violet-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm transition hover:bg-violet-600"
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
};

export default Skills;