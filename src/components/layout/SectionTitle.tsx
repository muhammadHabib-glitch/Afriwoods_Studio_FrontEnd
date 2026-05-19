import { cn } from "@/lib/cn";

type SectionTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
  id?: string;
};

export default function SectionTitle({
  children,
  subtitle,
  className,
  align = "center",
  id,
}: SectionTitleProps) {
  return (
    <div className={cn("section-title-block", align === "center" ? "text-center" : "text-left", className)}>
      <h2 id={id} className="section-heading font-sora">
        {children}
      </h2>
      {subtitle ? <p className="section-heading-subtitle">{subtitle}</p> : null}
    </div>
  );
}
