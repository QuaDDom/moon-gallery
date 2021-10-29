import axios from "axios";
import './Form.scss'
import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import particlesConfig from "../config/particlesform.config";
import Input from "../components/Input";

export default function Form() {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);

    const handleChange = (e)=>{
        if(e.target.name === 'title'){
            setTitle(e.target.value);
            console.log(e.target.value);
        }
        else{
            setFile(e.target.files[0]);
            console.log(e.target.files[0]);
        }
    },
        handleSubmit = async (e)=>{
            e.preventDefault();
        
            const formData = new FormData();
            formData.append("file", file);
            formData.append("title", title);
        
            const res = await axios.post("/api/images/upload", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              }
            });
  
    
            console.log(res);

    }

    return (
        <>
        <ParticlesBackground params={particlesConfig}/>
        <div className="containerForm">
            <div className="form">
                <h2 className='title'>Upload an Image</h2>
                <form onSubmit={handleSubmit}>
                    <Input type='text' label='Title' handle={handleChange} name="title"/>
                    <input type="file" id="upload" hidden onChange={handleChange}/>
                    <label htmlFor="upload" className='uploadLabel'><i className="far fa-images"></i></label>
                    <button>Upload</button>
                </form>
            </div>
        </div>
        </>
    )
}
