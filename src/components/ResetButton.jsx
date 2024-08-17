import { gameOver } from "../Letters";

export function ResetButton(params) {
  const { updateWinCount, updateLoseCount } = params;
  if (params.data === 0) {
    return (
      <div>
        <button
          onClick={() => {
            updateLoseCount(), window.location.reload();
          }}
          className="restartBtn"
        >
          Restart Game
        </button>
      </div>
    );
  } else if (gameOver === true) {
    return (
      <div>
        <button
          onClick={() => {
            updateWinCount(), window.location.reload();
          }}
          className="restartBtn"
        >
          Restart Game
        </button>
      </div>
    );
  }
}
