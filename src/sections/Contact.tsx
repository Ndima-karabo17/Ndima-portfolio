import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import cv from "../assets/documents/Ndima_Mhangwani_CV.pdf";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      // Simulate sending
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(
        "Thank you for reaching out! Your message has been sent successfully. I'll get back to you as soon as possible.",
      );

      form.current.reset();

      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (err) {
      console.error(err);

      setError(
        "Sorry, something went wrong while sending your message. Please try again later.",
      );

      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">Let's Connect</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I'm currently looking for graduate opportunities, internships, and
            junior software developer roles. Feel free to reach out.
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
              href={cv}
              download="Ndima_Mhangwani_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Right */}

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
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
                required
              />
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
                required
              />
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
                required
              />
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
              disabled={loading}
              className="flex w-full items-center justify-center rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-green-500 mt-4">{success}</p>}

            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
