//? dependencia de express
const express = require('express')

//? Initial configs

const port = 9000
const app = expres()
//?Habilitar recibir formato JSON
app.use(express.json())

const todoDB = []
let id = 1

app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    })
})

//? /todo /todo/:id

app.get('/todo', (req, res) =>{
    
})


app.listen(port, () =>{
    console.log(`Server started at port ${port}`)
})