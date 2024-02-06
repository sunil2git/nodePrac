// serviceB.js
const express = require('express')
const consul = require('consul')()

const app = express()
const port = 4000

app.get('/', (req, res) => {
  // Use Consul to discover Service A
  consul.catalog.service.nodes('serviceA', (err, nodes) => {
    if (err) throw err

    // For simplicity, we'll use the first node found (you might want to implement load balancing)
    const serviceAEndpoint = `http://${nodes[0].Address}:${nodes[0].ServicePort}/`

    // Make a request to Service A
    res.send(`Calling Service A: ${serviceAEndpoint}`)
  })
})

app.listen(port, () => {
  console.log(`Service B listening on port ${port}`)
})
