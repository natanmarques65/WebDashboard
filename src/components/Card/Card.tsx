import { ReactNode } from "@tanstack/react-router";
import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const cardTv = tv({
  base: "flex flex-col relative justify-between bg-secondary rounded-lg text-slate100 ",
  variants: {
    size: {
      xsm: "w-1/8 h-[100px]",
      sm: "w-1/4 h-[250px]",
      md: "w-1/3 h-[200px]",
      lg: "w-3/8 h-[200px]",
      xlg: "w-3/4 h-[276px]",
      full: "w-full h-full",
    },
  },
});

export type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardTv> & {
    children: ReactNode;
    className?: string;
  };

const Card = ({ size, className, ...props }: CardProps) => {
  return (
    <div className={`${cardTv({ size })} ${className}`} {...props}>
      {props.children}
    </div>
  );
};

export { Card };
