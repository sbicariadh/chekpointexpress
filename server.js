const express = require('express')
const date = require('./Middelweare/date')
const app = express()


const port = 5000

app.get('/get',(req,res)=>{
    res.send('you did well,, sa77it')
})

app.use('/static',express.static(__dirname + '/public'))


app.get('/homepage',date,(req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/contactpage',(req,res)=>{
    res.sendFile(__dirname + '/public/produit.html')
})




app.listen(port,err=>{
    err? console.log(err):console.log(` connecté bravo, fel port  ${port}`)
})