import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'tachyons';
import { Link } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa'
import './styles/navbar.css';

const Header = () =>{
    return(
        <div>
            <div className='tc w-100 container'>
            <ul>
                <li>
                    <Link to="/login" className='effect'>Login <FaUserCircle className=' w1 h1 ml1'/></Link>
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
                
                    
                
            </ul>
            </div>
        </div>
    )
}

export default Header;