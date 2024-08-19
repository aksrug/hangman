import { useState } from "react";
import { randomWord } from "../randomWords/WordDisplay";
import  HangmanFigure from "../hangmanFigure/HangmanFigure";
import { ResetButton } from "../resetButton/ResetButton";

export let gameOver = false;
export function CheckLetter(params) {
  const { updateLoseCount, updateWinCount } = params;

  const keyboard = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
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

  function handleClick(e) {
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
    <button onClick={handleClick} className="boardButton" key={index}>
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
      return <p className="gameOverContainer">Game over!</p>;
    } else {
      return <p className="livesLeftContainer">Lives left: {count}</p>;
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
      <HangmanFigure data={count} />
      <div className="letterContainer">{hiddenWord}</div>
      <div className="keyboardContainer">{buttons}</div>
      <div className="winnerContainer">
        <CheckWin />
      </div>
      <div>
        <LifeCounter />
      </div>
      <ResetButton
        updateWinCount={updateWinCount}
        updateLoseCount={updateLoseCount}
        data={count}
      />
    </>
  );
}
