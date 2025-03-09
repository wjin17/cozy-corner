import type { FC } from "react";

import { Pause, Play, RotateCcw, Settings2 } from "lucide-react";

import { Button } from "../components/Button";
import { Card, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { DigitalTime } from "../components/DigitalTime";
import { useTimer } from "../hooks/useTimer";

type TimerProps = {
  onOpenSettings: () => void;
  settingsButtonRef: React.RefObject<HTMLButtonElement | null>;
};

export const Timer: FC<TimerProps> = ({
  onOpenSettings,
  settingsButtonRef,
}) => {
  const [timer, controls] = useTimer();

  return (
    <Card>
      <CardHeader className="flex items-center justify-center">
        <CardTitle>
          <DigitalTime
            time={timer.current.s}
            mode="timer"
            includeHours={timer.current.s >= 3600}
          />
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <div>
          {timer.active
            ? (
                <Button variant="primary" onClick={controls.stop}>
                  <Pause size={16} />
                </Button>
              )
            : (
                <div className="flex gap-1">
                  <Button variant="primary" onClick={controls.start}>
                    <Play size={16} />
                  </Button>
                  {timer.current.s !== timer.start.s && (
                    <Button variant="primary" onClick={controls.reset}>
                      <RotateCcw size={16} />
                    </Button>
                  )}
                </div>
              )}
        </div>
        <Button
          ref={settingsButtonRef}
          className="ml-auto md:mr-1"
          variant="primary"
          onClick={onOpenSettings}
        >
          <Settings2 size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};
