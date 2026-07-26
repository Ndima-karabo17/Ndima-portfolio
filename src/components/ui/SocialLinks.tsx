import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 text-2xl text-slate-400">
      <a
        href="https://github.com/ndima-karabo17"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-violet-500 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/ndima-mhangwani"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-violet-500 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:mhangwanikarabo@email.com"
        className="hover:text-violet-500 transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;