import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Vishal Nama — book a free trial session, ask about courses, or message on WhatsApp. Programming tutor based in Jaipur, available online across India.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Contact />
    </div>
  );
}
