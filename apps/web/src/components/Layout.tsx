import { type FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="bg-background h-full min-h-screen">{children}</div>;
};
