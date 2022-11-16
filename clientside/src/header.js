import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'tachyons';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const Header = () =>{
    return(
        <div>
            <div className='tc w-100 container'>
            <ul>
                <li>
                    <Link to="/login" className='effect'>Login</Link>
                </li>
                <li>
                    <Link to="/uploadimage" className='effect'>Upload image</Link>
                </li>
                <li>
                    <Link to="/uploaddescription" className='effect'>Add Description</Link>
                </li>
                <li>
                    <Link to="/" className='effect'>Home</Link>
                </li>
                
                    <p className='effect1'></p>
                
            </ul>
            </div>
        </div>
    )
}

export default Header;