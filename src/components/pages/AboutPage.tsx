"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, MapPin, Calendar, Users, Target, Heart, Lightbulb, Trophy } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const SKILLS = [
  { name: "Python", level: 95 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React & Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "C / C++", level: 85 },
  { name: "Java", level: 80 },
  { name: "DSA", level: 90 },
  { name: "SQL & Databases", level: 80 },
];

const EDUCATION = [
  {
    year: "2019",
    title: "Started B.Tech",
    subtitle: "Began my computer science journey and fell in love with programming",
    icon: "🎓",
  },
  {
    year: "2022",
    title: "Campus Placement",
    subtitle: "Got placed as a software developer — started building real-world products professionally",
    icon: "💼",
  },
  {
    year: "2024",
    title: "Started Online Tutoring on Preply",
    subtitle: "Began sharing industry knowledge with learners worldwide through 1-on-1 sessions",
    icon: "🌐",
  },
];

const WHY_ME = [
  {
    icon: Target,
    title: "Goal-Oriented Teaching",
    desc: "Every session is structured around your specific goals — placement, freelancing, or personal projects.",
  },
  {
    icon: Heart,
    title: "Genuine Passion",
    desc: "I love teaching and it shows. Students consistently note my patience and enthusiasm.",
  },
  {
    icon: Lightbulb,
    title: "Practical, Real-World Focus",
    desc: "No theoretical fluff. Every concept is taught with hands-on code and real-world applications.",
  },
  {
    icon: Trophy,
    title: "Real-World Developer",
    desc: "3.5+ years building production software — I teach what actually works in the industry.",
  },
];

const TECH_ICONS = [
  "🐍 Python", "⚡ JavaScript", "⚛️ React", "▲ Next.js", "🟢 Node.js",
  "☕ Java", "🔵 C/C++", "🔷 TypeScript", "🗄️ SQL", "🍃 MongoDB",
  "🔴 Git", "🐳 Docker", "🌐 REST APIs", "📊 DSA",
];

export function AboutPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#4F46E5]/10 to-[#F97316]/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#4F46E5]/30 shadow-xl">
                  <Image
                    src="/Photo.png"
                    alt="Vishal Nama — Programming Tutor"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating stat */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-[#4F46E5]" />
                    <div>
                      <p className="font-bold text-foreground text-sm">3.5+ Years</p>
                      <p className="text-xs text-muted-foreground">Software Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] text-xs font-semibold uppercase tracking-widest mb-4">
                About Me
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                Hi, I&apos;m {SITE_CONFIG.name}
              </h1>
              <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                <p>
                  I&apos;m a software developer and programming educator based in Jaipur, Rajasthan, with{" "}
                  {SITE_CONFIG.experience}+ years of professional development experience. I help students —
                  from beginners to working professionals — build real, in-demand skills using the same
                  tools and practices I use every day.
                </p>
                <p>
                  My philosophy: the best way to learn programming is by building real things. I don&apos;t just
                  teach syntax — I guide you through real projects, actual problem-solving, and the mindset you
                  need to grow as a developer.
                </p>
                <p>
                  Whether you&apos;re in Jaipur looking for in-person sessions, or anywhere in India (or the world)
                  looking for online classes — let&apos;s build something together.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-[#F97316]" />
                  {SITE_CONFIG.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-[#4F46E5]" />
                  Coding since {SITE_CONFIG.teachingSince}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-[#10B981]" />
                  Tutoring since 2024
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Teaching Philosophy</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Build Real Things",
                desc: "Theory becomes clear when you're building something. Every topic includes a mini-project.",
                emoji: "🏗️",
              },
              {
                title: "Learn at Your Pace",
                desc: "No rushing. Sessions adapt to your level, questions, and learning style.",
                emoji: "⏱️",
              },
              {
                title: "Industry Ready",
                desc: "I teach what matters in the real world — clean code, Git, debugging, and collaboration.",
                emoji: "🎯",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>

          <div className="space-y-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] to-[#818cf8]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech icons grid */}
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {TECH_ICONS.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:border-[#4F46E5] hover:text-[#4F46E5] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#4F46E5]/20" />

            <div className="space-y-8">
              {EDUCATION.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#4F46E5]/10 border-2 border-[#4F46E5]/30 flex items-center justify-center text-2xl shrink-0 relative z-10">
                    {item.icon}
                  </div>
                  <div className="pt-3">
                    <span className="text-xs font-semibold text-[#4F46E5]">{item.year}</span>
                    <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn From Me */}
      <section className="py-16 bg-[#4F46E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Learn From Me?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_ME.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="w-10 h-10 text-white/80 mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-[#4F46E5] font-semibold hover:bg-gray-100 transition-colors"
            >
              Book a Free Trial Session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
