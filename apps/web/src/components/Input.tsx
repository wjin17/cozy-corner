import type { FC, ComponentProps } from "react";

import { cn } from "../utils/cn";

type InputProps = ComponentProps<"input"> & {
  error?: string;
  label?: string;
  name: string;
};
export const Input: FC<InputProps> = ({
  className,
  error,
  label,
  name,
  ref,
  ...props
}) => (
  <div className="relative w-full pt-2.5 pb-4">
    <input
      ref={ref}
      id={name}
      className={cn(
        "peer border-border w-full border-b bg-transparent px-2 py-1 outline-none",
        className,
      )}
      placeholder=" "
      {...props}
    />
    <label
      htmlFor={name}
      className={cn(
        "absolute left-2 transition-all duration-300",
        "-top-1.5 origin-left scale-75",
        "peer-focus:-top-1.5 peer-focus:scale-75",
        "peer-placeholder-shown:top-3.5 peer-placeholder-shown:scale-100",
      )}
    >
      {label}
    </label>
    {error && (
      <p className="absolute bottom-0 left-2 text-xs text-red-500">{error}</p>
    )}
  </div>
);
Input.displayName = "Input";
