// const express = require('express')
// const app = express()
const port = 3000

// // Define a route for the root path
// app.get('/', (req, res) => {
//   res.send('Hello, Express!')
// })

// // Start the server and listen on port 3000
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`)
// })

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello from server')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
  //res.send('hello from server')
})
