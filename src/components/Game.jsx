import Circle from "../UI_components/Circle";
function Game({ score, circles, stopHandler, clickHandler }) {
    return (
        <div className="circles">
            <button>{score}<p>Score </p></button>
            <div>{circles.map((el, i) =>
                <Circle key={i}
                    id={i}
                    clickHandler={clickHandler}
                />)}
            </div>
            <button onClick={stopHandler}>Stop Game</button>
        </div>

    )
}

export default Game;