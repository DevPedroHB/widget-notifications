import { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface INotificationAction extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export function NotificationAction({
  icon: Icon,
  ...rest
}: INotificationAction) {
  return (
    <button
      {...rest}
      className={twMerge(
        "w-8 h-8 rounded flex items-center justify-center bg-zinc-800 hover:bg-zinc-700",
        rest.className
      )}
    >
      <Icon className="w-3 h-3 text-zinc-50" />
    </button>
  );
}
