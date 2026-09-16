import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-olive text-brand-light hover:bg-brand-dark hover:-translate-y-[2px]": variant === "primary",
            "bg-brand-beige text-brand-dark hover:bg-brand-brown hover:text-brand-light hover:-translate-y-[2px]": variant === "secondary",
            "border border-brand-olive bg-transparent text-brand-olive hover:bg-brand-olive hover:text-brand-light hover:-translate-y-[2px]": variant === "outline",
            "hover:bg-brand-cream hover:text-brand-dark": variant === "ghost",
            "h-10 px-6 py-2 text-sm": size === "default",
            "h-9 rounded-md px-4 text-xs": size === "sm",
            "h-12 rounded-md px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
