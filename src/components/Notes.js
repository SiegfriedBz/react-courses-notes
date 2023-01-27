import { useState  } from "react";
import Note from "./Note";
import clsx from 'clsx';

const initNote = {content: '', important: false}

const Notes = ({notes, handleCreateNote, handleUpdateNote}) => {
    const [newNote, setNewNote] = useState(initNote)
    const [showAll, setShowAll] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleCreateNote(newNote)
        setNewNote(initNote)
    }

    const handleChange = (e) => {
        e.target.name === 'status' ?
            setNewNote({...newNote, important: !newNote.important})
            : setNewNote({...newNote, [e.target.name]: e.target.value})
    }

    const notesToShow = showAll ?
        notes
        : notes.filter(note => note.important)

    const showBtnClass = clsx(
        'btn btn-sm mb-3', {
            'btn-outline-primary': !showAll,
            'btn-outline-warning': showAll
        }
    )

    return(
        <>
            <h1>Notes</h1>
            <button
                onClick={()=>setShowAll(!showAll)}
                className={showBtnClass}
            >
                Show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {notesToShow.map((note) => {
                    return  <Note key={note.id} note={note} handleUpdateNote={handleUpdateNote} />
                })}
            </ul>

            <h3>Create note</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        id='content'
                        type='text'
                        name='content'
                        placeholder='new note...'
                        value={newNote.content}
                        onChange={handleChange}
                        className='form-control mb-1'
                    />
                    <input
                        id='status'
                        type='checkbox'
                        checked={newNote.important}
                        name='status'
                        onChange={handleChange}
                        className='form-check-input me-2'
                    />
                    <label htmlFor="status" className="form-label mb-1">Important</label>
                </div>
                <button
                    type='submit'
                    className='btn btn-sm btn-primary'
                >Save</button>
            </form>
        </>
    )
}

export default Notes
