"use client";

import { useState } from "react";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/SectionContainer";

export default function NewsletterSection() {
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !agreed) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setAgreed(false);
  };

  return (
    <section className="newsletter-section" aria-label="Newsletter signup">
      <Image
        src="/assets/backgrounds/bg-2.png"
        alt=""
        fill
        className="newsletter-section__bg"
        sizes="100vw"
        priority={false}
        aria-hidden
      />
      <div className="newsletter-section__overlay" aria-hidden />

      <SiteContainer>
        <div className="newsletter-inner">
          <h2 className="newsletter-heading">Join the Afriwood Family Worldwide.</h2>
          <p className="newsletter-subtitle">Be part of the movement — get our latest updates.</p>

          <label className="newsletter-consent">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>I agree to receive email updates on all Afriwood products.</span>
          </label>

          <p className="newsletter-legal">
            By clicking &quot;submit&quot; and sharing your email, you agree to our Terms of Service and
            Privacy Policy.
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              className="newsletter-input"
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-submit">
              Submit
            </button>
          </form>

          {status === "success" ? (
            <p className="newsletter-message newsletter-message--success" role="status">
              Thank you for your interest. Newsletter sign-up will be fully enabled when our mailing service is
              connected.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="newsletter-message newsletter-message--error" role="alert">
              Enter a valid email and accept updates to continue.
            </p>
          ) : null}
        </div>
      </SiteContainer>
    </section>
  );
}
