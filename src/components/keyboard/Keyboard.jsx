import React from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

export default function Keyboard({ onLetterClick, guessedLetters }) {
  return (
    <div className="keyboard">
      {letters.map(letter => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          className={`key ${guessedLetters.includes(letter) ? 'guessed' : ''}`}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}