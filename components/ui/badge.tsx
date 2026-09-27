import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--chip-neutral-bg)] text-[var(--chip-neutral-text)] border-[var(--chip-neutral-border)]",
        neutral:
          "bg-[var(--chip-neutral-bg)] text-[var(--chip-neutral-text)] border-[var(--chip-neutral-border)]",
        blue:
          "bg-[var(--chip-blue-bg)] text-[var(--chip-blue-text)] border-[var(--chip-blue-border)]",
        green:
          "bg-[var(--chip-green-bg)] text-[var(--chip-green-text)] border-[var(--chip-green-border)]",
        amber:
          "bg-[var(--chip-amber-bg)] text-[var(--chip-amber-text)] border-[var(--chip-amber-border)]",
        rose:
          "bg-[var(--chip-rose-bg)] text-[var(--chip-rose-text)] border-[var(--chip-rose-border)]",
        primary:
          "bg-primary/10 text-primary border-primary/20",
        outline:
          "bg-transparent border-border text-foreground/80",
        secondary:
          "bg-secondary text-secondary-foreground border-border/80",
        muted:
          "bg-muted/70 text-muted-foreground border-border/50",
        accent:
          "bg-secondary/70 text-foreground border-border/60",
        destructive:
          "bg-[var(--chip-rose-bg)] text-[var(--chip-rose-text)] border-[var(--chip-rose-border)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
