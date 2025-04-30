import { ReactNode } from "@tanstack/react-router";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const cardHeaderTv = tv({
  base: "text-slate100 px-4 py-2",
  variants: {
    size: {},
  },
});

export type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardHeaderTv> & {
    children: ReactNode;
    className?: string;
  };

const CardHeader = ({ className, ...props }: CardProps) => {
  return (
    <div className={`${cardHeaderTv({})} ${className}`} {...props}>
      {props.children}
    </div>
  );
};

export { CardHeader };
