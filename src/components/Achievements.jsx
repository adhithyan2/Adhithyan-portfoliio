import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "../data/portfolioData";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplay(String(value));
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2] || "";
    const duration = 1400;
    let start = null;

    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(
        Number.isInteger(target)
          ? `${Math.round(current)}${suffix}`
          : `${current.toFixed(1)}${suffix}`
      );
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function Achievements() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp}>
            <SectionLabel index="08">Milestones</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-16"
          >
            What I've achieved.
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10">
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i + 2}
                className="pt-6 border-t border-[#d2d2d2] dark:border-white/[0.08]"
              >
                <div className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-primary tabular-nums mb-2">
                  <Counter value={item.value} />
                </div>
                <div className="eyebrow text-[10px] leading-relaxed text-[#9a9a9a]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}