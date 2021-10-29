import { PropagateLoader } from "react-spinners"
import './Loader.scss'

export default function Loader() {
    return (
        <div className='loader'>
            <PropagateLoader
            size={25}
            color={'#ff9100'}
            />
        </div>
    )
}
