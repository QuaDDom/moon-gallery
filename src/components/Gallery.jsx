import { useEffect, useRef, useState } from "react"
import './Gallery.scss'
import Image from "./Image";
import Loader from './Loader'
import Aos from 'aos'

export default function Gallery({loading, setLoading}) {
    const [images, setImages] = useState(null);
    const [changeSpan, setChangeSpan] = useState(1);
    const image = useRef(null);

    useEffect(()=>{
        setLoading(true)
        Aos.init({duration: 500})
        fetch('/api/images')
        .then((res)=> res.json())
        .then((data)=> {
            setImages(data);
            setTimeout(()=> setLoading(false),[1000]);
            })
    }, [setLoading])

    const handleSpan = ()=>{
        images.forEach(()=>{
            if(image.current.clientWidth >= 100){
                setChangeSpan(2)
            }
            else{
                setChangeSpan(1)
            }
        })
        return changeSpan
    }

    return (
        <>
        {
        loading && <Loader/>
        }
        <div className='gallery'>
            {
            images &&
            images.map((el)=>
            <Image
                url={el.url}
                id={el._id}
                key={el._id}
                handleSpan={handleSpan}
                reference={image}
            />
            )}
        </div>
        </>
    )
}
