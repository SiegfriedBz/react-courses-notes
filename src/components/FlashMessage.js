import { useEffect} from "react";

const FlashMessage = ({message, setMessage}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('timer')
            setMessage('')
        }, 2500)
        return () => {
            clearTimeout(timer)
        }
    }, [message])

    return(
        <>
            {message &&
            <div className='px-3 flash-success'>
                <span>{message}</span>
            </div>
            }
        </>
    )
}

export default FlashMessage
