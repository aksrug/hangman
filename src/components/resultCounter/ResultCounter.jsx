export default function Score() {
  const score1 = localStorage.getItem("loseData");
  const lose = JSON.parse(score1);

  const score2 = localStorage.getItem("winData");
  const win = JSON.parse(score2);

  return (
    <>
      <div className="resultCounter">
        <p className="resultContainer">Win count: {win}</p>
        <p className="resultContainer">Lose count: {lose}</p>
      </div>
    </>
  );
}
