import { BridgeEventToken } from "@/constants/event";

interface BridgeEvent<T> {
  type: BridgeEventToken;
  payload: T;
}

export type { BridgeEvent };
