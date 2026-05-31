"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setMounted(true);
    setHash(window.location.hash);
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const isActive = (href: string) =>
    !href.includes("#") && pathname === href && !hash;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center group-hover:bg-[#4338CA] transition-colors">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-[#4F46E5] bg-[#4F46E5]/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}

          {/* CTA Button */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-[#4F46E5] text-white text-sm font-semibold hover:bg-[#4338CA] transition-colors shadow-sm"
          >
            Book Free Session
          </a>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-12">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "text-[#4F46E5] bg-[#4F46E5]/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center px-4 py-2.5 rounded-md bg-[#4F46E5] text-white text-sm font-semibold hover:bg-[#4338CA] transition-colors"
                  >
                    Book Free Session
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
