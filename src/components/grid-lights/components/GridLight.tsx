import { useEffect, useState } from "react";
import { Cells } from "./Cells";
import "../style.css";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

export const GridLight = () => {
  const [activeCell, setActiveCells] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isComplete) {
      timer = setInterval(() => {
        const newcells = [...activeCell];
        newcells.pop();
        setActiveCells(newcells);
        if (!newcells.length) {
          setIsComplete(false);
        }
      }, 500);
    }

    return () => {
      clearInterval(timer);
    };
  }, [activeCell, isComplete]);

  const handleSetActive = (idx: number) => {
    const newBasket = [...activeCell];
    newBasket.push(idx);

    setActiveCells((prev) => {
      return [...prev, idx];
    });
    if (newBasket.length === config.flat().length - 1) {
      setIsComplete(true);
    }
  };

  return (
    <div className="grid">
      {config.flat(1).map((cell, index) => (
        <Cells
          index={index}
          key={index}
          cell={cell}
          onSetActive={handleSetActive}
          isActive={activeCell.includes(index)}
        />
      ))}
    </div>
  );
};
