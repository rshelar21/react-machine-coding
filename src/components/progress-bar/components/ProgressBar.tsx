import { useEffect, useState } from "react";
import { MAX_PROGRESS, MIN_PROGRESS } from "../constants";
import "../style.css";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    let timer;

    timer = setInterval(() => {
      setProgress((prev) =>
        Math.min(MAX_PROGRESS, Math.max(prev + 5, MIN_PROGRESS))
      );
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="progress">
      <div
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        role="progressbar"
        className="progress__inner"
        style={{
          // width: `${progress}%`,
          transform: `scaleX(${progress / MAX_PROGRESS})`,
          transformOrigin: "left",
        }}
      ></div>
      <span
        style={{
          color: progress > 50 ? "white" : "black",
        }}
        aria-label={`${progress}%`}
      >
        {progress}%
      </span>
    </div>
  );
};
