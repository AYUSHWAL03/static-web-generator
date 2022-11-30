import axios from 'axios';
import React from 'react';
import { useRef, useState, useEffect } from "react";
// import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Login from './login';
import "./styles/login.css";

const Signin = () =>{
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    axios.get("/signin",(req,res)=>
    {
      res.render("signin")
    })

    axios.post('http://localhost:3001/app/signin', async (req,res)=>{
        try{
            const name = req.body.username;
            const Password = req.body.password;
         //    console.log(userName,Password)
     
         const userName= await Login.findOne({user:name})

        if(userName.password === Password)
        {
            res.status(201).render("homepage");
        }
        else{
            res.send("Please Enter valid username and password")
        }
     
        }
        catch(error){
            res.status(404).send("Please Enter valid username and password")
        }
     })

    return(

        <section>
         <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
         <h1> Sign In</h1>
         <form>
         <label htmlFor="username">
         Username:
         </label>
         <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        require
        />
         <label htmlFor="password">
                        Password
        </label>
        <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
        />
            <button>
                     Sign In
            </button>
            <p>
                 Need an account? <br/>
                 <span className="line">
                        {/*put router link here*/}
                        <Link to="/login" className='effect'>Sign Up</Link>
                    </span>

            </p>

         </form>
        </section>
    )

     


}

export default Signin;



// >>>>>>> d36973480f42e3763975247f88b5180eb2cdab51
