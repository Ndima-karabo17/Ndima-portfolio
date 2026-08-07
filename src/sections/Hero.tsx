import Button from "../components/ui/Button";
import SocialLinks from "../components/ui/SocialLinks";
import Profile from '../assets/images/profile.jpeg'
import { fadeInUp } from "../animations/variants";
import {motion} from "framer-motion"
import { TypeAnimation } from "react-type-animation" 
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 items-center">

        <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        >
          <p className="text-violet-400 font-medium">
             Hello, I'm
          </p>

          <h1 className="mt-4 text-5xl font-extrabold md:text-7xl">
            Mhangwani Ndima <br /> Karabo
            
          </h1>


        <TypeAnimation
  sequence={[
    "A Software Developer",
    2000,
    "A React Developer",
    2000,
    "A Full Stack Developer",
    2000,
    "A Computer Science Graduate",
    2000,
  ]}
  speed={50}
  repeat={Infinity}
/>

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
        </motion.div>

        <div className="flex justify-center">
  <img
    src={Profile}
    alt="Ndima's Profile"
    className="h-80 w-80 rounded-full object-cover"
  />
</div>

      </div>
    </section>
  );
};

export default Hero;