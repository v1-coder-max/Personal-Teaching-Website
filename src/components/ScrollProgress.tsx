"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBar = () => {
      if (!barRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      barRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", updateBar, { passive: true });
    return () => window.removeEventListener("scroll", updateBar);
  }, []);

  return (
    <div
      ref={barRef}
      id="scroll-progress"
      style={{ width: "100%", transformOrigin: "left", transform: "scaleX(0)" }}
    />
  );
}
