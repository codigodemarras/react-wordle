import { useEffect, useState } from "react";

import "./styles.scss";

function WordGrid() {
  const [gridLetters, setGridLetters] = useState<string[][]>(() => [
    Array(5).fill(null),
    Array(5).fill(null),
    Array(5).fill(null),
    Array(5).fill(null),
    Array(5).fill(null),
    Array(5).fill(null),
  ]);
  const [positionX, setPositionX] = useState(() => 0);
  const [positionY, setPositionY] = useState(() => 0);

  const updateletters = (value: string) => {
    if (positionY === 6) {
      return;
    }

    setGridLetters((prevState): string[][] => {
      const newState = [...prevState];

      newState[positionY][positionX] = value;

      return newState;
    });

    setPositionX((prevState) => prevState + 1);

    if (positionX === 4) {
      setPositionX(0);
      setPositionY((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        //TODO: adivinar la palabra
      }

      if (event.keyCode >= 65 && event.keyCode <= 90) {
        updateletters(event.key);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="grid">
      {gridLetters.map((word, i) => (
        <div key={`word-${i.toString()}`} className="word">
          {word.map((letter, j) => (
            <span key={`letter-${i.toString()}`} className="letter">
              {letter}
            </span>
          ))}
        </div>
      ))}

      <button onClick={() => updateletters("P")}>P</button>
    </div>
  );
}

export default WordGrid;
