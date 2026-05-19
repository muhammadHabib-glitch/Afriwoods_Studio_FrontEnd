import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the Afriwood community.",
};

export default function CommunityPage() {
  return (
    <PlaceholderPage
      eyebrow="Together"
      title="Community"
      description="Connect with fans, creators, and collaborators across the Afriwood universe. Community features are on the way."
      primaryCta={{ href: "/signup", label: "Create Account" }}
      secondaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
