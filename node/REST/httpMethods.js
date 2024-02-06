const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  // Parse the URL to get the pathname and query parameters
  const parsedUrl = url.parse(req.url)
  const pathname = parsedUrl.pathname
  const query = querystring.parse(parsedUrl.query)

  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'application/json' })

  // Handle different HTTP methods
  if (req.method === 'GET') {
    // Handle GET request
    res.end(JSON.stringify({ method: 'GET', pathname, query }))
  } else if (req.method === 'POST') {
    // Handle POST request
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      const postData = querystring.parse(body)
      res.end(JSON.stringify({ method: 'POST', pathname, query, postData }))
    })
  } else if (req.method === 'PUT') {
    // Handle PUT request
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      const putData = querystring.parse(body)
      res.end(JSON.stringify({ method: 'PUT', pathname, query, putData }))
    })
  } else {
    // Handle other HTTP methods
    res.writeHead(405, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Method Not Allowed' }))
  }
})

const port = 3001

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}/`)
})
