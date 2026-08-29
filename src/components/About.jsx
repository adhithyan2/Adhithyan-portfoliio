import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

const facts = [
  { label: "Location", value: profile.location },
  { label: "Education", value: profile.education },
  { label: "Focus", value: "Full-Stack · AI · Automation · Open Source" },
];

export default function About() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0C0C0E]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span variants={fadeUp}>
            <SectionLabel index="01">About</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-10"
          >
            Turning ideas into<br />
            <span className="text-primary">working products.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="space-y-5 text-base md:text-lg leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a]"
          >
            <p>
              I'm <strong className="text-[#1a1a1a] dark:text-white font-semibold">{profile.name}</strong>, a {profile.education}.
              I believe in building software that solves real problems rather than just learning technology for its own sake.
            </p>
            <p>
              My work spans <strong className="text-[#1a1a1a] dark:text-white font-semibold">full-stack web development</strong> — from crafting
              responsive frontends with React and Tailwind CSS to designing robust backends with Node.js, Express, and MongoDB. I've built
              AI-powered applications, facial recognition systems, and intelligent automation tools.
            </p>
            <p>
              What drives me is the intersection of{" "}
              <strong className="text-[#1a1a1a] dark:text-white font-semibold">technology and real-world impact</strong>. I'm working toward
              building an open-source freelancer ecosystem that makes it easier for developers to turn ideas into real digital products — tools
              that actual businesses and users can benefit from.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={3} className="mt-12">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="row-line py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8"
              >
                <span className="eyebrow text-[#9a9a9a] sm:w-32 shrink-0 sm:text-right">
                  {fact.label}
                </span>
                <span className="eyebrow text-[11px] text-[#1a1a1a] dark:text-[#f4f4f5]">
                  {fact.value}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}