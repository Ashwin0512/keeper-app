import React from "react";
import '../styles/Note.css'

function Note(props) {
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <button onClick={() => props.onClick(props.id)}>Delete</button>
        </div>
    )
}

export default Note