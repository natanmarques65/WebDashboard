import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const iconButton = tv({
  base: "text-slate100 hover:text-slate600 hover:cursor-pointer text-md",
  variants: {
    size: {
      xsm: "w-6 h-6 text-xsm",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-base",
      lg: "w-12 h-12 text-md",
    },
    iconPosition: {
      left: "",
      right: "",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
    iconPosition: "left",
  },
});

export type IconButtonProps = ComponentProps<"button"> &
  VariantProps<typeof iconButton>;

export function IconButton({
  size,
  disabled,
  onClick,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={iconButton({ size, disabled })}
      {...props}
      onClick={onClick}
    >
      <span className="flex w-full h-full items-center justify-center">
        {props.children}
      </span>
    </button>
  );
}
