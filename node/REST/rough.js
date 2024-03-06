// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   console.log('GET API called')
//   res.send('hello world')
// })

// app.listen(port, () => {
//   console.log(`server started on  post :${port}`)
// })

// const { contentType } = require('express/lib/response');
// const http = require('http')

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'contentType':'Text/plain'})
//     res.send('hello world')
// })

// const port = 3000
// server.listen(port, () =>
// {
//     console.log(`server start at port: ${port}`)
// })

const http = require('http')
const server = http.createServer((req, res) => {
  res.send('hello world')
})

const port = 3001
server.listen(port, () => {
  console.log(`server started at port: ${port}`)
})
