const express = require('express')

const route = express.Router();

route
    .post('/login', (req, res, next)=>{
        res.render('home')
    })
    .get('/login',(req, res, next)=>{
        res.render('login')
    })

module.exports = route

 