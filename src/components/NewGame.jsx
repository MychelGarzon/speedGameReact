import { useState } from "react";

function NewGame({ onclick }) {
    const [name, setName] = useState('')

    const inputHandler = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="newGame">
            <h1>Catch the ghost</h1>
            <input type="text" placeholder="Enter your name" onChange={inputHandler} required />
            <div className="newGameLevels">
                <h2>Choose the level</h2>
                <button onClick={() => onclick('easy', name)}>Easy</button>
                <button onClick={() => onclick('medium', name)}>Medium</button>
                <button onClick={() => onclick('hard', name)}>Hard</button>
            </div>
        </div>
    );
}
export default NewGame;


