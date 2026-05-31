"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const SKILLS = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "C", "C++", "Java", "HTML/CSS",
  "DSA", "SQL", "MongoDB", "Git", "REST APIs",
];

const HIGHLIGHTS = [
  { icon: CheckCircle2, text: "Patient, personalized 1-on-1 teaching style" },
  { icon: CheckCircle2, text: "Real-world project-based curriculum" },
  { icon: CheckCircle2, text: "Bilingual - Hindi & English sessions" },
  { icon: CheckCircle2, text: "Flexible scheduling to fit your routine" },
];

export function About() {
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
            About Me
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Programming Mentor
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo + accent cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#4F46E5]/20 shadow-xl">
                <Image
                  src="/Photo.png"
                  alt="Vishal Nama - Programming Tutor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Accent cards */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#4F46E5]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Dev Experience</p>
                    <p className="font-bold text-foreground">3.5+ Years</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F97316]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Based in</p>
                    <p className="font-bold text-foreground">Jaipur, Available Online</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Hi, I'm {SITE_CONFIG.name}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                I&apos;m a software developer based in Jaipur who started teaching on Preply in 2024.
                I have {SITE_CONFIG.experience}+ years working as a developer, so I teach things
                I actually use at work - not just textbook stuff.
              </p>
              <p>
                I focus a lot on building actual projects. I think that&apos;s the fastest way to learn.
                Whether you want to crack placements, switch careers, or just get started with coding,
                we&apos;ll figure out the best plan for you in the first session.
              </p>
              <p>
                I&apos;m based in Jaipur and take both in-person and online sessions.
                I teach in Hindi and English - whichever is more comfortable for you.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2 mb-6">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#4F46E5] shrink-0" />
                  <span className="text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Technologies I Teach:</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border hover:border-[#4F46E5] hover:text-[#4F46E5] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
