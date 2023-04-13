import { ReactElement } from "react";
import { clsx } from "clsx";

import { HiOutlineBackspace } from "react-icons/hi";

import "./styles.scss";
import { KEYBOARD } from "../../constants";

interface Props {
  deleteLetter: () => void;
  grayLetters: string[];
  greenLetters: string[];
  sendWord: () => void;
  updateLetters: (value: string) => void;
  yellowLetters: string[];
}

function QwertyKeyboard({
  deleteLetter,
  grayLetters,
  greenLetters,
  sendWord,
  updateLetters,
  yellowLetters,
}: Props): ReactElement {
  return (
    <div className="qwerty">
      {KEYBOARD.map((key: string) => {
        const buttonStyles = clsx({
          gray: grayLetters.includes(key),
          yellow: yellowLetters.includes(key),
          green: greenLetters.includes(key),
          enter: key === "ENTER",
          backspace: key === "HiOutlineBackspace",
        });

        return (
          <button
            key={key}
            className={buttonStyles}
            onClick={() => {
              if (key === "ENTER") {
                return sendWord();
              }

              if (key === "HiOutlineBackspace") {
                return deleteLetter();
              }

              updateLetters(key);
            }}
          >
            {key === "HiOutlineBackspace" ? <HiOutlineBackspace /> : key}
          </button>
        );
      })}
    </div>
  );
}

export default QwertyKeyboard;
