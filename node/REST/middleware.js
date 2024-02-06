const express = require('express')
const app = express()
const port = 3002

const apiStop = true
//middleware check
app.use((req, res, next) => {
  if (apiStop == true) {
    const errObject = {
      apiStatus: 'NOT_AVAILABLE',
      msg: 'This functionality is stopped for now',
    }
    res.status(401).send(errObject)
  } else {
    next()
  }
})

app.get('/data', (req, res) => {
  console.log('GET API call :')
  res.send('hello call for get api :')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
