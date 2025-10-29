import { useRef } from "react";

export const useThrottle = (cb: any, delay = 300) => {
  const lastCall = useRef(0);

  return (...args: any) => {
    const current = Date.now();
    // console.log(current, lastCall)
    if (current - lastCall.current >= delay) {
      lastCall.current = current;
      cb(...args);
    }
  };
};
