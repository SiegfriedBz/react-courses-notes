import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Courses from './components/Courses'
import Notes from './components/Notes'

const App = () => {
    const [courses, setCourses] = useState([
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
    ])
    const [notes, setNotes] = useState([
        {id: 1, content: 'Note1', important: false},
    ])

    useEffect(() => {
        const init = async () => {
            let response = await fetch(" http://localhost:3001/courses")
            const courses = await response.json()
            response = await fetch(" http://localhost:3001/notes")
            const notes = await response.json()
            setCourses(courses)
            setNotes(notes)
        }; init()
    }, [])

    return (
        <>
            <Navbar />
            <div className='container'>
                <Courses courses={courses} />
                <Notes notes={notes} setNotes={setNotes} />
            </div>
        </>
    )
}

export default App
