import PropTypes from 'prop-types';

export default function HangmanFigure({ wrongGuesses }) {
  return (
    <div className="hangman-figure">
      <img src={`./components/images/${wrongGuesses}.png`} alt={`${wrongGuesses} wrong guesses`} />
    </div>
  );
}

HangmanFigure.propTypes = {
  wrongGuesses: PropTypes.number.isRequired,
};




