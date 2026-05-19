import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "NGO",
  description: "Afriwood NGO — community impact and outreach.",
};

export default function NGOPage() {
  return (
    <PlaceholderPage
      eyebrow="Community"
      title="Afriwood NGO"
      description="Our outreach and impact initiatives. Full program details will be published here soon."
      primaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
