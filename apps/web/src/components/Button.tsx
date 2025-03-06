import type { FC, ComponentProps } from "react";

import { cn } from "../utils/cn";

const buttonVariants = {
  primary: "bg-primary hover:brightness-95",
  secondary: "bg-secondary hover:brightness-90",
  ghost: "bg-transparent hover:bg-neutral-300/40",
  outline: "border border-border hover:bg-neutral-300/40",
};

const buttonSizes = {
  sm: "px-3 py-1.5",
  md: "px-10 py-2 font-bold text-lg",
  lg: "px-5 py-2.5 font-bold text-xl",
  icon: "p-3",
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
};
export const Button: FC<ButtonProps> = ({
  className,
  ref,
  variant = "primary",
  size = "sm",
  ...props
}) => (
  <button
    ref={ref}
    className={cn(
      "cursor-pointer rounded-full",
      buttonVariants[variant],
      buttonSizes[size],
      className,
    )}
    {...props}
  />
);
