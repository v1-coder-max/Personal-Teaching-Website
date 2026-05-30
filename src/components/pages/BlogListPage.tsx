"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

const ALL_TAGS = Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags)));

export function BlogListPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? BLOG_POSTS.filter((p) => p.tags.includes(activeTag))
    : BLOG_POSTS;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero */}
      <section className="py-14 text-center bg-gradient-to-br from-[#4F46E5]/5 to-transparent border-b border-border">
        <div className="max-w-2xl mx-auto px-4">
          <motion.span
            className="inline-block px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] text-xs font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Blog
          </motion.span>
          <motion.h1
            className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Programming Insights
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tips, tutorials, and career advice to accelerate your programming journey.
          </motion.p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              !activeTag
                ? "bg-[#4F46E5] text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All Posts
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeTag === tag
                  ? "bg-[#4F46E5] text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Color header */}
              <div className="h-2 bg-gradient-to-r from-[#4F46E5] to-[#F97316]" />

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818cf8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-[#4F46E5] transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            No posts found for this tag.
          </div>
        )}
      </div>
    </div>
  );
}
