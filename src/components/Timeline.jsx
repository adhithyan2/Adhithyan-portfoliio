import { motion } from "framer-motion";
import { timeline } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import SectionLabel from "./SectionLabel";

export default function Timeline() {
  const { theme } = useTheme();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            <SectionLabel index="04">Journey</SectionLabel>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-16 tracking-tight"
          >
            The Path So Far.
          </motion.h2>

          <div className="relative">
            <div className={`absolute left-[19px] top-2 bottom-2 w-px ${
              theme === "dark" ? "bg-white/[0.08]" : "bg-black/[0.08]"
            }`} />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 relative">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold ${
                      theme === "dark"
                        ? "bg-[#111113] border border-primary/30 text-primary"
                        : "bg-white border border-primary/30 text-primary shadow-sm"
                    }`}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="pb-2">
                    <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                      {item.stage}
                    </span>
                    <h3 className="text-lg font-bold mt-1 mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
