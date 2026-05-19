import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from Afriwood Studios.",
};

export default function NewsPage() {
  return (
    <PlaceholderPage
      eyebrow="Afriwood News"
      title="News & Updates"
      description="Stories, announcements, and behind-the-scenes from the studio. The news hub is coming soon."
      primaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
