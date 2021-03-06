import './Image.scss'
import { useHistory } from 'react-router'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function Image({url, id, handleSpan, reference}) {

    const image = reference;

    useEffect(()=>{
        Aos.init({duration: 500})
        const span = handleSpan();
        if(span === 2){
            image.current.style.gridColumn = 'span 2'
        }
        console.log(span);
    },[image, handleSpan])

    const history = useHistory();

    const handleClick = ()=>{
        history.push(`/image-detail/${id}`)
    }


    return (
        <div data-aos="zoom-in" className='containerImage' onClick={handleClick} ref={image}>
            <img src={url} alt="" className='oneImage'/>
        </div>
    )
}
