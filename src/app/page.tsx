"use client";

import { Notification } from "@/components/Notification";
import { Widget } from "@/components/Widget";
import { ArrowRight, Check, Rocket, X } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen bg-black flex items-center justify-center text-zinc-50">
      <Widget.Root>
        <Widget.Header title="Notificações" />
        <Widget.Section title="Recentes">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action onClick={() => {}} icon={X} />
              <Notification.Action
                onClick={() => {}}
                icon={Check}
                className="bg-violet-500 hover:bg-violet-600"
              />
            </Notification.Actions>
          </Notification.Root>
          <Notification.Root>
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action
                onClick={() => {}}
                icon={ArrowRight}
                className="bg-emerald-500 hover:bg-emerald-600"
              />
            </Notification.Actions>
          </Notification.Root>
        </Widget.Section>
        <Widget.Section title="Antigas">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          </Notification.Root>
          <Notification.Root>
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          </Notification.Root>
        </Widget.Section>
      </Widget.Root>
    </main>
  );
}
