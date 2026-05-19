import { cn } from "@/lib/cn";

export type SiteContainerSize = "site" | "shell" | "narrow" | "full";

type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: SiteContainerSize;
  as?: "div" | "article" | "header" | "footer" | "nav";
};

const maxWidthVar: Record<SiteContainerSize, string | undefined> = {
  site: "var(--site-max)",
  shell: "var(--site-shell-max)",
  narrow: "var(--site-max-narrow)",
  full: undefined,
};

export function SiteContainer({
  children,
  className,
  size = "site",
  as: Tag = "div",
}: SiteContainerProps) {
  return (
    <Tag
      className={cn("site-container mx-auto w-full", className)}
      style={maxWidthVar[size] ? { maxWidth: maxWidthVar[size] } : undefined}
    >
      {children}
    </Tag>
  );
}
