import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SiteButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "gold" | "outline" | "quiet";
};

const variants = {
  gold: "border-primary bg-primary text-primary-foreground hover:bg-primary-bright hover:border-primary-bright",
  outline: "border-border-strong bg-surface/70 text-foreground hover:border-primary hover:text-primary",
  quiet: "border-transparent bg-transparent text-muted-foreground hover:text-primary",
};

export function SiteButton({ children, className, variant = "gold", ...props }: SiteButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border px-5 py-3 text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-[0.98]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}