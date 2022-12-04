const express = require('express')
const date = require ('./midelware/Date')
const app = express()

const port = 5001

//route 
app.get('/get',(req,res)=>{
    res.send('you did first express project ')
})

// jiben les fichiers html 
app.use('/static',express.static(__dirname +'/public'))


app.get('/homePage',date,(req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/productPage',(req,res)=>{
    res.sendFile(__dirname + '/public/produit.html')
})


app.listen(port,err=>{
err? console.log(err):console.log(`you are connected to the ${port}`)
})