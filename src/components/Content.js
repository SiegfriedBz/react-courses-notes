import Part from './Part'

const Content = ({data}) => {
    return(
        <div>
            {data.map((elem) => {
                return <Part key={elem.id} elem={elem}/>
            })}
        </div>
    )
}

export default Content