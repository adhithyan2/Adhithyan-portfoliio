import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

const skillCategories = [
  {
    label: "Programming Languages",
    skills: [
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "C++", level: 65 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    label: "Full Stack",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Vite", level: 80 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "REST APIs", level: 82 },
      { name: "Firebase", level: 70 },
      { name: "WebSocket", level: 65 },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Postman", level: 75 },
    ],
  },
  {
    label: "CS Concepts",
    skills: [
      { name: "Data Structures", level: 78 },
      { name: "Algorithms", level: 75 },
      { name: "OOP", level: 82 },
      { name: "DBMS", level: 72 },
      { name: "UI/UX", level: 68 },
    ],
  },
];

function SkillBar({ name, level, index }) {
  const { theme } = useTheme();
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-[#0A0A0B]"}`}>
          {name}
        </span>
        <span className="text-xs font-bold text-primary">{level}%</span>
      </div>
      <div
        className={`h-2 rounded-full overflow-hidden ${
          theme === "dark" ? "bg-white/[0.08]" : "bg-black/[0.08]"
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { theme } = useTheme();
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
          <motion.span
            variants={fadeUp}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            <SectionLabel index="02">Skills & Tech</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-16 tracking-tight"
          >
            My Skillset.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, gi) => (
              <motion.div
                key={cat.label}
                variants={fadeUp}
                custom={gi + 2}
                className={`rounded-2xl p-6 transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/[0.03] backdrop-blur-md border border-white/[0.08]"
                    : "bg-white border border-black/[0.08] shadow-sm"
                }`}
              >
                <h3 className="text-sm font-semibold tracking-widest uppercase text-primary mb-5">
                  {cat.label}
                </h3>
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={si} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
