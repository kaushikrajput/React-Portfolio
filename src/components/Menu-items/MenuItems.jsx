import React from "react";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";

const listVariants = cva(["flex", "item-center"], {
  variants: {
    variant: {
      primary: ["bg-transparent", "items-center", "placeholder:text-info"],
      secondary: ["text-secondary", "cursor-pointer", ],
      info: ["text-info"],
    },
    effect: {
      none: [],
      slideUp: [
        "transform",
        "transition-transform",
        "duration-300",
        "hover:-translate-y-1",
        "no-underline",
        "text-[#8b8a91]"
      ],
      changeColor: ["transform", "transition-colors", "hover:text-highlight"],
    },
    sizes: {
      xs: ["text-xs", "gap-1"],
      small: ["text-sm", "px-2", "gap-4"],
      medium: ["text-sm", "gap-3", "p-3"],
    },
    defaultVariants: {
      variant: "primary",
      sizes: "medium",
      effect: "none",
    },
  },
});

const MenuItems = ({
  variant,
  sizes,
  link,
  target,
  children,
  effect,
  className,
}) => {
  return (
    
      <Link
        to={link}
        target={target}
        className={listVariants({ variant, sizes, effect, className })}
      >
        {children}
      </Link>
  );
};

export default MenuItems;
