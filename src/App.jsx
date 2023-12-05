import { useState, useRef } from "react"
import { levels } from "./levels"
import NewGame from "./components/NewGame"
import GameOver from "./components/GameOver.jsx"
import Game from "./components/Game"

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
  const timeoutIdRef = useRef(null);

  let pace = 1000;
  let levelsAmount;

  const gameSetHandler = (level, name) => {
    /* const levelIndex = levels.findIndex((el) => el.name === level);
    const levelAmount = levels[levelIndex].amount;*/

    const { amount } = levels.find(el => el.name === level)
    levelsAmount = amount
    const circlesArray = Array.from({ length: levelsAmount }, (_, i) => i);


    setCircles(circlesArray)
    setPlayer({
      level: level,
      name: name
    })

    setGameLaunch((previousLaunch) => !previousLaunch);
    setGameOn(!gameOn);
    randomNumber();
  }

  const stopHandler = () => {
    setGameOn(!gameOn)
    setGameOver(!gameOver)
    clearTimeout(timeoutIdRef.current);
  }

  const closingHandler = () => {
    setGameOver(!gameOver)
    setGameLaunch(!gameLaunch)
    setScore(0)
  }

  const clickHandler = (id) => {
    if (current !== id) {
      stopHandler();
      return;
    }
    setScore(score + 10)

  }

  const randomNumber = () => {
    let nextActive;

    do {
      nextActive = getRandNumb(0, levelsAmount);
    } while (nextActive === current);

    setCurrent(nextActive);

    timeoutIdRef.current = setTimeout(randomNumber, pace);
    console.log(nextActive);
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
      {gameOver && <GameOver closingHandler={closingHandler} {...player} score={score} />}
      <footer>Mychel Garzon @copyright 2023</footer>
    </>
  );
}

export default App;


/** 
 * function App(){
 * const timeoutIdRef= useRef(null);
 * 
 * function randomNumber(){
 * timeoutIdRef.current = setTimeout(randomNumber, pace);
 * }
 * 
 * function stopHandler(){
 * clearTimeout(timeoutIdRef.current);
 * timeoutIdRef.current = null;
 * }
 *  */