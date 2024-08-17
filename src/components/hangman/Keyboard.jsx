//import React from 'react';
import PropTypes from 'prop-types';

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

Keyboard.propTypes = {
  onLetterClick: PropTypes.func.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

