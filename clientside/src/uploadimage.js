import React ,{useState,useEffect}from 'react';
import "./styles/uploadimage.css"
import "tachyons"
import {BiCloudUpload} from "react-icons/bi"
import {HiArrowCircleRight} from "react-icons/hi"
import axios from 'axios';
const UploadImage = () =>{
    const [data,setData] = useState([{}]);
    const [selectedImage,setSelectedImage]= useState();
    const [success,setSuccess]= useState(false)


    useEffect(() =>{
        fetch("/uploadimage").then(
            res => res.text()
        ).then(
            data => {
                setData(data)
                console.log(data)
                setSuccess(true)
            }
        )
    }, [])
        // const handleChanges = (e) =>{
        //     e.preventDefault()
        //     axios.post("/uploadimage").then
        // }
    return(
        <>
        {success ?(
             <div >
             <form  encType='multipart/form-data'>
                <label >
                <div className='upload'>

                    <BiCloudUpload size={40}/>
                </div>
                 <input type="file" 
                 name="imageUpload"
                 value={selectedImage}
                 onChange = {(e)=>{setSelectedImage(e.target.files[0])}}
                 accept="image/x-png,image/jpeg,image/jpg"
                 className='custom-file-input tc' />
                 </label>
            <label>
            <div className='submitbtn'>
            <input type="submit" value="submit" className='submit-hi' />
            <HiArrowCircleRight className='submit-svg'size={20}/>
            </div>
            </label>
             </form>
             
                <div className='imageInfo'>
                <h2 className='status'>Status:
                <div className='status-server'>

                </div>
                </h2>
                <br/>
                <br/>
                <h2 className='status'>Clarity:
                <div className='status-server'>

                </div>
                </h2>
                <br/>
                <br/>
                <h2 className='status'>Size :
                <div className='status-server'>
                
                </div>
                </h2>
                <br/>
                
                </div>
             </div>
        ):(
            <div>
                connection Error 
            </div>
        )}
           
        </>
    )
}

export default UploadImage;