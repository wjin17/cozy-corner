import { useState, useRef, useEffect } from "react";

import { ConfigContainer } from "./TimeWidgetConfig/ConfigContainer";
import { Clock } from "./Clock";
import { Timer } from "./Timer";
import { useSettings } from "../hooks/useSettings";
import { TimerProvider } from "../hooks/useTimer";

import { cn } from "../utils/cn";

export const TimeWidget = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const settingsButtonRef = useRef<HTMLButtonElement>(null);
  const [settings] = useSettings();

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

  function handleOpenSettings() {
    setSettingsOpen(true);
  }

  return (
    <TimerProvider>
      <div
        className={cn(
          "flex flex-col items-start justify-start gap-2 sm:flex-row",
        )}
      >
        {settings.mode === "clock" ? (
          <Clock
            onOpenSettings={handleOpenSettings}
            settingsButtonRef={settingsButtonRef}
          />
        ) : (
          <Timer
            onOpenSettings={handleOpenSettings}
            settingsButtonRef={settingsButtonRef}
          />
        )}
        {settingsOpen && <ConfigContainer settingsRef={settingsRef} />}
      </div>
    </TimerProvider>
  );
};
