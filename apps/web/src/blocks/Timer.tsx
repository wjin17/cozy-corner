import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Settings2 } from "lucide-react";

import { Card, CardHeader, CardTitle, CardFooter } from "../components/Card";
import { Button } from "../components/Button";
import { TimeInput } from "./TimeInput";
import { useTimer } from "../hooks/useTimer";
import { sec2time } from "../utils/time";
import { cn } from "../utils/cn";

export const Timer = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const settingsButtonRef = useRef<HTMLButtonElement>(null);
  const { time, startTime, start, stop, reset, timerActive, updateTime } =
    useTimer(3600);

  useEffect(() => {
    if (settingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingsOpen]);

  function handleClickOutside(event: MouseEvent) {
    const current = settingsRef.current;
    const buttonCurrent = settingsButtonRef.current;
    if (
      current &&
      !current.contains(event.target as Node) &&
      !buttonCurrent?.contains(event.target as Node)
    ) {
      setSettingsOpen(false);
    }
  }

  function getFormattedTime() {
    const timeF = sec2time(time);
    const h = timeF.h >= 10 ? timeF.h.toString() : `0${timeF.h}`;
    const m = timeF.m >= 10 ? timeF.m.toString() : `0${timeF.m}`;
    const s = timeF.s >= 10 ? timeF.s.toString() : `0${timeF.s}`;
    if (startTime < 3600) {
      return `${m}:${s}`;
    } else {
      return `${h}:${m}:${s}`;
    }
  }

  function handleOpenSettings() {
    setSettingsOpen(true);
    settingsRef.current?.focus();
  }

  function handleUpdateTime(time: Time) {
    stop();
    updateTime(time);
  }

  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row">
      <Card className="w-full sm:w-fit">
        <CardHeader className="flex items-center justify-center">
          <CardTitle>
            <span
              className={cn(
                "m-0! font-mono text-7xl font-extralight sm:text-7xl",
                startTime >= 3600 ? "text-5xl" : "text-7xl",
              )}
            >
              {getFormattedTime()}
            </span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex items-center justify-between">
          <div className="mr-20 ml-auto md:ml-1">
            {timerActive ? (
              <Button variant="primary" onClick={stop}>
                <Pause size={16} />
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="primary" onClick={start}>
                  <Play size={16} />
                </Button>
                {time !== startTime && (
                  <Button variant="primary" onClick={reset}>
                    <RotateCcw size={16} />
                  </Button>
                )}
              </div>
            )}
          </div>
          <Button
            ref={settingsButtonRef}
            className="mr-auto ml-20 md:mr-1"
            variant="primary"
            onClick={handleOpenSettings}
          >
            <Settings2 size={16} />
          </Button>
        </CardFooter>
      </Card>
      {settingsOpen && (
        <Card ref={settingsRef}>
          <CardHeader className="flex items-center justify-center">
            <div className="flex flex-col gap-2">
              <TimeInput
                startTime={startTime}
                onUpdateTime={handleUpdateTime}
              />
            </div>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};
