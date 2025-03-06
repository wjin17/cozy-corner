import { useState, useEffect, type FC, type ComponentProps } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

import { Button } from "../components/Button";

import { cn } from "../utils/cn";
import { sec2time, time2sec } from "../utils/time";

type TimeInputProps = ComponentProps<"div"> & {
  startTime: number;
  onUpdateTime: (time: Time) => void;
};
export const TimeInput: FC<TimeInputProps> = ({
  startTime,
  className,
  onUpdateTime,
}) => {
  const [newTime, setNewTime] = useState(startTime);

  const [focusedInput, setFocusedInput] = useState<"h" | "m" | "s" | null>(
    null,
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (focusedInput) {
        if (event.key === "ArrowUp") {
          handleIncrementTime(focusedInput);
        } else if (event.key === "ArrowDown") {
          handleDecrementTime(focusedInput);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedInput]);

  function handleUpdateTime(numStr: string, type: "h" | "m" | "s") {
    if (!numStr.includes(".") && !isNaN(Number(numStr))) {
      const num = Number(numStr);
      setNewTime((prev) => {
        const timeF = sec2time(prev);
        timeF[type] = num;
        return time2sec(timeF);
      });
    }
  }

  function handleIncrementTime(type: "h" | "m" | "s") {
    setNewTime((prev) => {
      const timeF = sec2time(prev);
      timeF[type] = timeF[type] + 1;
      const nextSec = time2sec(timeF);
      if (nextSec < 86400) return nextSec;
      return 0;
    });
  }

  function handleDecrementTime(type: "h" | "m" | "s") {
    setNewTime((prev) => {
      const timeF = sec2time(prev);
      timeF[type] = timeF[type] - 1;
      const nextSec = time2sec(timeF);
      if (nextSec > 0) return nextSec;
      return 86400;
    });
  }

  function handleSaveTime() {
    onUpdateTime(sec2time(newTime));
  }

  const { h: newHours, m: newMinutes, s: newSeconds } = sec2time(newTime);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 grid-rows-4 gap-x-4 text-center">
        <button className="m-auto" onClick={() => handleIncrementTime("h")}>
          <ChevronUp />
        </button>
        <button className="m-auto" onClick={() => handleIncrementTime("m")}>
          <ChevronUp />
        </button>
        <button className="m-auto" onClick={() => handleIncrementTime("s")}>
          <ChevronUp />
        </button>
        <input
          id="hours"
          className={cn("h-8 w-8 rounded-md bg-white text-center", className)}
          placeholder=" "
          onChange={(e) => handleUpdateTime(e.target.value, "h")}
          value={String(newHours)}
          onFocus={() => setFocusedInput("h")}
          onBlur={() => setFocusedInput(null)}
        />
        <input
          id="minutes"
          className={cn("w-8 rounded-md bg-white text-center", className)}
          placeholder=" "
          onChange={(e) => handleUpdateTime(e.target.value, "m")}
          value={String(newMinutes)}
          onFocus={() => setFocusedInput("m")}
          onBlur={() => setFocusedInput(null)}
        />
        <input
          id="seconds"
          className={cn("w-8 rounded-md bg-white text-center", className)}
          placeholder=" "
          onChange={(e) => handleUpdateTime(e.target.value, "s")}
          value={String(newSeconds)}
          onFocus={() => setFocusedInput("s")}
          onBlur={() => setFocusedInput(null)}
        />
        <label htmlFor="hours">hr</label>
        <label htmlFor="minutes">min</label>
        <label htmlFor="seconds">sec</label>
        <button className="m-auto" onClick={() => handleDecrementTime("h")}>
          <ChevronDown />
        </button>
        <button className="m-auto" onClick={() => handleDecrementTime("m")}>
          <ChevronDown />
        </button>
        <button className="m-auto" onClick={() => handleDecrementTime("s")}>
          <ChevronDown />
        </button>
      </div>
      <Button
        className="font-regular ml-auto text-xs"
        variant="primary"
        onClick={handleSaveTime}
      >
        Set time
      </Button>
    </div>
  );
};
TimeInput.displayName = "Input";
