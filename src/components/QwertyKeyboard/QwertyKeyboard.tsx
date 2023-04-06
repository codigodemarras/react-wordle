import { ReactElement } from "react";

import { HiOutlineBackspace } from "react-icons/hi";

import "./styles.scss";

interface Props {
  deleteLetter: () => void;
  sendWord: () => void;
  updateLetters: (value: string) => void;
}

function QwertyKeyboard({ deleteLetter, sendWord, updateLetters }: Props): ReactElement {
  return (
    <div className="qwerty">
      <div>
        <button onClick={() => updateLetters("Q")}>Q</button>
        <button onClick={() => updateLetters("W")}>W</button>
        <button onClick={() => updateLetters("E")}>E</button>
        <button onClick={() => updateLetters("R")}>R</button>
        <button onClick={() => updateLetters("T")}>T</button>
        <button onClick={() => updateLetters("Y")}>Y</button>
        <button onClick={() => updateLetters("U")}>U</button>
        <button onClick={() => updateLetters("I")}>I</button>
        <button onClick={() => updateLetters("O")}>O</button>
        <button onClick={() => updateLetters("P")}>P</button>
      </div>
      <div>
        <button onClick={() => updateLetters("A")}>A</button>
        <button onClick={() => updateLetters("S")}>S</button>
        <button onClick={() => updateLetters("D")}>D</button>
        <button onClick={() => updateLetters("F")}>F</button>
        <button onClick={() => updateLetters("G")}>G</button>
        <button onClick={() => updateLetters("H")}>H</button>
        <button onClick={() => updateLetters("J")}>J</button>
        <button onClick={() => updateLetters("K")}>K</button>
        <button onClick={() => updateLetters("L")}>L</button>
        <button onClick={() => updateLetters("Ñ")}>Ñ</button>
      </div>
      <div>
        <button className="backspace" onClick={deleteLetter}>
          <HiOutlineBackspace />
        </button>
        <button onClick={() => updateLetters("Z")}>Z</button>
        <button onClick={() => updateLetters("X")}>X</button>
        <button onClick={() => updateLetters("C")}>C</button>
        <button onClick={() => updateLetters("V")}>V</button>
        <button onClick={() => updateLetters("B")}>B</button>
        <button onClick={() => updateLetters("N")}>N</button>
        <button onClick={() => updateLetters("M")}>M</button>
        <button className="enter" onClick={sendWord}>
          ENTER
        </button>
      </div>
    </div>
  );
}

export default QwertyKeyboard;
