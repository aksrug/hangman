/*import PropTypes from 'prop-types';

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
*/

import  img0 from "/src/components/imgages/0.png";
import  img1 from "/src/components/imgages/1.png";
import  img2 from "/src/components/imgages/2.png";
import  img3 from "/src/components/imgages/3.png";
import  img4 from "/src/components/imgages/4.png";
import  img5 from "/src/components/imgages/5.png";
import  img6 from "/src/components/imgages/6.png";


export function HangmanFigure(params){
    const handleImg = params.data === 6 
    ? img0 
    : params.data === 5 
    ? img1 
    : params.data === 4 
    ? img2 
    : params.data === 3 
    ? img3 
    : params.data === 2 
    ? img4 
    : params.data === 1 
    ? img5 
    : params.data === 0 
    ? img6
    : img0
    
    return (
        <div className='hangmanContainer'>
          <img src={handleImg} alt=""/>
        </div>
    );

}




