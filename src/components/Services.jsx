import { motion } from "framer-motion";
import {
  Globe, User, Layers, Rocket, LayoutDashboard,
  Calendar, Database, Brain, Plug, Cog,
} from "lucide-react";
import { services } from "../data/portfolioData";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

const iconMap = {
  Globe, User, Layers, Rocket, LayoutDashboard,
  Calendar, Database, Brain, Plug, Cog,
};

export default function Services() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0C0C0E]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp}>
            <SectionLabel index="05">Services</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
          >
            What I can build.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base md:text-lg mb-16 max-w-2xl leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a]"
          >
            From websites to full-stack applications to AI-powered products — here's what I can help you build.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  custom={i + 3}
                  className="group card-line p-6 transition-colors duration-300 hover:border-primary/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <Icon size={19} />
                    </div>
                    <span className="eyebrow tabular-nums text-[#9a9a9a]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}