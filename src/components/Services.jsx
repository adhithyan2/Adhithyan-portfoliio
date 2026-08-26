import { motion } from "framer-motion";
import {
  Globe, User, Layers, Rocket, LayoutDashboard,
  Calendar, Database, Brain, Plug, Cog,
} from "lucide-react";
import { services } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from "../hooks/useScrollReveal";

const iconMap = {
  Globe, User, Layers, Rocket, LayoutDashboard,
  Calendar, Database, Brain, Plug, Cog,
};

export default function Services() {
  const { theme } = useTheme();
  const { ref, controls } = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32">
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
            Services
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 tracking-tight"
          >
            What I Can Build.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className={`text-base md:text-lg mb-16 max-w-2xl ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}
          >
            From websites to full-stack applications to AI-powered products — here's what I can help you build.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div
                  key={service.title}
                  variants={scaleIn}
                  custom={i * 0.5}
                  className={`group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                    theme === "dark"
                      ? "bg-[#111113] border border-white/[0.06] hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(0,212,170,0.06)]"
                      : "bg-white border border-black/[0.06] hover:border-primary/30 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
                  }`}>
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
