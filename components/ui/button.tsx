import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-150 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-2xs",
        outline:
          "border border-border bg-background text-foreground shadow-2xs",
        secondary:
          "bg-secondary text-secondary-foreground border border-border/50",
        ghost:
          "text-muted-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-2xs",
        link: "text-foreground underline-offset-4",
        accent:
          "bg-secondary text-secondary-foreground border border-border/50",
        card:
          "bg-card text-card-foreground border border-border shadow-2xs",
      },
      size: {
        default:
          "h-9 gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm",
        xs: "h-6 gap-1 rounded-md px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 rounded-lg px-6 text-sm font-medium shadow-2xs [&_svg:not([class*='size-'])]:size-4",
        xl: "h-12 gap-3 rounded-lg px-7 py-3 text-sm sm:text-base font-medium shadow-xs [&_svg:not([class*='size-'])]:size-4",
        pill: "h-10 gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-medium shadow-2xs",
        "pill-sm": "h-8 gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium",
        icon: "size-9 rounded-lg",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  nativeButton,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      nativeButton={nativeButton ?? (props.render ? false : undefined)}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
