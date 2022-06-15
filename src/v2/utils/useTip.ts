import { useApolloClient } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { TipDocument, TipSubscription } from "../generated/graphql";

export function useTip() {
  const client = useApolloClient();
  const lastId = useRef<number | null>(null);
  const [tip, setTip] = useState<number>(0);

  useEffect(() => {
    let offset = Date.now() + 5000;
    const subscription = client
      .subscribe<TipSubscription>({
        query: TipDocument,
      })
      .subscribe({
        next(result) {
          if (!result.data || !result.data.tipChanged) return;
          const tip = result.data.tipChanged.index;
          if (lastId.current) cancelIdleCallback(lastId.current);
          lastId.current = requestIdleCallback(
            () => {
              offset = Date.now() + 5000;
              setTip(tip);
            },
            { timeout: offset - Date.now() }
          );
        },
        error(error) {
          console.error(error);
        },
      });
    return () => subscription.unsubscribe();
  }, [client]);

  return tip;
}
