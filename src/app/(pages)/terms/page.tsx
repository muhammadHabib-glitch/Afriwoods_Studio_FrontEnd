import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Afriwood Studios terms of service.",
};

export default function TermsPage() {
  return (
    <PlaceholderPage
      eyebrow="Legal"
      title="Terms and Conditions"
      description="Terms governing use of Afriwood Studios websites, products, and community. Full terms will be published here."
      primaryCta={{ href: "/contact", label: "Contact Us" }}
      secondaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
