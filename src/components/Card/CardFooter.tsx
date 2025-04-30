import { ReactNode } from "@tanstack/react-router";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const cardFooterTv = tv({
  base: "",
  variants: {
    size: {},
  },
});

export type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardFooterTv> & {
    children: ReactNode;
  };

const CardFooter = ({ ...props }: CardProps) => {
  return (
    <div className={cardFooterTv({})} {...props}>
      {props.children}
    </div>
  );
};

export { CardFooter };
