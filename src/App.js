import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Courses from './components/Courses'
import Notes from './components/Notes'
import { fetchCourses } from './services/courses'
import { fetchNotes, createNote, updateNote } from './services/notes'

const initCourses = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }
]
const initNotes = [
    {id: 1, content: 'Note1', important: false}
]

const App = () => {
    const [courses, setCourses] = useState(initCourses)
    const [notes, setNotes] = useState(initNotes)

    useEffect(() => {
        const init = async () => {
            const courses = await fetchCourses()
            const notes = await fetchNotes()
            setCourses(courses)
            setNotes(notes)
        }; init()
    }, [])

    const handleCreateNote = async (note) => {
        await createNote(note)
        const notes = await fetchNotes()
        setNotes(notes)
    }

    const handleUpdateNote = async (note) => {
        await updateNote(note)
        const notes = await fetchNotes()
        setNotes(notes)
    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <Courses courses={courses} />
                <Notes
                    notes={notes}
                    handleCreateNote={handleCreateNote}
                    handleUpdateNote={handleUpdateNote}
                />
            </div>
        </div>
    )
}

export default App
