import { useState } from "react";
import Gallery from "../components/Gallery";
import './Home.scss'

export default function Home() {
    const [loading, setLoading] = useState(false);
    return (
        <>
        <div className="containerHome">
            <div className="titleBox">
                {
                    loading || <h2 className='welcome'>Welcome to the <span>Moon Gallery</span></h2>
                }
            </div>
            <Gallery loading={loading} setLoading={setLoading}/>
        </div>
        </>
    )
}
