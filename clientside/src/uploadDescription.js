import React, { useState } from 'react';
import './styles/uploadDescription.css'
import {HiArrowCircleRight} from "react-icons/hi"
import axios from 'axios';

const UploadDescription = () => {
    const [data,setdata] = useState('')
    const [description,setDescription] = useState('')
    const [active,setActive] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        // const uploadDescription = {
        //     description: description,
        //     components: components
        // }
        
        setActive(current=>!current)
        try {
            await axios.post('/uploaddescription', {description}, {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data)
            })
        } catch(e) {
            console.log(e)
        }

        try {
            await axios.get('/uploaddescription').then(
                res=>{
                    console.log(res.data)
                    setdata(res.data)
                }
            )
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="uploadDescription">
            <form onSubmit={handleSubmit}>
                <div className="uploadDescription-header">
                    <h2>Enter the components needed for website:</h2>
                </div>
                
                <textarea
                    value={description}
                    className="uploadDesc"
                    placeholder="Enter the description"
                    onChange={(e) => {setDescription(e.target.value)}}
                />
                <label>
                    <div className="submitbtn1">
                        <button type="submit" className='submit-hi'>Submit</button>
                        <HiArrowCircleRight className='submit-svg' size={20} />
                    </div>
                </label>

                <textarea
                className={active ? 'output':'output1'}
                value={data}

                />
            </form>
        </div>
    )
}

export default UploadDescription;
