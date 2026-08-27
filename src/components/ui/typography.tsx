import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Shared Typography — semantic hierarchy (§4)
 * All headings/body copy should use these variants.
 * Each level defines family, size, weight, line-height, tracking via tokens.
 */
const typographyVariants = cva("", {
  variants: {
    variant: {
      display: "text-display",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      bodyLg: "text-body-lg text-[var(--color-muted-foreground)]",
      body: "text-body text-[var(--color-muted-foreground)]",
      small: "text-small text-[var(--color-muted-foreground)]",
      caption: "text-caption text-white/50",
      eyebrow: "text-caption text-[var(--color-primary)]",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: { variant: "body", align: "left" },
})

export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div" | "label"
}

function Typography({ className, variant, align, as, ...props }: TypographyProps) {
  const Comp: React.ElementType = as || (variant === "display" || variant === "h1" ? "h1" : variant === "h2" ? "h2" : variant === "h3" ? "h3" : variant === "caption" || variant === "eyebrow" ? "span" : "p")
  return <Comp className={cn(typographyVariants({ variant, align }), className)} {...props} />
}

export { Typography, typographyVariants }
