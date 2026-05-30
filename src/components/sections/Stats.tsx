"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Cpu, Globe, BookOpen } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  label: string;
  display: string;    // always-shown static string
  animate?: {         // if present, count up from 0 to `to`, append `suffix`
    to: number;
    suffix: string;
    decimals?: number;
  };
}

const STATS: Stat[] = [
  {
    icon: Code2,
    display: "3.5+ yrs",
    label: "Software Development",
    animate: { to: 3.5, suffix: "+ yrs", decimals: 1 },
  },
  {
    icon: Cpu,
    display: "10+",
    label: "Technologies Mastered",
    animate: { to: 10, suffix: "+" },
  },
  {
    icon: Globe,
    display: "Full-Stack",
    label: "Web Development",
  },
  {
    icon: BookOpen,
    display: "1-on-1",
    label: "Personalised Teaching",
  },
];

function Counter({ animate, display }: Pick<Stat, "animate" | "display">) {
  const [shown, setShown] = useState(animate ? "0" : display);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || !animate) return;
    const { to, suffix, decimals = 0 } = animate;
    const duration = 1400;
    const step = 16;
    const steps = Math.round(duration / step);
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const value = (current / steps) * to;
      if (current >= steps) {
        setShown(`${to.toFixed(decimals)}${suffix}`);
        clearInterval(timer);
      } else {
        setShown(`${value.toFixed(decimals)}${suffix}`);
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, animate]);

  return <span ref={ref}>{shown}</span>;
}

export function Stats() {
  return (
    <section className="py-16 bg-[#4F46E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map(({ icon: Icon, label, display, animate }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Icon className="w-8 h-8 text-white/80 mb-3" />
              <div className="text-3xl font-heading font-extrabold text-white mb-1">
                <Counter animate={animate} display={display} />
              </div>
              <div className="text-sm text-white/70 font-medium">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
