require('dotenv').config()

const express = require('express')
const marfaRute = require('./routes/marfa')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next()
})

app.use('/api/marfa', marfaRute)


// listen for requests
app.listen(process.env.PORT , ()=>{
    console.log(`Listenint on port ${process.env.PORT}`);
})
