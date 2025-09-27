import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ratoflixButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-ratoflix-red text-white hover:bg-ratoflix-red-dark shadow-red",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-ratoflix-red text-ratoflix-red hover:bg-ratoflix-red hover:text-white",
        secondary: "bg-ratoflix-dark-card text-foreground hover:bg-ratoflix-dark-card/80",
        ghost: "hover:bg-ratoflix-dark-card hover:text-foreground",
        link: "text-ratoflix-red underline-offset-4 hover:underline",
        hero: "bg-gradient-red text-white hover:shadow-red hover:scale-105 transform",
        access: "bg-ratoflix-red text-white hover:bg-ratoflix-red-dark shadow-red hover:shadow-red hover:scale-105 transform text-base font-bold"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface RatoflixButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ratoflixButtonVariants> {
  asChild?: boolean
}

const RatoflixButton = React.forwardRef<HTMLButtonElement, RatoflixButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(ratoflixButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
RatoflixButton.displayName = "RatoflixButton"

export { RatoflixButton, ratoflixButtonVariants }