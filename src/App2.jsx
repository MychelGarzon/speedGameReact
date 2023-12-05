import { useState } from "react"
import { levels } from "./levels"
import NewGame from "./components/NewGame"
import GameOver from "./components/GameOver.jsx"
import Game from "./components/Game"

let timer;
let pace = 1000;


const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber(0, 3));
function App() {
    const [player, setPlayer] = useState()
    const [circles, setCircles] = useState([])
    const [score, setScore] = useState(0)
    const [gameLaunch, setGameLaunch] = useState(true)
    const [gameOn, setGameOn] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [current, setCurrent] = useState(0)


    const gameSetHandler = (level, name) => {
        const levelIndex = levels.findIndex(el => el.name === level);
        const levelAmount = levels[levelIndex].amount;
        const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);


        setCircles(circlesArray)
        setPlayer({
            level: level,
            name: name
            //score: score
        })
        setGameLaunch(!gameLaunch)
        setGameOn(!gameOn)

    }
    const stopHandler = () => {
        setGameOn(!gameOn)
        setGameOver(!gameOver)
        clearTimeout(timer)
    }
    const closingHandler = () => {
        setGameOver(!gameOver)
        setGameLaunch(!gameLaunch)
        setScore(0)
    }

    const clickHandler = (id) => {
        setScore(score + 10)
        console.log("this is the id ", id)
    }

    const randomNumber = () => {
        let nextActive;
        do {
            nextActive = randomNumber(0, circles.length);
        }
        while (nextActive === current);
        setCurrent(nextActive)
        timer = setTimeout(randomNumber, pace)

    };



    return (
        <>
            {gameLaunch && < NewGame onclick={gameSetHandler} />}
            {gameOn && < Game
                score={score}
                circles={circles}
                stopHandler={stopHandler}
                clickHandler={clickHandler} />}
            {gameOver && <GameOver closingHandler={closingHandler} {...player} score={score} />}
            <footer>Mychel Garzon @copyright 2023</footer>
        </>
    );
}

export default App;
