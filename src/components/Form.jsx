import React, { useState } from "react";
import '../styles/Form.css'
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function Form(props) {

    const [note,setNote] = useState({title: '', content:''});
    const [isExpanded, setIsExpanded] = useState(false);
    
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

    function expand ()  {
        setIsExpanded(true)
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && 
                <input 
                    placeholder="Title" 
                    name="title" 
                    onChange={handleChange} 
                    value={note.title}
                />
                }
                
                <textarea 
                    placeholder="Take a note..." 
                    name="content" 
                    onClick={expand}
                    onChange={handleChange} 
                    value={note.content} 
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab aria-label="add" onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default Form