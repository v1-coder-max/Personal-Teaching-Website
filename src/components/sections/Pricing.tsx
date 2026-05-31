"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";

export function Pricing() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] text-xs font-semibold uppercase tracking-widest mb-4">
            Transparent Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Affordable Plans
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free. No lock-in. Pay only for what you need.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-[#4F46E5] shadow-xl shadow-[#4F46E5]/20 bg-card scale-[1.03]"
                  : "border-border bg-card"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#4F46E5] text-white text-xs font-bold shadow">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`w-full flex items-center justify-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                  plan.popular
                    ? "bg-[#4F46E5] text-white hover:bg-[#4338CA] shadow-md shadow-[#4F46E5]/30"
                    : "border-2 border-[#4F46E5] text-[#4F46E5] dark:text-[#818cf8] hover:bg-[#4F46E5]/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          All prices are in INR. Contact me to discuss custom plans for groups or corporate training.
        </motion.p>
      </div>
    </section>
  );
}
