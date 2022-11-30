import React, { useState,useEffect } from 'react';
import './styles/uploadDescription.css'
import {HiArrowCircleRight} from "react-icons/hi"
import axios from 'axios';
const UploadDescription = () =>{
    const [components,setComponents] = useState()
    const [description,setDescription] = useState()
    const [data,setData] = useState()
    const handleSubmit = (event) =>{
        event.preventDefault();
        const uploadDescription = {
            description : description,
            components : components
        }
        axios.post('/uploaddescription',uploadDescription).then(
            (res) =>{res.json(uploadDescription)}
        )
    }
    useEffect(() =>{
        fetch("/uploaddescription").then(
            res => res.text()
        ).then(
            data => {
                setData(data)
                console.log(data)
                // setSuccess(true)
            }
        )
    }, [])
    return(
        <>
        <div className = "uploadDescription">
            <form method="POST" action="/uploaddescription" onSubmit={handleSubmit}>

            <div className = "uploadDescription-header">
            <h2>
                Enter main content : 
                {/* <h5>&#123; Ex. header, footer,background colors,etc. &#125;</h5> */}
            </h2>
            </div>
            
            <textarea value={components}
            className="uploadcomp"
            placeholder="Enter the components"
            onChange={(e)=>{setComponents(e.target.value)}}></textarea>
            <div className = "uploadDescription-header">
            <h2>
                Enter the components needed for website : 
                <h5>&#123; Ex. header, footer,background colors,etc. &#125;</h5>
            </h2>
            </div>
            <textarea value={description}
            className="uploadDesc"
            placeholder="Enter the description"
            onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            
            <label>
            <div className='submitbtn1'>
            <input type="submit" value="submit" className='submit-hi' />
            <HiArrowCircleRight className='submit-svg'size={20}/>
            </div>
            </label>
            </form>
        </div>
        </>
    )
}

export default UploadDescription;