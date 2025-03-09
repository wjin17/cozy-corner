import { Clock2, Hourglass } from "lucide-react";

import { Button } from "../../components/Button";
import { Card, CardHeader } from "../../components/Card";
import { SettingsActions as S, useSettings } from "../../hooks/useSettings";
import { cn } from "../../utils/cn";
import { ClockConfig } from "./ClockConfig";
import { TimerConfig } from "./TimerConfig";

type ConfigContainerProps = {
  settingsRef: React.RefObject<HTMLDivElement | null>;
};

export const ConfigContainer = ({ settingsRef }: ConfigContainerProps) => {
  const [settings, dispatch] = useSettings();

  return (
    <Card ref={settingsRef}>
      <CardHeader className="flex items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Button
              className={cn(
                settings.mode === "clock"
                  && "bg-background-accent text-secondary-foreground",
              )}
              variant="primary"
              onClick={() => dispatch({ type: S.SET_MODE, payload: "clock" })}
            >
              <Clock2 size={16} />
            </Button>
            <Button
              className={cn(
                settings.mode === "timer"
                  && "bg-background-accent text-secondary-foreground",
              )}
              variant="primary"
              onClick={() => dispatch({ type: S.SET_MODE, payload: "timer" })}
            >
              <Hourglass size={16} />
            </Button>
          </div>
          {settings.mode === "clock" && <ClockConfig />}
          {settings.mode === "timer" && <TimerConfig />}
        </div>
      </CardHeader>
    </Card>
  );
};
