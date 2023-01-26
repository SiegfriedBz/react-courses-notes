import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const obj = {
    id: 1,
    name: 'Half Stack application development',
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
    }
]
}

const Course = ({course}) => {
    const {name, parts} = course

    return(
        <div>
            <div>
                <Header name={name} />
                <Content parts={parts}/>
                <Total parts={parts} />
            </div>
        </div>
    )
}

export default Course