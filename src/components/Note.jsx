import React from "react";
import '../styles/Note.css'
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <button onClick={() => props.onClick(props.id)}><DeleteIcon /></button>
        </div>
    )
}

export default Note