// 2.Implement a REST API for a ToDo List:
// Create a RESTful API using Express for a ToDo list. Implement endpoints for creating, updating, deleting, and retrieving
// ToDo items.

const express = require('express')
const app = express()
const port = 3001

const bodyParser = require('body-parser')
// Middleware to parse JSON requests
const todos = []

app.use(bodyParser.json())
// Create a new ToDo item
app.post('/todo', (req, res) => {
  const body = req.body

  let task = { id: todos.length + 1, task: body.task }

  todos.push(task)
  res.status(201).json(todos)
})

app.put('/todo', (req, res) => {
  const body = req.body

  console.log('\n Put body :', body)

  for (let index = 0; index < array.length; index++) {
    const element = array[index]
  }

  //todos.push(task)
  res.status(201).json(todos)
})

app.listen(port, () => {
  console.log(`ToDo server is running on port: ${port}`)
})
