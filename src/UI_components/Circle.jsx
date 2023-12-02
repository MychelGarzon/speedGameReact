function Circle({ clickHandler, id }) {
    return (
        <div className="circle" onClick={() => { clickHandler(id) }}>
            <img src="/src/assets/ghost3.png" />
        </div>
    )
}

export default Circle;

/*
Ghost
*/