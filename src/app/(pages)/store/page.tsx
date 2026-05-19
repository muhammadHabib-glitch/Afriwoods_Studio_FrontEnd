import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Shop",
  description: "Afriwood Official Shop — comics, merch, and collectibles.",
};

export default function StorePage() {
  return (
    <PlaceholderPage
      eyebrow="Afriwood Shop"
      title="Official Shop"
      description="Comics, apparel, and collectibles from the Afriwood universe. The full storefront is coming soon."
      primaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
