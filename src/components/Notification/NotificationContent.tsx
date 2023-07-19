interface INotificationContent {
  text: string;
}

export function NotificationContent({ text }: INotificationContent) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-100">
        {text}
        <div className="text-xxs text-zinc-400 flex items-center gap-2">
          <span>Convite</span>
          <span>Há 3 min</span>
        </div>
      </p>
    </div>
  );
}
