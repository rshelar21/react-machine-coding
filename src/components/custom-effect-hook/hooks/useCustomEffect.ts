import { useRef } from "react";

export const useCustomEffect = (cb: () => any, deps?: any[]) => {
  const firsttimeExecute = useRef(true);
  const prevDeps = useRef<any[]>([]);

  if (firsttimeExecute.current) {
    firsttimeExecute.current = false;
    const cleanup = cb();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  const depsChange = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps)
    : true;

  if (depsChange) {
    const cleanup = cb();
    if (cleanup && typeof cleanup === "function" && deps) {
      cleanup();
    }
  }

  prevDeps.current = deps || [];
};
