function GameOver({ name, score, level, closingHandler }) {
  return (
    <div className="overlay">
      <div className="gameOverContainer">
        <h2>Game Over</h2>
        <h3>Well Done {name}! Your score was<p>{score} points, you played the {level} level</p></h3>
        <button onClick={closingHandler}>Start Again</button>
      </div>
    </div>
  )
}

export default GameOver;
