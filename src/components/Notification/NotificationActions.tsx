import { ReactNode } from "react";

interface INotificationActions {
  children: ReactNode;
}

export function NotificationActions({ children }: INotificationActions) {
  return <div className="flex gap-2 self-center">{children}</div>;
}
