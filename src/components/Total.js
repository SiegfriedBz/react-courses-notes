const Total = ({data}) => {
    const sum = data.reduce((acc, curr) => {
        return acc + curr.exercises
    }, 0)

    console.log(Object.keys(sum))

    return <p>Number of exercises {sum}</p>
}
export default Total
