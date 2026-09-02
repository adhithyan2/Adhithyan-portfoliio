import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      const lerp = 0.15;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;
      setPos({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    // Detect hover targets
    const onOver = (e) => {
      const el = e.target.closest("a, button, [data-cursor-hover]");
      setHovering(!!el);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" style={{ cursor: "none" }}>
      <style>{`body { cursor: none !important; } a, button, [data-cursor-hover] { cursor: none !important; }`}</style>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-primary/70"
        animate={{
          x: pos.x - (hovering ? 28 : 18),
          y: pos.y - (hovering ? 28 : 18),
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
        style={{ pointerEvents: "none" }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.3 }}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}