import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "MasterClass",
  description: "Afriwood MasterClass — learn from the creators.",
};

export default function MasterClassPage() {
  return (
    <PlaceholderPage
      eyebrow="Learn"
      title="MasterClass"
      description="In-depth sessions with Afriwood artists and storytellers. The full catalog will launch here soon."
      primaryCta={{ href: "/academy", label: "Afriwood Academy" }}
      secondaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
