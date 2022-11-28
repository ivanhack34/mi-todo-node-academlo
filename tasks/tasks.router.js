//? En este archivo vamos a tener las rutas y sus respectivos verbos

const router = require('express').Router()

//! const express = requiere('express')
//! const router = express.Router()

const taskServices = require('./tasks.services')

router.get('/todo', taskServices.getAllTodos)
router.post('/todo', taskServices.postTodo)

router.get('/todo/:id', taskServices.getTodoById)

module.exports = router


