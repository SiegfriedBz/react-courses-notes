const Part = ({elem}) => {
    const { part, exercises } = elem

    return(
        <p>
            {part} {exercises}
        </p>
    )
}

export default Part
