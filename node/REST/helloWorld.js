// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// app.listen(port, () => {
//   console.log(`server started on  post :${port}`)
// })

const http = require('http')

http.createServer(() => {
  console.log(' server started ${3001}')
}, 3001)
