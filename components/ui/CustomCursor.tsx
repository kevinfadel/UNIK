"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(0, { damping: 20, stiffness: 200 });
  const ringY = useSpring(0, { damping: 20, stiffness: 200 });
  const ringScale = useSpring(1, { damping: 15, stiffness: 200 });
  const ringOpacity = useSpring(1, { damping: 15, stiffness: 200 });
  const isHovering = useRef(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "a, button, [role='button'], input, textarea, select, label, .cursor-pointer"
      );
      if (isInteractive) {
        ringScale.set(1.6);
        isHovering.current = true;
      } else {
        ringScale.set(1);
        isHovering.current = false;
      }
    };

    const handleMouseLeave = () => {
      ringOpacity.set(0);
    };

    const handleMouseEnter = () => {
      ringOpacity.set(1);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [dotX, dotY, ringX, ringY, ringScale, ringOpacity]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="hidden md:block"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#B47A3B",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "multiply",
        }}
      />
      {/* Ring */}
      <motion.div
        className="hidden md:block"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid #B47A3B",
          pointerEvents: "none",
          zIndex: 99998,
          scale: ringScale,
          opacity: ringOpacity,
        }}
      />
    </>
  );
}
