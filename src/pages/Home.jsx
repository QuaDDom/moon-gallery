import Gallery from "../components/Gallery";
import './Home.scss'

export default function Home() {
    return (
        <>
        <div className="containerHome">
            <div className="titleBox">
                <h2 className='welcome'>Welcome to the <span>Moon Gallery</span></h2>
            </div>
            <Gallery/>
        </div>
        </>
    )
}
