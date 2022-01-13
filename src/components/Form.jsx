import React, { useState } from "react";
import '../styles/Form.css'

function Form(props) {

    const [note,setNote] = useState({title: '', content:''});
    
    function handleChange(event) {
        const {name,value} = event.target;

        setNote(prevValue => {
            return({...prevValue, [name]:value})
        })
    }

    function submitNote(event)   {
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        })
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input placeholder="Title" name="title" onChange={handleChange} value={note.title}/>
                <textarea placeholder="Take a note..." name="content" onChange={handleChange} value={note.content} rows={3}/>
                <button type="submit" onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default Form