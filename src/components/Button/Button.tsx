import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonTv = tv({
  base: "inline-flex items-center font-medium text-center text-slate100  hover:cursor-pointer transition duration-150 rounded-lg",
  variants: {
    size: {
      xsm: "px-3 py-2 text-xs",
      sm: "px-3 py-2 text-ms",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xlg: "px-6 py-3.5 text-base",
    },
    variant: {
      default: "bg-bt hover:bg-bt-secondary",
      ghost: "bg-tranparent hover:bg-transparent",
      outlined: "border-1 border-bt-secondary hover:bg-bt-secondary",
    },
    isFullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonTv> & {
    icon?: ReactNode;
    label?: string;
    onClick: () => void;
  };

const Button = ({
  label,
  variant,
  isFullWidth,
  size,
  icon,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonTv({ size, variant, isFullWidth })}
      {...props}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export { Button };
