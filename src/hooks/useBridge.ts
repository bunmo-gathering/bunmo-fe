import { BridgeGetEventToken, BridgePostEventToken } from "@/constants/event";
import { BridgeEvent } from "@/types/bridgeEvent";
import { useEffect, useState } from "react";

const useBridge = () => {
  const [message, setMessage] = useState<BridgeGetEventToken | null>(null);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);

        setMessage(data.type);
      } catch {}
    };

    window.addEventListener("message", handler as EventListener);

    return () => {
      window.removeEventListener("message", handler as EventListener);
    };
  }, []);

  const postMessage = (message: BridgeEvent<BridgePostEventToken, any>) => {
    window.ReactNativeWebView?.postMessage(JSON.stringify(message));
  };

  const getMessage = () => {
    return message;
  };

  return { postMessage, getMessage };
};

export default useBridge;
