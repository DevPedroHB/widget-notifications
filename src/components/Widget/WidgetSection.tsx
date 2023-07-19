import { ReactNode } from "react";

interface IWidgetSection {
  title: string;
  children: ReactNode;
}

export function WidgetSection({ title, children }: IWidgetSection) {
  return (
    <div>
      <div className="bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-400">
        {title}
      </div>
      <div className="divide-y-2 divide-zinc-950">{children}</div>
    </div>
  );
}
