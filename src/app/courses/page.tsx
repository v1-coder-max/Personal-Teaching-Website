import type { Metadata } from "next";
import { CoursesPage } from "@/components/pages/CoursesPage";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore all programming courses taught by Vishal Nama in Jaipur - Python, Web Development, DSA, Java, React, Next.js, Interview Prep and more. Online & offline sessions available.",
};

export default function Courses() {
  return <CoursesPage />;
}
