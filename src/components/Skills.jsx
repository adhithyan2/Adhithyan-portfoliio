import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

const skillGroups = [
  { key: "programming", label: "Programming" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools & Platforms" },
  { key: "interests", label: "Areas of Interest" },
];

export default function Skills() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp}>
            <SectionLabel index="02">Skills & Tech</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-16"
          >
            The tools I work with.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.key}
                variants={fadeUp}
                custom={gi + 2}
              >
                <h3 className="eyebrow text-[#666] dark:text-[#9a9a9a] mb-5">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3.5 py-1.5 rounded-full border border-[#d2d2d2] dark:border-white/15 text-[#3d3d3d] dark:text-[#c9c9cc] hover:border-primary/60 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}