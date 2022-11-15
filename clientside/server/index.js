const express = require('express');
const app = express();
const port = 3001;
app.use('/',(req,res)=>{
    res.send('bhadwe tu server pr hai');
})
app.listen(port,()=>{
   console.log(`server running on port http://localhost:${port}`)}  
    );
    