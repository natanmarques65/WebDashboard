import { ReactNode } from "@tanstack/react-router";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const cardBodyTv = tv({
  base: "h-3/4",
  variants: {
    size: {},
  },
});

export type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardBodyTv> & {
    children: ReactNode;
    className?: string;
  };

const CardBody = ({ className, ...props }: CardProps) => {
  return (
    <div className={`${cardBodyTv({})} ${className}`} {...props}>
      {props.children}
    </div>
  );
};

export { CardBody };
