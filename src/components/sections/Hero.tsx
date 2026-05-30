"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, TrendingUp, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const CODE_SNIPPETS = [
  'const learn = () => "anything";',
  'print("Hello, World!")',
  'for (let i = 0; i < ∞; i++) grow();',
  'def build_future(): pass',
  'SELECT * FROM knowledge;',
  'git commit -m "level up"',
  'npm run become-awesome',
  'while (alive) { learn(); }',
];

const BADGES = [
  { icon: MapPin, label: "Jaipur Based" },
  { icon: Globe, label: "Online Nationwide" },
  { icon: TrendingUp, label: "Beginner to Advanced" },
];

export function Hero() {
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 grid-bg">
      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#4F46E5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#F97316]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {CODE_SNIPPETS.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute font-mono-code text-xs text-[#4F46E5]/25 dark:text-[#6366f1]/20 whitespace-nowrap"
            style={{
              top: `${10 + (i * 11) % 80}%`,
              left: `${(i * 13 + 5) % 90}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badges */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818cf8] text-xs font-semibold border border-[#4F46E5]/20"
              >
                <Icon className="w-3 h-3" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Master Programming —{" "}
            <span className="gradient-text">
              In Any Language
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            1-on-1 tutoring in Web Dev, DSA, Python & more. Online & offline in Jaipur.
            Personalized learning plans designed to get you hired.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#4F46E5] text-white font-semibold text-base hover:bg-[#4338CA] transition-colors shadow-lg shadow-[#4F46E5]/30"
            >
              Book a Free Session
            </a>
            <a
              href="/courses"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border-2 border-[#4F46E5] text-[#4F46E5] dark:text-[#818cf8] font-semibold text-base hover:bg-[#4F46E5]/10 transition-colors"
            >
              Explore Courses
            </a>
          </motion.div>

          {/* WhatsApp quick contact */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-colors"
            >
              <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Or message me on WhatsApp for a quick chat
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-xs">Scroll down</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
