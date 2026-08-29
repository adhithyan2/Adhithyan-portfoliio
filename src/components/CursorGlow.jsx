import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("cursor-glow-on");
    dot.classList.remove("hidden");
    ring.classList.remove("hidden");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = null;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      ringX = lerp(ringX, mouseX, 0.16);
      ringY = lerp(ringY, mouseY, 0.16);
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const interactive = e.target.closest("a, button, [role=button], input, textarea, select");
      ring.classList.toggle("cursor-glow-interactive", !!interactive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("cursor-glow-on");
      dot.classList.add("hidden");
      ring.classList.add("hidden");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="hidden fixed top-0 left-0 z-[9999] w-[6px] h-[6px] rounded-full pointer-events-none dot-glow"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="hidden fixed top-0 left-0 z-[9998] w-9 h-9 rounded-full border pointer-events-none cursor-glow-ring"
        style={{ willChange: "transform" }}
      />
    </>
  );
}