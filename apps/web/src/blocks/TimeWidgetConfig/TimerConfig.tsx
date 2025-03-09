import { ChevronDown, ChevronUp } from "lucide-react";
import { type ComponentProps, type FC, useRef, useState } from "react";

import { Button } from "../../components/Button";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useTimer } from "../../hooks/useTimer";
import { cn } from "../../utils/cn";
import { sec2time, time2sec } from "../../utils/time";

type TimeInputProps = ComponentProps<"div">;
export const TimerConfig: FC<TimeInputProps> = ({ className }) => {
  const [timer, controls] = useTimer();
  const [newTime, setNewTime] = useState(timer.start.s);
  const focusRef = useRef<"h" | "m" | "s" | null>(null);
  useKeyPress("ArrowUp", () => handleIncrementTime(focusRef.current));
  useKeyPress("ArrowDown", () => handleDecrementTime(focusRef.current));

  function handleUpdateTime(numStr: string, type: "h" | "m" | "s") {
    if (!numStr.includes(".") && !Number.isNaN(Number(numStr))) {
      const num = Number(numStr);
      setNewTime((prev) => {
        const timeF = sec2time(prev);
        timeF[type] = num;
        return time2sec(timeF);
      });
    }
  }

  function handleIncrementTime(type: "h" | "m" | "s" | null) {
    if (type) {
      setNewTime((prev) => {
        const timeF = sec2time(prev);
        timeF[type] = timeF[type] + 1;
        const nextSec = time2sec(timeF);
        if (nextSec < 86400)
          return nextSec;
        return 0;
      });
    }
  }

  function handleDecrementTime(type: "h" | "m" | "s" | null) {
    if (type) {
      setNewTime((prev) => {
        const timeF = sec2time(prev);
        timeF[type] = timeF[type] - 1;
        const nextSec = time2sec(timeF);
        if (nextSec > 0)
          return nextSec;
        return 86400;
      });
    }
  }

  function handleSaveTime() {
    controls.updateTime(sec2time(newTime));
  }

  const { h: newHours, m: newMinutes, s: newSeconds } = sec2time(newTime);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 grid-rows-4 gap-x-4 text-center">
        <button
          type="button"
          className="m-auto"
          onClick={() => handleIncrementTime("h")}
        >
          <ChevronUp />
        </button>
        <button
          type="button"
          className="m-auto"
          onClick={() => handleIncrementTime("m")}
        >
          <ChevronUp />
        </button>
        <button
          type="button"
          className="m-auto"
          onClick={() => handleIncrementTime("s")}
        >
          <ChevronUp />
        </button>
        <input
          id="hours"
          className={cn("h-8 w-8 rounded-md bg-white text-center", className)}
          placeholder=" "
          onChange={e => handleUpdateTime(e.target.value, "h")}
          value={String(newHours)}
          onFocus={() => (focusRef.current = "h")}
          onBlur={() => (focusRef.current = null)}
        />
        <input
          id="minutes"
          className={cn("w-8 rounded-md bg-white text-center", className)}
          placeholder=" "
          onChange={e => handleUpdateTime(e.target.value, "m")}
          value={String(newMinutes)}
          onFocus={() => (focusRef.current = "m")}
          onBlur={() => (focusRef.current = null)}
        />
        <input
          id="seconds"
          className={cn("w-8 rounded-md bg-white text-center", className)}
          placeholder=" "
          onChange={e => handleUpdateTime(e.target.value, "s")}
          value={String(newSeconds)}
          onFocus={() => (focusRef.current = "s")}
          onBlur={() => (focusRef.current = null)}
        />
        <label htmlFor="hours">hr</label>
        <label htmlFor="minutes">min</label>
        <label htmlFor="seconds">sec</label>
        <button
          type="button"
          className="m-auto"
          onClick={() => handleDecrementTime("h")}
        >
          <ChevronDown />
        </button>
        <button
          type="button"
          className="m-auto"
          onClick={() => handleDecrementTime("m")}
        >
          <ChevronDown />
        </button>
        <button
          type="button"
          className="m-auto"
          onClick={() => handleDecrementTime("s")}
        >
          <ChevronDown />
        </button>
      </div>
      <Button
        className="font-regular ml-auto text-xs"
        variant="primary"
        onClick={handleSaveTime}
      >
        Set timer
      </Button>
    </div>
  );
};
TimerConfig.displayName = "Input";
