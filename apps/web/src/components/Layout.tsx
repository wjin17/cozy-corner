import type { FC, PropsWithChildren } from "react";

import { SettingsProvider } from "../hooks/useSettings";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SettingsProvider>
      <div className="bg-background h-full min-h-screen">{children}</div>
    </SettingsProvider>
  );
};
