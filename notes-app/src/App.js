import { useState , useEffect } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";


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

     const [darkMode, setDarkMode] = useState(false);

     useEffect(() => {
      try {
          const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
          console.log("Loaded notes:", savedNotes);
          if (savedNotes) {
              setNotes(savedNotes);
          }
      } catch (error) {
          console.error('Failed to load notes from local storage', error);
      }
  }, []);
  

     useEffect(() =>{
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
     }, [notes]);



     const addNote = (text) =>{
        const date = new Date();
        const newNote ={
          id: nanoid,
          text: text,
          date: date.toLocaleDateString()
        }

        const newNotes = [...notes, newNote];
        setNotes(newNotes);
     }; 

    const deleteNote = (id) =>{
        const newNotes=  notes.filter(note =>
          note.id!== id);
          setNotes(newNotes);
    }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote}
      handleDeleteNote ={deleteNote}
      />
    </div>
    </div>
  )
}

export default App;
