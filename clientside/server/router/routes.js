const express = require('express')
const router = express.Router()
const signupTempcopy = require('../models/signupmodel');
router.post('/login',(req,res)=>{
    const signupUser = new signupTempcopy({
        userName : req.body.user,
        Password : req.body.pwd
    })
    signupUser.save().then(data =>{
        res.json(data);
    })
    .catch(err=>{
        res.json(err);
    })
})

module.exports = router;