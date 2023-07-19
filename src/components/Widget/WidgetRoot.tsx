import { ReactNode } from "react";

interface IWidgetRoot {
  children: ReactNode;
}

export function WidgetRoot({ children }: IWidgetRoot) {
  return <div className="w-[448px] rounded overflow-hidden">{children}</div>;
}
