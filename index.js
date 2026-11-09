//basic syntax of express js
const express=require('express')
require('dotenv').config()
//import express from "express"//style 2 common js
const app=express()

const port=3000//computer have many ports
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/twitter',(req,res)=>{
    res.send('deveshx')
})

app.get('/login',(req,res)=>{
    res.send('<h3>please login at site</h3>')
})
app.listen(process.env.PORT,()=>{
    console.log('Example app on port ${port}')

})





