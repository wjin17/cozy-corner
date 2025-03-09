import { useEffect, useState } from "react";

import { time2sec } from "../utils/time";

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return time2sec({ h: hours, m: minutes, s: seconds });
}

export const useClock = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);

  return { currentTime };
};
