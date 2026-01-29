import { BridgeEvent } from "@/types/bridgeEvent";

const useBridge = () => {
  const postMessage = (message: BridgeEvent<any>) => {
    window.ReactNativeWebView?.postMessage(JSON.stringify(message));
  };

  return { postMessage };
};

export default useBridge;
