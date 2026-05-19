import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Afriwood account.",
};

export default function SignUpPage() {
  return (
    <PlaceholderPage
      eyebrow="Join"
      title="Create Account"
      description="Sign up to follow heroes, shop comics, and join the community. Registration is coming soon."
      primaryCta={{ href: "/login", label: "Log In Instead" }}
      secondaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
