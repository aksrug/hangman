//import { words } from "./components/randomWords/wordsList.js";

import { words } from "../wordsList.js"; // Kelias turėtų būti teisingas


//export const randomWord = words[Math.floor(Math.random() * words.length)].split('');

export function randomWord() {
  return words[Math.floor(Math.random() * words.length)].split('');
}



/*import PropTypes from 'prop-types';

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
*/



