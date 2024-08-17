import PropTypes from 'prop-types';

export default function GameOverMessage({ isWin, onRestart }) {
  return (
    <div className="game-over">
      <p>{isWin ? 'Congratulations, you won!' : 'Sorry, you lost!'}</p>
      <button onClick={onRestart} className="reset-button">Start New Game</button>
    </div>
  );
}

GameOverMessage.propTypes = {
  isWin: PropTypes.bool.isRequired, 
  onRestart: PropTypes.func.isRequired, 
};
