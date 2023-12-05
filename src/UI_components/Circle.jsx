function Circle({ clickHandler, id, current }) {
    return (
        <div
            className={`circle ${current ? 'active' : ''}`}
            onClick={() => { clickHandler(id) }}>
        </div>
    )
}

export default Circle;

/*
Ghost
*/