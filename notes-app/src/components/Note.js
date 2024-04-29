import { MdDeleteForever } from "react-icons/md"

const Note = () => {
  return (
    <div className="note">
        <span>Hello! This is our First Note</span>
        <div className="note-footer">
            <small>29/04/2024</small>
            <MdDeleteForever className="delete-icon"  size='1.3em'/>
        </div>
      
    </div>
  )
}

export default Note
