import Button from "../components/ui/Button";
import SocialLinks from "../components/ui/SocialLinks";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 items-center">

        <div>
          <p className="text-violet-400 font-medium">
            👋 Hello, I'm
          </p>

          <h1 className="mt-4 text-5xl font-extrabold md:text-7xl">
            Karabo
            <br />
            Ndima
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300">
            Software Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg text-slate-400">
            Computer Science graduate passionate about building
            modern web and mobile applications using React,
            TypeScript, Node.js, Java, C#, and SQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
            </Button>

            <Button
              href="/resume.pdf"
              variant="secondary"
            >
              Download CV
            </Button>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-80 w-80 items-center justify-center rounded-full bg-violet-600/20 text-8xl">
            👨‍💻
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;