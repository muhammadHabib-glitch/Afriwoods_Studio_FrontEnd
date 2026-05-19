import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Academy",
  description: "Afriwood Academy — learn storytelling, art, and animation.",
};

export default function AcademyPage() {
  return (
    <PlaceholderPage
      eyebrow="Learn"
      title="Afriwood Academy"
      description="Courses and workshops for the next generation of African creators. Enrollment opens soon."
      primaryCta={{ href: "/masterclass", label: "View MasterClass" }}
      secondaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
