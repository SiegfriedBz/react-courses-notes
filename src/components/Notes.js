import { useState} from "react";
import Note from "./Note";
import { v4 as uuidv4 } from 'uuid';

const initNote = {id: '', content: '', important: false}

const Notes = ({notes, setNotes}) => {
    const [newNote, setNewNote] = useState(initNote)
    const [showAll, setShowAll] = useState(true)

    const addNote = (e) => {
        e.preventDefault()
        setNotes([...notes, {...newNote, id: uuidv4()}])
        setNewNote(initNote)
    }

    const handleNoteChange = (e) => {
        e.target.name === 'status' ?
            setNewNote({...newNote, important: !newNote.important})
            : setNewNote({...newNote, [e.target.name]: e.target.value})
    }

    const notesToShow = showAll ?
        notes
        : notes.filter(note => note.important)

    return(
        <>
            <h2>Notes</h2>
            <button
                onClick={()=>setShowAll(!showAll)}
                className='btn btn-sm btn-outline-primary mb-3'
            >
                Show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {notesToShow.map((note) => {
                    return  <Note key={note.id} note={note}/>
                })}
            </ul>

            <h3>Create note</h3>
            <form onSubmit={addNote}>
                <div>
                    <input
                        id='content'
                        type='text'
                        name='content'
                        placeholder='new note...'
                        value={newNote.content}
                        onChange={handleNoteChange}
                        className='form-control mb-1'
                    />
                    <input
                        id='status'
                        type='checkbox'
                        checked={newNote.important}
                        name='status'
                        onChange={handleNoteChange}
                        className='form-check-input me-2'
                    />
                    <label htmlFor="status" className="form-label mb-1">Important</label>
                </div>
                <button
                    type='submit'
                    className='btn btn-primary'
                >Save</button>
            </form>
        </>
    )
}

export default Notes
