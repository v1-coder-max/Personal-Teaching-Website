"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import type { BlogPost } from "@/types";
import { SITE_CONFIG } from "@/lib/constants";

interface Props {
  post: BlogPost;
}

export function BlogPostPage({ post }: Props) {
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] text-xs font-medium"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span>By {SITE_CONFIG.name}</span>
          </div>

          <div className="mt-6 h-1 w-full bg-gradient-to-r from-[#4F46E5] to-[#F97316] rounded-full" />
        </motion.header>

        {/* Content */}
        <motion.div
          className="prose prose-gray dark:prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("# ")) {
              return (
                <h1 key={i} className="font-heading text-3xl font-bold text-foreground mt-8 mb-4">
                  {line.slice(2)}
                </h1>
              );
            }
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="font-heading text-2xl font-bold text-foreground mt-6 mb-3">
                  {line.slice(3)}
                </h2>
              );
            }
            if (line.startsWith("## ")) {
              return (
                <h3 key={i} className="font-heading text-xl font-bold text-foreground mt-4 mb-2">
                  {line.slice(4)}
                </h3>
              );
            }
            if (line.startsWith("```")) {
              return null;
            }
            if (line.trim() === "") {
              return <div key={i} className="my-3" />;
            }
            return (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {line}
              </p>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 p-8 bg-[#4F46E5]/5 dark:bg-[#4F46E5]/10 rounded-2xl border border-[#4F46E5]/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">
            Want to learn this topic in depth?
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Book a 1-on-1 session with me and get personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#4F46E5] text-white font-semibold text-sm hover:bg-[#4338CA] transition-colors"
            >
              Book a Session
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#22c35e] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
