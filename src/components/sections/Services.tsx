"use client";

import { motion } from "framer-motion";
import {
  Code2, Globe, BrainCircuit, Briefcase, Rocket, MapPin,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Globe, BrainCircuit, Briefcase, Rocket, MapPin,
};

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] text-xs font-semibold uppercase tracking-widest mb-4">
            What I Teach
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Courses & Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From absolute beginner to job-ready developer - I cover everything you need.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Code2;
            return (
              <motion.div
                key={service.title}
                className="relative group rounded-xl bg-card border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gradient-border overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F46E5]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#4F46E5]" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-block px-2 py-0.5 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818cf8] text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/courses"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-[#4F46E5] text-[#4F46E5] dark:text-[#818cf8] font-semibold hover:bg-[#4F46E5]/10 transition-colors"
          >
            View All Courses →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
