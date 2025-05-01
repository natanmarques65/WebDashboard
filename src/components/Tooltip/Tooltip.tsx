import { useRef, ReactNode } from "react";
import { useTooltip } from "./TooltipContext";
import { tv, VariantProps } from "tailwind-variants";
import { ComponentProps } from "react";

const tooltipTv = tv({
  base: "fixed z-50 bg-black text-white text-sm px-3 py-2 rounded shadow pointer-events-none -translate-x-1/2 -translate-y-full",
  variants: {},
});

type TooltipProps = {
  children: ReactNode;
  info: string;
} & ComponentProps<"span"> &
  VariantProps<typeof tooltipTv>;

export default function Tooltip({ children, info, ...props }: TooltipProps) {
  const { tooltip, show, hide } = useTooltip();
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <>
      <span
        ref={ref}
        onMouseEnter={() => {
          const rect = ref.current?.getBoundingClientRect();
          if (rect) {
            const x = rect.left + rect.width / 2;
            const y = rect.top - 8;
            show(info, x, y);
          }
        }}
        onMouseLeave={hide}
        className="inline-block"
        {...props}
      >
        {children}
      </span>

      {tooltip.visible && (
        <div
          className={`${tooltipTv({})}`}
          style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
        >
          {tooltip.info}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black" />
        </div>
      )}
    </>
  );
}
