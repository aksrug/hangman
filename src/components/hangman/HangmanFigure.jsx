/*import PropTypes from 'prop-types';

export default function HangmanFigure({ wrongGuesses }) {
  return (
    <div className="hangman-figure">
      {wrongGuesses >= 1 && <div className="head"></div>}
      {wrongGuesses >= 2 && <div className="body"></div>}
      {wrongGuesses >= 3 && <div className="arm left"></div>}
      {wrongGuesses >= 4 && <div className="arm right"></div>}
      {wrongGuesses >= 5 && <div className="leg left"></div>}
      {wrongGuesses >= 6 && <div className="leg right"></div>}
    </div>
  );
}

HangmanFigure.propTypes = {
  wrongGuesses: PropTypes.number.isRequired,
};
*/

import PropTypes from 'prop-types';


export default function HangmanFigure({ wrongGuesses }) {
  const imagePath = `/images/${wrongGuesses}.png`;

  return (
    <div className="hangman-figure">
      <img src={imagePath} alt={`Hangman with ${wrongGuesses} wrong guesses`} />
    </div>
  );
}

HangmanFigure.propTypes = {
  wrongGuesses: PropTypes.number.isRequired,
};




