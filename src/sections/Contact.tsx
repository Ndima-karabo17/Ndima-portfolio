import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Let's Connect
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I'm currently looking for graduate opportunities,
            internships, and junior software developer roles.
            Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-violet-400" />

                <a
                  href="mailto:mhangwanikarabo@email.com"
                  className="hover:text-violet-400"
                >
                  mhangwanikarabo@email.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-xl text-violet-400" />

                <span>+27 60 355 2745</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-violet-400" />

                <span>Limpopo, South Africa</span>
              </div>

            </div>

            <div className="mt-10 flex gap-5">

              <a
                href="https://github.com/Ndima-karabo17"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-800 p-4 transition hover:bg-violet-600"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/ndima-mhangwani"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-800 p-4 transition hover:bg-violet-600"
              >
                <FaLinkedin size={24} />
              </a>

            </div>

            <a
              href="/resume.pdf"
              className="mt-10 inline-flex items-center gap-3 rounded-lg bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-700"
            >
              <FaDownload />

              Download CV
            </a>

          </div>

          {/* Right */}

         <form className="space-y-6">

  {/* Name */}
  <div>
    <label
      htmlFor="name"
      className="mb-2 block text-sm font-medium text-slate-300"
    >
      Full Name
    </label>

    <input
      id="name"
      type="text"
      placeholder="Enter your full name"
      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
   required />
  </div>

  {/* Email */}
  <div>
    <label
      htmlFor="email"
      className="mb-2 block text-sm font-medium text-slate-300"
    >
      Email Address
    </label>

    <input
      id="email"
      type="email"
      placeholder="Enter your email address"
      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
    required/>
  </div>

  {/* Subject */}
  <div>
    <label
      htmlFor="subject"
      className="mb-2 block text-sm font-medium text-slate-300"
    >
      Subject
    </label>

    <input
      id="subject"
      type="text"
      placeholder="What is this about?"
      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
    required/>
  </div>

  {/* Message */}
  <div>
    <label
      htmlFor="message"
      className="mb-2 block text-sm font-medium text-slate-300"
    >
      Message
    </label>

    <textarea
      id="message"
      rows={6}
      placeholder="Write your message here..."
      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
    />
  </div>

  <button
    type="submit"
    className="w-full rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
  >
    Send Message
  </button>

</form>

        </div>

      </div>
    </section>
  );
};

export default Contact;