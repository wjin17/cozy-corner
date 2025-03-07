import { Button } from "../../components/Button";
import { SettingsActions as S, useSettings } from "../../hooks/useSettings";
import { cn } from "../../utils/cn";

export const ClockConfig = () => {
  const [settings, dispatch] = useSettings();

  return (
    <div className="flex flex-col">
      <span className="text-sm font-semibold">Mode</span>
      <div className="flex gap-2 text-xs">
        <Button
          variant="primary"
          onClick={() => dispatch({ type: S.SET_CLOCK_FORMAT, payload: "12h" })}
          className={cn(
            settings.clock.format === "12h" &&
              "bg-background-accent text-secondary-foreground",
          )}
        >
          12h
        </Button>
        <Button
          variant="primary"
          className={cn(
            settings.clock.format === "24h" &&
              "bg-background-accent text-secondary-foreground",
          )}
          onClick={() => dispatch({ type: S.SET_CLOCK_FORMAT, payload: "24h" })}
        >
          24h
        </Button>
      </div>
      <span className="mt-2 text-sm font-semibold">Format</span>
      <div className="flex gap-2 text-xs">
        <Button
          variant="primary"
          onClick={() => dispatch({ type: S.SET_SHOW_SECONDS, payload: false })}
          className={cn(
            !settings.clock.showSeconds &&
              "bg-background-accent text-secondary-foreground",
          )}
        >
          HH:MM
        </Button>
        <Button
          variant="primary"
          className={cn(
            settings.clock.showSeconds &&
              "bg-background-accent text-secondary-foreground",
          )}
          onClick={() => dispatch({ type: S.SET_SHOW_SECONDS, payload: true })}
        >
          HH:MM:SS
        </Button>
      </div>
    </div>
  );
};
