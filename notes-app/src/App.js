import { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";


const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my First Note",
    date:"20/04/2024",
  },
  {
    id: nanoid(),
    text: "This is my Second Note",
    date:"24/04/2024",
  },
  {
    id: nanoid(),
    text: "This is my Third Note",
    date:"29/04/2024",
  },
  {
    id: nanoid(),
    text: "This is my New Note",
    date:"29/04/2024",
  },
]);

     const [searchText, setSearchText] = useState('');

     const addNote = (text) =>{
        const date = new Date();
        const newNote ={
          text: text,
          date: date.toLocaleDateString()
        }

        const newNotes = [...notes, newNote];
        setNotes(newNotes);
     }; 

    const deleteNote = (id) =>{
        const newNotes=  notes.filter((note) =>
          note.id!== id);
          setNotes(newNotes);
    }

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote}
      handleDeleteNote ={deleteNote}
      />
    </div>
  )
}

export default App;
