import Circle from "../UI_components/Circle";
function Game({ score, circles, stopHandler, clickHandler, current }) {
    return (
        <div className="circles">
            <button>{score}<p>Score </p></button>
            <div>{circles.map((_, i) => (
                <Circle
                    key={i}
                    id={i}
                    clickHandler={clickHandler}
                    current={current === i}
                />))}
            </div>
            <button onClick={stopHandler}>Stop Game</button>
        </div>

    )
}

export default Game;