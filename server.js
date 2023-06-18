const {mongoClient, MongoClient} = require("mongodb")
const express = require('express')
//global DB variable  
let db;

//Remove comments below before restarting server -- start at 29.00

// const app = express()
// app.set("view engine", "ejs")
// app.set('views', "./views")

app.get("/", async (req,res)=>{
    const allAnimals = await db.collection('animals').find().toArray()

  res.render('home', {allAnimals})
})

app.get ("/admin",(req,res)=>{
  res.send('Welcome Admin') })


async function startServer(){
  const client = new MongoClient("mongodb://root:root@localhost:27017/AnimalMernApp?&authSource=admin"
  )

client.connect()

db = client.db()

app.listen(3000)

}


startServer()
