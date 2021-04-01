const express = require('express')
const app=express()

app.get('/hello',(req,res)=>{

    res.send("Hello"+ " "+ " Boys")

})

app.use('/',express.static(__dirname+"/public"))

app.listen(5555,()=>{

    console.log("Started")
})