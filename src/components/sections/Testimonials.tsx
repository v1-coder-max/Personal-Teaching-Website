"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, SITE_CONFIG } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] text-xs font-semibold uppercase tracking-widest mb-4">
            Student Reviews
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Students Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take my word for it — hear from students who&apos;ve transformed their careers.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#4F46E5]/20 mb-3" />

              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-[#4F46E5]/15 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#4F46E5]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.topic} · {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground text-sm mb-4">
            Ready to level up your programming skills with a real-world developer as your mentor?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#4F46E5] text-white font-semibold hover:bg-[#4338CA] transition-colors"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
