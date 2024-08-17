import { useState } from 'react';
import Keyboard from './components/hangman/Keyboard';
import HangmanFigure from './components/hangman/HangmanFigure';
import WordDisplay from './components/hangman/WordDisplay';
import GameOverMessage from './components/hangman/GameOverMessage';
import Scoreboard from './components/hangman/Scoreboard';
import ResetButton from './components/hangman/ResetButton';

const words = ['REACT', 'JAVASCRIPT', 'HANGMAN', 'CODING', 'COMPONENT', 'VARIABLE', 'FUNCTION', 
'DEBUGGING', 'ALGORITHM', 'ARRAY', 'OBJECT', 'SYNTAX', 'LOOP', 'CONDITION', 'FRAMEWORK', 
'BROWSER', 'WEBPACK', 'NODEJS', 'GITHUB', 'DEPLOYMENT'];


function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export default function App() {
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  
  const maxWrongGuesses = 6;

  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const handleRestart = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  const isWin = word.split('').every(letter => guessedLetters.includes(letter));
  const isGameOver = wrongGuesses >= maxWrongGuesses;

  if (isWin || isGameOver) {
    if (isWin) setWins(wins + 1);
    if (isGameOver) setLosses(losses + 1);
  }

  return (
    <div className="app">
      <Scoreboard wins={wins} losses={losses} />
      <HangmanFigure wrongGuesses={wrongGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard onLetterClick={handleLetterClick} guessedLetters={guessedLetters} />
      {(isWin || isGameOver) && <GameOverMessage isWin={isWin} onRestart={handleRestart} />}
      <ResetButton onRestart={handleRestart} /> {/* Pridėtas ResetButton */}
    </div>
  );
}




