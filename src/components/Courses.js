import Course from './Course'

const Courses = ({courses}) => {
    return(
        <>
            <h1>Courses</h1>
            {courses && courses.map(course => {
                return  <Course key={course.id} course={course}/>
            })
            }
        </>
    )
}

export default Courses
