//? dependencia de express
const express = require('express')

//? Initial configs

const port = 9000
const app = express()
//?Habilitar recibir formato JSON
app.use(express.json())

const todoDB = []
//? TODO
// {
//     id:5,
//     title: 'Practicar express',
//     description: 'Ver videos de apoyo y crear otra API',
//     is_completed: false
// }
let id = 0

app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    })
})



//? /todo /todo/:id
//? Rutas de TODO's
app.get('/todo', (req, res) =>{
    res.status(200).json(todoDB)
})

app.post('/todo', (req, res) => {
    const {title, description} = req.body

    if(title && description){
        const newTodo = {
            id: id++,
            title,
            description,
            is_completed: false
        }
        todoDB.push(newTodo)
        res.status(200).json(newTodo)
    } else{
        res.status(400).json({message: 'Invalid data'})
    }

})

//Buscaremos el valor por si id
app.get('/todo/:id', (req, res)=> {
    const id = req.params.id;

    const todo = todoDB.find(item => item.id == id)

    if(todo){
        res.status(200).json(todo)
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }


})

app.listen(port, () =>{
    console.log(`Server started at port ${port}`)
})