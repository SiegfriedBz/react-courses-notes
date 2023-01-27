const baseURL = "http://localhost:3001"

const fetchNotes = async () => {
    try {
        const response = await fetch(`${baseURL}/notes`)
        return await response.json()
    }
    catch (err) {
        console.log(err)
    }
}

const createNote = async (note) => {
    try {
        await fetch(`${baseURL}/notes`, {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}

const updateNote = async (note) => {
    try {
        await fetch(`${baseURL}/notes/${note.id}`,{
            method: "PUT",
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    fetchNotes,
    createNote,
    updateNote
}
