const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')));

app.listen(process.env.PORT || 3030,() => {
    console.log('Servidor corriendo') 
    })

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register', (req, res) =>{
    res.sendFile(__dirname + '/views/register.html')
})

app.get('/login', (req, res) =>{
    res.sendFile(__dirname + '/views/login.html')
})

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});