import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Header from './header';
import MainContent from './mainContent';
import Login from './login';
import UploadImage from './uploadimage';
import UploadDescription from './uploadDescription';
<<<<<<< HEAD
import SignIn from './signIn';
=======
import Signin from './signin';
>>>>>>> d36973480f42e3763975247f88b5180eb2cdab51


const HomePage = () =>{

   

    return(
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<MainContent/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signIn' element={<SignIn/>}/>

                <Route path='/uploadimage' element={<UploadImage/>}/>
                <Route path='/uploaddescription' element={<UploadDescription/>}/>
                <Route path='/signin' element={<Signin/>}/>
            </Routes>
        </div>
    )
}

export default HomePage;