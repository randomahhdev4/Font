import React from "react";
import { after } from "@vendetta/patcher";
import { findByDisplayNameLazy } from "@vendetta/metro";
import AnimatedTopoBackground from "./AnimatedTopoBackground";

const Messages = findByDisplayNameLazy("MessagesConnected");

let unpatch: (() => void) | null = null;

export function onLoad() {
  try {
    const patch = after("render", Messages, (_args: unknown, ret: React.ReactNode) => {
      return (
        <>
          <AnimatedTopoBackground />
          {ret}
        </>
      );
    });
    unpatch = () => patch();
  } catch (e) {
    console.log("[AnimatedTopoBackground] failed to patch MessagesConnected:", e);
  }
}

export function onUnload() {
  unpatch?.();
  unpatch = null;
}
