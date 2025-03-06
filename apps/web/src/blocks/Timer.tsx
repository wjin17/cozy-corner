import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Settings2 } from "lucide-react";

import { Card, CardHeader, CardTitle, CardFooter } from "../components/Card";
import { Button } from "../components/Button";
import { TimeInput } from "./TimeInput";
import { useTimer } from "../hooks/useTimer";
import { sec2time } from "../utils/time";

export const Timer = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
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
    if (current && !current.contains(event.target as Node)) {
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
    <div className="flex items-start gap-4">
      <Card>
        <CardHeader className="flex items-center justify-center">
          <CardTitle>
            <span className="m-0! font-mono text-7xl font-extralight">
              {getFormattedTime()}
            </span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex items-center justify-between">
          <div>
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
            className="mr-1"
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
