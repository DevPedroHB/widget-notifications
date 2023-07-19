import { ElementType } from "react";

interface INotificationIcon {
  icon: ElementType;
}

export function NotificationIcon({ icon: Icon }: INotificationIcon) {
  return <Icon className="w-6 h-6 text-violet-500 mt-3" />;
}
