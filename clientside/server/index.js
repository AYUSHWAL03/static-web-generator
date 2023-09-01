const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors');
const routesUrl = require('./router/routes');

require('dotenv').config();
// const axios = require("axios");


mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Data base is connected!!"));
app.use(cors());
app.use(express.json());
app.use('/app',routesUrl)





// app.use('/',(req,res)=>{
//     res.send('bhadwe tu server pr hai');
// })
app.listen(port,()=>{
   console.log(`server running on port http://localhost:${port}`)}  
    );
    