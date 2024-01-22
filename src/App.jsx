import { useState, useRef } from "react"
import { levels } from "./levels"
import NewGame from "./components/NewGame"
import GameOver from "./components/GameOver.jsx"
import Game from "./components/Game"
import Sound from "./assets/sound.mp3"

const getRandNumb = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

function App() {
  const [player, setPlayer] = useState()
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0)
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [current, setCurrent] = useState(0)
  const sound = useRef(new Audio(Sound));

  const timeoutIdRef = useRef(null);
  const rounds = useRef(0);
  const currentInst = useRef(0);

  let pace = 1000;
  let levelsAmount;


  const gameSetHandler = (level, name) => {
    const { amount } = levels.find(el => el.name === level)
    levelsAmount = amount;
    const circlesArray = Array.from({ length: levelsAmount }, (_, i) => i);

    setCircles(circlesArray)
    setPlayer({
      level: level,
      name: name
    });
    setGameLaunch((previousLaunch) => !previousLaunch);
    setGameOn(!gameOn);
    sound.current.play();
    randomNumber();
  };


  const stopHandler = () => {

    setGameOn((previousLaunch) => !previousLaunch)
    setGameOver((previousLaunch) => !previousLaunch)
    rounds.current = 0;
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
    sound.current.pause();

  }

  const closingHandler = () => {
    setGameOver((previousLaunch) => !previousLaunch)
    setGameLaunch((previousLaunch) => !previousLaunch)
    setScore(0)
  }

  const clickHandler = (id) => {
    if (current !== id) {
      stopHandler();
      return;
    }
    setScore(score + 10)
    rounds.current--;
  }

  const randomNumber = () => {
    if (rounds.current >= 3) {
      stopHandler();
      return;
    }
    let nextActive;

    do {
      nextActive = getRandNumb(0, levelsAmount);
    } while (nextActive === currentInst.current);

    setCurrent(nextActive);
    currentInst.current = nextActive;
    rounds.current++;
    timeoutIdRef.current = setTimeout(randomNumber, pace);
    pace *= 0.95;

  };


  return (
    <>
      {gameLaunch && < NewGame onclick={gameSetHandler} />}
      {gameOn && < Game
        score={score}
        circles={circles}
        stopHandler={stopHandler}
        clickHandler={clickHandler}
        current={current}
      />}
      {gameOver &&
        <GameOver
          closingHandler={closingHandler}
          {...player}
          score={score}
        />}<div className="footer">
        <footer>Mychel Garzon @copyright 2023</footer>
      </div>
    </>
  );
}

export default App;


