import React from 'react';
import { Link } from 'react-router-dom';
import './styles/maincontent.css'
import {MdPlayArrow} from 'react-icons/md'
const MainContent = () =>{
    return(
        <>
            <div className="heading">
                <h1>Static Web Generator</h1>
            </div>
            <div className='steps'>
                <div className='head-steps'>
                How to Create Your Own Website
                </div>
            
                <p className='imageupload'>

                Step 1: In the image section, upload your image and then click Next.
                </p>
                <br/>
                <p className='imageupload'>
                Step 2: When you click the next button, your code will be generated automatically.
                </p>
                <br/>
                <p className='imageupload'>
                Step 3: Drag and drop the code into any browser.
                <br/>
                </p>
                <Link to="/uploadimage" className='gotoSection'>Go to the section<MdPlayArrow className='selected-svg'/></Link>
                
            </div>
        </>
    )
}

export default MainContent;