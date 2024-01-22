function GameOver({ name, score, level, closingHandler, gameOverMessage }) {
  return (
    <div className="overlay">
      <div className="gameOverContainer">
        <h2>Game Over</h2>
        <h3>Hello {name}! </h3>
        <h3>
          {score === 0
            ? `Try harder next time keep trying! Your score was ${score} points, you played the ${level} level`
            : score <= 50
              ? `Well done!!!  Your score was ${score} points, you played the ${level} level`
              : score < 60
                ? `Well done keep trying. Your score was ${score} points, you played the ${level} level` :
                `You are doing amazing!!! Your score was ${score} points, you played the ${level} level`
          }
        </h3>

        <h3></h3>
        <button onClick={closingHandler}>Start Again</button>
        <h3>{gameOverMessage}</h3>
      </div>
    </div>
  )
}

export default GameOver;
