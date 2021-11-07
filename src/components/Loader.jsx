import { PropagateLoader } from "react-spinners"
import { useMediaQuery } from "react-responsive";
import './Loader.scss'

export default function Loader() {
    const sizeLoader = useMediaQuery({
        query: '(max-width: 768px)'
    })
    return (
        <div className='loader'>
            <PropagateLoader
            size={sizeLoader ? 20 : 25}
            color={'#ff9100'}
            style={sizeLoader && {height: '200px', width:'200px'}}
            />
        </div>
    )
}
