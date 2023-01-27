const Note = ({note, handleUpdateNote}) => {
    const { content, important } = note

    const handleToggleImportant = async () => {
        const changedNote = {...note, important: !note.important}
        await handleUpdateNote(changedNote)
    }

    const importantBadge = () => {
        return (
            important ?
                <span className="badge text-bg-warning">important</span>
                : <span className="badge text-bg-secondary">mark as important</span>
        )
    }

    return(
        <li>
            {note &&
            <>
                {content}
                <button
                    className='btn'
                    onClick={handleToggleImportant}
                >
                    {importantBadge()}
                </button>
            </>
            }
        </li>
    )
}

export default Note
