import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-slate-400">
            Some of the software projects I've built using
            modern technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition hover:-translate-y-2 hover:border-violet-500"
            >
              <img
  src={project.image}
  alt={project.title}
  className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
/>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-600/20 px-3 py-1 text-sm text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 transition hover:bg-slate-700"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 transition hover:bg-violet-700"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;