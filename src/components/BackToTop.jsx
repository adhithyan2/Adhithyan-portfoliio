import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function BackToTop() {
  const { theme } = useTheme();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {shown && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 12 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={`fixed bottom-6 left-5 md:left-6 z-[80] w-11 h-11 rounded-xl flex items-center justify-center border transition-colors ${
            theme === "dark"
              ? "bg-[#111113]/80 backdrop-blur-md border-white/[0.1] text-white hover:border-primary/50 hover:text-primary"
              : "bg-white/90 backdrop-blur-md border-black/[0.1] text-[#0A0A0B] shadow-sm hover:border-primary/60 hover:text-primary"
          }`}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}