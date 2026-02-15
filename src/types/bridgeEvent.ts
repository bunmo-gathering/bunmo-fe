// import { BridgeEventToken } from "@/constants/event";

interface BridgeEvent<Type, Payload> {
  /**
   * BridgePostEventToken | BridgeGetEventToken
   */
  type: Type;

  /**
   * 각 이벤트에 전달되는 페이로드 객체
   */
  payload: Payload;
}

export type { BridgeEvent };
