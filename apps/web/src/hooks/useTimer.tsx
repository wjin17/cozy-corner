import { useState, useRef } from "react";
import { time2sec } from "../utils/time";

export const useTimer = (initialTime: number = 600) => {
  const [time, setTime] = useState(initialTime);
  const [startTime, setStartTime] = useState(initialTime);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  function updateTime(time: Time) {
    setStartTime(time2sec(time));
    setTime(time2sec(time));
  }

  function start() {
    setTimerActive(true);
    timerRef.current = window.setInterval(
      () =>
        setTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            stop();
            return 0;
          }
        }),
      1000,
    );
  }

  function stop() {
    setTimerActive(false);
    window.clearInterval(timerRef.current);
  }

  function reset() {
    stop();
    setTime(startTime);
  }

  return {
    time: time,
    startTime: startTime,
    updateTime,
    start,
    stop,
    reset,
    timerActive,
  };
};
