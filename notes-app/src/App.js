import { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";


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
  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;
