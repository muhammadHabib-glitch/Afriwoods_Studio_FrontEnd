import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Podcast",
  description: "Afriwood podcast — stories behind the universe.",
};

export default function PodcastPage() {
  return (
    <PlaceholderPage
      eyebrow="Listen"
      title="Afriwood Podcast"
      description="Conversations with creators, voice actors, and fans. Episodes and feeds are coming soon."
      primaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
