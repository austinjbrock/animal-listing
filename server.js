const express = require('express')

const app = express()


app.get("/", (req,res)=>{
  res.send('Welcome to the Homepage')  
})

app.get ("/admin",(req,res)=>{
  res.send('Welcome Admin')
} )


app.listen(3000)