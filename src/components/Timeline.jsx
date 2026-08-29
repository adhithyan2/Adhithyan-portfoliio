import { motion } from "framer-motion";
import { timeline } from "../data/portfolioData";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

export default function Timeline() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span variants={fadeUp}>
            <SectionLabel index="04">Journey</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-16"
          >
            The path so far.
          </motion.h2>

          <div>
            {timeline.map((item, i) => (
              <motion.div
                key={item.stage}
                variants={fadeUp}
                custom={i + 2}
                className="row-line group py-8 grid grid-cols-12 gap-4"
              >
                <span className="col-span-3 sm:col-span-2 eyebrow tabular-nums text-[#9a9a9a] pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-9 sm:col-span-10">
                  <span className="eyebrow text-[11px] text-[#666] dark:text-[#9a9a9a]">
                    {item.stage}
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold tracking-tight mt-1 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a] max-w-xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}