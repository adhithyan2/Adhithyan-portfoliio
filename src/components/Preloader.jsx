import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => onComplete(), 600);
      return () => clearTimeout(timer);
    }
  }, [done, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] bg-[#ff2a2a] flex items-center justify-center"
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-[clamp(2rem,8vw,5rem)] font-black text-white tracking-tighter uppercase"
          >
            Adhithiyan.
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
