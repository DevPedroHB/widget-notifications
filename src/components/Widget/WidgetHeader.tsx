interface IWidgetHeader {
  title: string;
}

export function WidgetHeader({ title }: IWidgetHeader) {
  return (
    <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
      <span className="font-bold">{title}</span>
      <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
        MARCAR TODAS COMO VISTAS
      </button>
    </div>
  );
}
