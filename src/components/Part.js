const Part = ({part}) => {
    const { name, exercises } = part

    return(
        <p>
            {name} {exercises}
        </p>
    )
}

export default Part
