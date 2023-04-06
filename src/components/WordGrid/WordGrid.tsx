import { useEffect, useState } from "react";

import "./styles.scss";
import { QwertyKeyboard } from "../QwertyKeyboard";

type LetterStatus = "yellow" | "gray" | "green" | null;

interface Word {
  value: string;
  status: LetterStatus;
}

function WordGrid() {
  const [gridLetters, setGridLetters] = useState<Word[][]>(() => [
    Array(5).fill({
      value: "",
      status: null,
    }),
    Array(5).fill({
      value: "",
      status: null,
    }),
    Array(5).fill({
      value: "",
      status: null,
    }),
    Array(5).fill({
      value: "",
      status: null,
    }),
    Array(5).fill({
      value: "",
      status: null,
    }),
    Array(5).fill({
      value: "",
      status: null,
    }),
  ]);
  const [positionX, setPositionX] = useState(() => 0);
  const [positionY, setPositionY] = useState(() => 0);
  const [wordOfTheDay, setWordOfTheDay] = useState(["a", "v", "i", "o", "n"]);

  const updateLetters = (value: string): void => {
    if (positionX === 5) {
      return;
    }

    setGridLetters((prevState): Word[][] => {
      const newLetter: Word = { value, status: null };

      prevState[positionY][positionX] = newLetter;

      return [...prevState];
    });

    setPositionX((prevState) => prevState + 1);
  };

  const deleteLetter = (): void => {
    if (positionX === 0 && positionY === 0) {
      return;
    }

    setGridLetters((prevState): Word[][] => {
      const newState = [...prevState];

      newState[positionY][positionX - 1].value = "";

      return newState;
    });

    setPositionX((prevState) => prevState - 1);
  };

  const sendWord = (): void => {
    if (positionX < 5) {
      alert("pablabra incompleta");
      return;
    }

    const wordStatus: string[] = [];

    gridLetters[positionY].forEach((letter, index) => {
      let letterStatus: LetterStatus;

      // Exist the letter in the word of the day?
      const letterExist = wordOfTheDay.indexOf(letter?.value.toLocaleLowerCase());

      if (letterExist !== -1) {
        // If the letter is equal
        if (letter?.value.toLocaleLowerCase() === wordOfTheDay[index]) {
          letterStatus = "green";
          wordStatus.push("green");
        } else {
          letterStatus = "yellow";
          wordStatus.push("yellow");
        }
      } else {
        letterStatus = "gray";
        wordStatus.push("gray");
      }

      setGridLetters((prevState): Word[][] => {
        const newLetterStatus = { ...prevState[positionY][index] };
        newLetterStatus.status = letterStatus;

        prevState[positionY][index] = newLetterStatus;

        return [...prevState];
      });
    });

    const success = wordStatus.every((status) => status === "green");

    if (success) {
      alert("adivinaste!");
    } else {
      setPositionX(0);
      setPositionY((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Enter") {
        sendWord();
      }

      if (event.keyCode >= 65 && event.keyCode <= 90) {
        updateLetters(event.key.toUpperCase());
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="grid">
      {gridLetters.map((word, i) => (
        <div key={`word-${i.toString()}`} className="word">
          {word.map((letter, j) => (
            <span key={`letter-${j.toString()}`} className={`letter ${letter.status}`}>
              {letter?.value}
            </span>
          ))}
        </div>
      ))}

      <QwertyKeyboard
        deleteLetter={deleteLetter}
        sendWord={sendWord}
        updateLetters={updateLetters}
      />
    </div>
  );
}

export default WordGrid;
