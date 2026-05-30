import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Vishal Nama — a programming tutor based in Jaipur, Rajasthan with 5+ years of experience teaching Python, Web Development, DSA, and Interview Preparation.",
};

export default function About() {
  return <AboutPage />;
}
