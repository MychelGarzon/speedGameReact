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

/*
function GameOver({closeHandler, name, score, level}) {
  return (
    <div className="overlay">
      <div className="gameover_box">
        <h2>GAME OVER</h2>
        <div className="game_data">
          <p>{name}</p>
          <p className="score">{score}</p>
          <p>{level}</p>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
          perferendis eaque repellat, magnam error vero debitis necessitatibus
          fugit ut a?
        </p>
        <button onClick={closeHandler}>X</button>
      </div>
    </div>
  );
}
 
export default GameOver;
 
*/