import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Shared Input — token-driven (§6)
 * Height, radius, border, and focus ring all from tokens.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[var(--input-height)] w-full rounded-[var(--input-radius)] border border-[var(--input-border)] bg-[var(--input-bg)] px-[var(--input-padding-x)] py-2 text-sm text-white placeholder:text-white/40 outline-none transition-colors duration-[var(--duration-normal)] ease-[var(--ease-default)] focus:border-[var(--input-border-focus)] focus:ring-2 focus:ring-[var(--input-ring)]/30 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
