import { useState } from "react";
import "../style.css";

const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export const TicTacToe = () => {
  const [board, setBoard] = useState([...new Array(9).fill("")]);
  const [currentDie, setCurrentDie] = useState("X");
  const [winner, setWinner] = useState("");

  const handleCheckWinner = (newBasket) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        newBasket[a] &&
        newBasket[a] === newBasket[b] &&
        newBasket[a] === newBasket[c]
      ) {
        return true;
      }
    }

    return false;
  };

  const handleSetKey = (id: number) => {
    const newBasket = [...board];
    newBasket[id] = currentDie;
    setBoard(newBasket);
    setCurrentDie((prev) => (prev === "O" ? "X" : "O"));

    const res = handleCheckWinner(newBasket);
    if (res) {
      console.log(`winner is`, currentDie);
      setWinner(`winner is ${currentDie}`);
    } else {
      //   console.log("noo winner");
    }
  };

  const handleClearGame = () => {
    setBoard([...new Array(9).fill("")]);
    setCurrentDie("X");
    setWinner('')
  };

  return (
    <>
      <button onClick={handleClearGame}>clear</button>
      {winner && <p>{winner}</p>}
      <div className="gameboard">
        {board.map((item, index) => (
          <button
            onClick={() => handleSetKey(index)}
            className="gameboard__cells"
            disabled={board[index]}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
