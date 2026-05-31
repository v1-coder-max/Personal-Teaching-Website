import type { Metadata } from "next";
import { BlogListPage } from "@/components/pages/BlogListPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Programming tutorials, DSA guides, and learning tips from Vishal Nama - programming tutor in Jaipur. Learn Python, React, DSA and more.",
};

export default function Blog() {
  return <BlogListPage />;
}
