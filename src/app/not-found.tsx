"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-16">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Terminal-style error */}
        <div className="bg-gray-950 rounded-xl p-6 mb-8 text-left font-mono-code text-sm shadow-2xl border border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-500 ml-2 text-xs">bash</span>
          </div>
          <div className="space-y-1">
            <p>
              <span className="text-green-400">vishal@tutor</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span className="text-gray-300">cd /page-you-wanted</span>
            </p>
            <p className="text-red-400">
              bash: cd: /page-you-wanted: No such file or directory
            </p>
            <p>
              <span className="text-green-400">vishal@tutor</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span className="text-yellow-400">
                echo $? # exit code: 404 🤦
              </span>
            </p>
            <p className="text-gray-300">404</p>
            <p className="mt-2">
              <span className="text-gray-500"># Debugging tip: the page you&apos;re looking for </span>
            </p>
            <p>
              <span className="text-gray-500"># doesn&apos;t exist. Classic off-by-one error? 😄</span>
            </p>
            <p>
              <span className="text-green-400">vishal@tutor</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span className="text-gray-300 animate-pulse">_</span>
            </p>
          </div>
        </div>

        <h1 className="font-heading text-3xl font-bold text-foreground mb-3">
          404 — Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          Looks like you wandered into an undefined variable. Let&apos;s get you back to familiar territory.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#4F46E5] text-white font-semibold hover:bg-[#4338CA] transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#4F46E5] text-[#4F46E5] dark:text-[#818cf8] font-semibold hover:bg-[#4F46E5]/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
