import type { BaseEvent } from "./base-event";

export type LifecycleEvent =
  | (BaseEvent & {
      readonly type: "START";
    })
  | (BaseEvent & {
      readonly type: "COMPLETE";
    })
  | (BaseEvent & {
      readonly type: "ERROR";
      readonly error: string;
    });
