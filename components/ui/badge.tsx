import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-md border px-2.5 py-0.5 text-xs font-sans font-medium tracking-normal whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-100 dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 border-neutral-200/90 dark:border-neutral-700/80",
        neutral:
          "bg-neutral-100 dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 border-neutral-200/90 dark:border-neutral-700/80",
        blue:
          "bg-slate-100 dark:bg-slate-850/90 text-slate-800 dark:text-slate-200 border-slate-200/90 dark:border-slate-700/80",
        green:
          "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/40",
        amber:
          "bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/40",
        rose:
          "bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/40",
        primary:
          "bg-primary text-white border-primary shadow-2xs",
        outline:
          "bg-transparent border-border text-foreground/80",
        secondary:
          "bg-secondary text-secondary-foreground border-border/80",
        muted:
          "bg-muted/70 text-muted-foreground border-border/50",
        accent:
          "bg-secondary/70 text-foreground border-border/60",
        destructive:
          "bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/40",
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
