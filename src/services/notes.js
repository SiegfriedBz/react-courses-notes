const URL = "http://localhost:3001"

const fetchNotes = async () => {
    const response = await fetch(`${URL}/notes`)
    return await response.json()
}

const createNote = async (note) => {
    await fetch(`${URL}/notes`, {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const updateNote = async (note) => {
    await fetch(`${URL}/notes/${note.id}`,{
        method: "PUT",
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

module.exports = {
    fetchNotes,
    createNote,
    updateNote
}
