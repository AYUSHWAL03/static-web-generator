import React ,{useState,useEffect}from 'react';

const UploadImage = () =>{
    const [data,setData] = useState([{}]);

    useEffect(() =>{
        fetch("/uploadimage").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])      
    return(
        <>
            <div >
            This is the upload image section
            </div>
        </>
    )
}

export default UploadImage;