import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your Afriwood account.",
};

export default function LoginPage() {
  return (
    <PlaceholderPage
      eyebrow="Welcome Back"
      title="Log In"
      description="Access your account, orders, and community profile. Account sign-in is being prepared for a future release."
      primaryCta={{ href: "/signup", label: "Create Account" }}
      secondaryCta={{ href: "/", label: "Back to Home" }}
    />
  );
}
