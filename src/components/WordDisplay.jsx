import PropTypes from 'prop-types';

export default function WordDisplay({ word, guessedLetters }) {
  return (
    <div className="word-display">
      {word.split('').map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

WordDisplay.propTypes = {
  word: PropTypes.string.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};


