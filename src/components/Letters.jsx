import { useState } from "react";
import { randomWord } from "../WordDisplay";
import { Hangman } from "../HangmanFigure";
import { RestartBtn } from "../ResetButton";

export let gameOver = false;
export function CheckLetter(params) {
  const { updateLoseCount, updateWinCount } = params;

  const keyboard = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let correctGuess = [];

  const [correct, setCorrect] = useState([]);
  let [count, setCount] = useState(6);

  function loseLife() {
    setCount(count - 1);
  }

  const hiddenWord = randomWord.map((letter, index) =>
    correct.includes(letter) ? (
      <ul key={index} className="wordLetter">
        {letter}
      </ul>
    ) : (
      <ul key={index} className="wordLetter"></ul>
    )
  );

  randomWord.map((letter) =>
    correct.includes(letter) ? correctGuess.push(letter) : correctGuess
  );
  function hancleClick(e) {
    const key = e.target.innerText;
    if (randomWord.includes(key) && !gameOver) {
      setCorrect([...correct, key]);
      e.currentTarget.classList.add("highlightCorrect");
    } else if (!gameOver) {
      e.currentTarget.classList.add("highlightIncorrect");
      loseLife();
    }
  }

  const buttons = keyboard.map((letter, index) => (
    <button onClick={hancleClick} className="boardBtn" key={index}>
      {letter}
    </button>
  ));


  const CheckWin = () => {
    if (randomWord.length === correctGuess.length) {
      gameOver = true;

      return <p>You win!</p>;
    }
  };

  console.log(randomWord);

  const LifeCounter = () => {
    if (count < 1) {
      count = 0;
      gameOver = true;
      // alert('Game over!')
      return <p className="loseContainer">Game over!</p>;
    } else {
      return <p className="livesContainer">Lives left: {count}</p>;
    }
  };

  window.addEventListener("keyup", (e) => {
    const upperCase = e.key.toUpperCase();
    if (randomWord.includes(upperCase) && !gameOver) {
      setCorrect([...correct, upperCase]);
    } else if (!gameOver) {
      loseLife();
    }
  });

  return (
    <>
      <Hangman data={count} />
      <div className="letterContainer">{hiddenWord}</div>
      <div className="keyboardContainer">{buttons}</div>
      <div className="winContainer">
        <CheckWin />
      </div>
      <div>
        <LifeCounter />
      </div>
      <RestartBtn
        updateWinCount={updateWinCount}
        updateLoseCount={updateLoseCount}
        data={count}
      />
    </>
  );
}
