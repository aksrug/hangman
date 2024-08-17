import PropTypes from 'prop-types';

export default function ResetButton({ onRestart }) {
  return (
    <button onClick={onRestart} className="reset-button">
      Reset Game
    </button>
  );
}

ResetButton.propTypes = {
  onRestart: PropTypes.func.isRequired,
};
