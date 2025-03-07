import type { FC, ComponentProps } from "react";

import { cn } from "../utils/cn";

type CardProps = ComponentProps<"div">;
export const Card: FC<CardProps> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn("bg-secondary text-foreground rounded-xl", className)}
    {...props}
  />
);
Card.displayName = "Card";

type CardHeaderProps = ComponentProps<"div">;
export const CardHeader: FC<CardHeaderProps> = ({
  className,
  ref,
  ...props
}) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

type CardTitleProps = ComponentProps<"div">;
export const CardTitle: FC<CardTitleProps> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn("leading-none font-semibold tracking-tight", className)}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

type CardDescriptionProps = ComponentProps<"div">;
export const CardDescription: FC<CardDescriptionProps> = ({
  className,
  ref,
  ...props
}) => (
  <div
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

type CardContentProps = ComponentProps<"div">;
export const CardContent: FC<CardContentProps> = ({
  className,
  ref,
  ...props
}) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
CardContent.displayName = "CardContent";

type CardFooterProps = ComponentProps<"div">;
export const CardFooter: FC<CardFooterProps> = ({
  className,
  ref,
  ...props
}) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";
