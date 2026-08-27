import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Shared Badge — token-driven (§6, §7)
 * Pills, tags, eyewbrows. Radius is always full; padding/typography are tokens.
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--badge-radius)] px-[var(--badge-padding-x)] py-[var(--badge-padding-y)] text-[var(--badge-font-size)] font-medium tracking-[var(--badge-tracking)] uppercase transition-colors duration-[var(--duration-fast)] ease-[var(--ease-default)] border",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-primary)] text-white border-transparent",
        outline: "border-[var(--color-border-teal)] bg-transparent text-[var(--color-primary)]",
        subtle: "bg-white/5 border-white/10 text-white/80 backdrop-blur-sm",
        muted: "bg-[var(--color-muted)] border-transparent text-muted-foreground",
      },
    },
    defaultVariants: { variant: "subtle" },
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
