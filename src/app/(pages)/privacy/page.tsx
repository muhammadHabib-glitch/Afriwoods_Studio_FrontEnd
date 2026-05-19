import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Afriwood Studios privacy policy.",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="How Afriwood Studios collects, uses, and protects your information. Full legal text will be published here."
      primaryCta={{ href: "/contact", label: "Contact Us" }}
      secondaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
