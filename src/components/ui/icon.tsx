import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Shared Icon — consistent sizing & stroke (§7)
 * All icons should be wrapped with this to enforce the token scale.
 * Prevents mixing 16/18/20/24 arbitrary sizes across pages.
 */
const iconSizes = {
  xs: "size-[var(--icon-xs)]",
  sm: "size-[var(--icon-sm)]",
  md: "size-[var(--icon-md)]",
  lg: "size-[var(--icon-lg)]",
  xl: "size-[var(--icon-xl)]",
} as const

type IconSize = keyof typeof iconSizes

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: IconSize
  strokeWidth?: number
}

function Icon({ size = "md", strokeWidth = 1.75, className, children, ...props }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex shrink-0 items-center justify-center", iconSizes[size], className)}
      style={{ ["--icon-stroke" as string]: strokeWidth } as React.CSSProperties}
      {...props}
    >
      {children}
    </span>
  )
}

export { Icon, iconSizes }
export type { IconSize }
