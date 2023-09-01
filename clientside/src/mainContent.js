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
                How to Create Your Own Website images
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
                <br/>
                <div className='head-steps-two'>
                How to Create Your Own Website by giving description
                </div>
                <br/>
                <p className='adddescription'>
                Step 1: Include a description of the layout of your website.
                </p>
                <br/>
                <p className='adddescription'>
                    Step 2: Click on next after adding your description.
                </p>
                <br/>
                <p className="adddescription">
                    Step 3: Your code will be produced automatically after you click "next."
                </p>
                <br/>
                <p className="adddescription">
                Step 4: At this point, you can paste your code into any browser.
                </p>
                <br/>
                <Link to="/uploaddescription" className='gotoSectiontwo'>Go to the section<MdPlayArrow className='selected-svg'/></Link>
            </div>
        </>
    )
}

export default MainContent;