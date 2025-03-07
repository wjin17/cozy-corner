import {
  createContext,
  useContext,
  useState,
  useRef,
  type FC,
  type PropsWithChildren,
} from "react";
import { sec2time, time2sec } from "../utils/time";

type Timer = {
  current: {
    s: number;
    components: Time;
  };
  start: {
    s: number;
    components: Time;
  };
  active: boolean;
};

type TimerControls = {
  start: () => void;
  stop: () => void;
  reset: () => void;
  updateTime: (time: Time) => void;
};

const initialTimer: Timer = {
  current: {
    s: 600,
    components: sec2time(600),
  },
  start: {
    s: 600,
    components: sec2time(600),
  },
  active: false,
};

const TimerContext = createContext<[Timer, TimerControls]>([
  initialTimer,
  {
    start: () => {},
    stop: () => {},
    reset: () => {},
    updateTime: () => {},
  },
]);

type TimerProviderProps = PropsWithChildren & {
  initialTime?: number;
};
export const TimerProvider: FC<TimerProviderProps> = ({
  children,
  initialTime = 600,
}) => {
  const [activeTimer, setActiveTimer] = useState(initialTime);
  const [startTime, setStartTime] = useState(initialTime);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  function updateTime(time: Time) {
    stop();
    setStartTime(time2sec(time));
    setActiveTimer(time2sec(time));
  }

  function start() {
    setTimerActive(true);
    timerRef.current = window.setInterval(
      () =>
        setActiveTimer((prev) => {
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
    setActiveTimer(startTime);
  }

  const timer: Timer = {
    current: {
      s: activeTimer,
      components: sec2time(activeTimer),
    },
    start: {
      s: startTime,
      components: sec2time(startTime),
    },
    active: timerActive,
  };

  const controls: TimerControls = {
    start,
    stop,
    reset,
    updateTime,
  };
  return (
    <TimerContext.Provider value={[timer, controls]}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  return useContext(TimerContext);
};
