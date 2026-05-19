import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Afriwood Studios.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Reach Out"
      title="Contact Us"
      description="Partnerships, press, and general inquiries. A contact form is being prepared for this page."
      primaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
