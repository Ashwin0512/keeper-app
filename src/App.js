import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Form from './components/Form';
import { useState } from 'react';

const notes = [
    
];
  

function App() {

  const [notesArray, setNotesArray] = useState(notes)

  function deleteNote(id) {
    setNotesArray(prevArray => {
      return prevArray.filter((item,index) => {
        return index !== id
      })
    })
  }

  function addNote(newNote)  {
    setNotesArray(prevArray => [...prevArray,newNote])
  }

  return (
    <div className='container'>
      <Header />
      <Form onAdd={addNote}/>
      <div className='notes'>
        {notesArray.map((note,index) => (
          <Note key={index}
          id = {index} 
          title={note.title} 
          content={note.content}
          onClick={deleteNote}/>
        ))}
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
}

export default App;