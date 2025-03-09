import type { FC } from "react";

import { Settings2 } from "lucide-react";

import { Button } from "../components/Button";
import { Card, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { DigitalTime } from "../components/DigitalTime";
import { useClock } from "../hooks/useClock";
import { useSettings } from "../hooks/useSettings";

type ClockProps = {
  onOpenSettings: () => void;
  settingsButtonRef: React.RefObject<HTMLButtonElement | null>;
};

export const Clock: FC<ClockProps> = ({ onOpenSettings }) => {
  const { currentTime } = useClock();
  const [settings] = useSettings();
  return (
    <Card>
      <CardHeader className="flex items-center justify-center">
        <CardTitle>
          {settings.clock.format === "12h" && (
            <p className="mr-3 text-right">
              {currentTime < 43200 ? "AM" : "PM"}
            </p>
          )}
          <DigitalTime
            time={currentTime}
            mode="clock"
            format="12h"
            includeSeconds={settings.clock.showSeconds}
          />
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex items-center justify-end">
        <Button variant="primary" onClick={onOpenSettings}>
          <Settings2 size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};
