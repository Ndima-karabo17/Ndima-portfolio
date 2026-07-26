import {FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { education } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My academic journey has provided a strong foundation in software
            development, programming, databases, and problem-solving.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:border-violet-500 hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 md:flex-row md:justify-between">

                <div className="flex items-center gap-5">

                 

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.qualification}
                    </h3>

                    <p className="mt-2 text-lg text-violet-400">
                      {item.institution}
                    </p>

                    {item.location && (
                      <p className="mt-2 flex items-center gap-2 text-slate-400">
                        <FaMapMarkerAlt />
                        {item.location}
                      </p>
                    )}
                  </div>

                </div>

                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                    <FaCalendarAlt />
                    {item.period}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;