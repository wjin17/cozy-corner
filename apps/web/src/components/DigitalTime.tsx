import { FC } from "react";
import { formatTime, formatTimer } from "../utils/time";
import { cn } from "../utils/cn";

type DigitalClockProps = {
  mode: "clock";
  time: number;
  includeSeconds?: boolean;
  format: "12h" | "24h";
};

type DigitalTimerProps = {
  mode: "timer";
  time: number;
  includeHours?: boolean;
};

export const DigitalTime: FC<DigitalClockProps | DigitalTimerProps> = ({
  ...props
}) => {
  if (props.mode === "clock") {
    return (
      <span
        className={cn("m-0! font-mono text-5xl font-extralight sm:text-7xl")}
      >
        {formatTime({
          time: props.time,
          format: props.format,
          includeSeconds: props.includeSeconds,
        })}
      </span>
    );
  }
  if (props.mode === "timer") {
    return (
      <span
        className={cn("m-0! font-mono text-5xl font-extralight sm:text-7xl")}
      >
        {formatTimer({
          time: props.time,
          includeHours: props.includeHours,
        })}
      </span>
    );
  }
  return null;
};
