const {mongoClient, MongoClient} = require("mongodb")
const express = require('express')
let db;
const app = express()
app.set("view engine", "ejs")
app.set('views', "./views")

app.get("/", async (req,res)=>{
    const allAnimals = await db.collection('animals').find().toArray()

  res.render('home', {allAnimals})
})

app.get ("/admin",(req,res)=>{
  res.send('Welcome Admin')
} )


async function start(){
  const client = new MongoClient("mongodb://root:root@localhost:27017/AnimalMernApp?&authSource=admin"
  )

client.connect()
//global DB variable  
db = client.db()

app.listen(3000)

}

start()
