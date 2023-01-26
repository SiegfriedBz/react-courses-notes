import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const data = [
      { id: 1, part: 'Fundamentals of React', exercises: 10 },
      { id: 2, part: 'Using props to pass data', exercises: 7 },
      { id: 3, part: 'State of a component', exercises: 14 },
  ]

    return (
        <div>
            <Header course={course} />
            <Content data={data}/>
            <Total data={data} />
        </div>
    )
}

export default App
