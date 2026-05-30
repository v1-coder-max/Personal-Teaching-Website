"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, BookOpen, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Contact Me",
    description: "Reach out via WhatsApp, email, or the contact form. Tell me what you want to learn.",
    color: "#4F46E5",
  },
  {
    icon: Phone,
    step: "02",
    title: "Free Assessment Call",
    description: "We hop on a 30-min free call. I assess your current level and we plan your roadmap together.",
    color: "#F97316",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Start Learning",
    description: "Begin your personalized sessions. Online or in-person in Jaipur — you choose.",
    color: "#10B981",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/40">
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
            Simple Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started is easy — three simple steps to begin your learning journey.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#4F46E5] via-[#F97316] to-[#10B981] mx-16" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map(({ icon: Icon, step, title, description, color }, i) => (
              <motion.div
                key={step}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Step circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 bg-white dark:bg-card border-2"
                  style={{ borderColor: color }}
                >
                  <Icon className="w-8 h-8" style={{ color }} />
                </div>

                {/* Step number */}
                <span
                  className="font-heading text-5xl font-extrabold opacity-10 absolute -top-2 left-1/2 -translate-x-1/2 select-none"
                  style={{ color }}
                >
                  {step}
                </span>

                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {description}
                </p>

                {/* Arrow (mobile only) */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden mt-6 text-muted-foreground">
                    <ArrowRight className="w-6 h-6 rotate-90 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#4F46E5] text-white font-semibold hover:bg-[#4338CA] transition-colors shadow-lg shadow-[#4F46E5]/30"
          >
            Book Your Free Session
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
