import { useEffect, useState } from "react"
import './Detail.scss'
import { useParams } from "react-router"


export default function Detail() {
    const [image, setImage] = useState({
        title: '',
        url: '',
        _id: ''
    })

    const params = useParams();

    useEffect(()=>{
        fetch(`/api/images/${params.id}`)
        .then((res)=> res.json())
        .then((data)=> setImage(data));
    }, [params.id])

    return (
        <div className='imageDetail'>
            <h2 className='imageTitle'>{image.title}</h2>
            <img src={image.url} alt=""  className='image'/>
            <p className='imageId'>{image._id}</p>
            <button className='btnDownload'><a href={image.url}>Download</a></button>
        </div>
    )
}
