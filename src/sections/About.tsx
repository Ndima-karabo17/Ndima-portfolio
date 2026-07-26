const About = () => {
  const highlights = [
    "National Diploma in Computer Science",
    "React & React Native Development",
    "REST API Development",
    "Database Design with PostgreSQL & MySQL",
    "Version Control using Git & GitHub",
    "Always learning new technologies",
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            About Me
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            I'm a Computer Science graduate passionate about
            building modern web and mobile applications.
            I enjoy solving problems, learning new technologies,
            and creating software that improves people's lives.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">

          {/* Left Side */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              Who I Am
            </h3>

            <p className="mb-6 text-slate-400">
              I specialize in developing responsive web and
              mobile applications using modern technologies
              including React, TypeScript, Node.js,
              Java, C#, SQL, and ASP.NET.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="text-violet-400 text-xl">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl bg-slate-800 p-8 text-center">
              <h3 className="text-4xl font-bold text-violet-400">
                10+
              </h3>

              <p className="mt-2 text-slate-400">
                Projects
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-8 text-center">
              <h3 className="text-4xl font-bold text-violet-400">
                15+
              </h3>

              <p className="mt-2 text-slate-400">
                Technologies
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-8 text-center">
              <h3 className="text-4xl font-bold text-violet-400">
                100%
              </h3>

              <p className="mt-2 text-slate-400">
                Commitment
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-8 text-center">
              <h3 className="text-4xl font-bold text-violet-400">
                2025
              </h3>

              <p className="mt-2 text-slate-400">
                Diploma Completed
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;