const Note = ({note}) => {
    const { content, important } = note

    const importantBadge = () => {
        return important ? <span className="badge text-bg-warning">important</span> : ''
    }

    return(
        <li>
            {content} { importantBadge()}
        </li>
    )
}

export default Note
