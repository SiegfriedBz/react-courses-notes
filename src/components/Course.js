import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

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
