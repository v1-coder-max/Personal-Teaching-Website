"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { COURSES } from "@/lib/constants";
import {
  Terminal, Cpu, Coffee, Zap, Globe, BrainCircuit, Briefcase, Layers,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Terminal, Cpu, Coffee, Zap, Globe, BrainCircuit, Briefcase, Layers,
};

const LEVEL_COLORS: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  "All Levels": "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
};

export function CoursesPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-[#4F46E5] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.span
            className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            All Courses
          </motion.span>
          <motion.h1
            className="font-heading text-4xl sm:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Learn. Build. Get Hired.
          </motion.h1>
          <motion.p
            className="text-white/80 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            From absolute beginner to interview-ready — structured 1-on-1 sessions tailored to your pace and goals.
          </motion.p>
        </div>
      </section>

      {/* Courses grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COURSES.map((course, i) => {
            const Icon = ICON_MAP[course.icon] ?? Terminal;
            return (
              <motion.div
                key={course.title}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {/* Color bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: course.color }}
                />

                <div className="p-6">
                  {/* Icon + Level */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ background: `${course.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: course.color }} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${LEVEL_COLORS[course.level]}`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="/#contact"
                    className="flex w-full items-center justify-center py-2.5 rounded-lg text-sm font-semibold transition-colors"
                    style={{
                      border: `2px solid ${course.color}`,
                      color: course.color,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${course.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    }}
                  >
                    Enquire Now →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14 p-8 bg-[#4F46E5]/5 dark:bg-[#4F46E5]/10 rounded-2xl border border-[#4F46E5]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
            Don&apos;t see what you need?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            I create custom curricula for any programming topic. Just reach out and we&apos;ll design the perfect learning plan for you.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#4F46E5] text-white font-semibold hover:bg-[#4338CA] transition-colors"
          >
            Request Custom Course
          </a>
        </motion.div>
      </section>
    </div>
  );
}
