const Total = ({parts}) => {
    const sum = parts.reduce((acc, curr) => {
        return acc + curr.exercises
    }, 0)

    return <p>Number of exercises {sum}</p>
}
export default Total
