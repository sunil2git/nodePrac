const express = require('express')
const app = express()
const port = 3002
const getUrl = '/getMethod'

app.get(getUrl,(res,req)=>{
    console.log("\n getting hit for get method")
    res.send(` getting for on url: ${port}/${getUrl}`)
})

app.listen(port, () =>{
    console.log(`server started at port: ${port}`)
})