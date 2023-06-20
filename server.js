const {mongoClient, MongoClient} = require("mongodb")
const express = require('express')
//global DB variable  
let db;


//Paused at 54:14
//


const app = express()
app.set("view engine", "ejs")
app.set('views', "./views")
app.use(express.static("public"))


app.get("/", async (req,res)=>{
    const allAnimals = await db.collection('animals').find().toArray()

  res.render('home', {allAnimals})
})

app.get ("/admin",(req,res)=>{
  res.render("admin") 
})

app.get("/api/animals", async(req,res)=>{
  const allAnimals = await db.collection('animals').find().toArray()
  res.json(allAnimals)
})



async function startServer(){
  const client = new MongoClient("mongodb://root:root@localhost:27017/AnimalMernApp?&authSource=admin"
  )

client.connect()

db = client.db()

app.listen(3000)

}


startServer()
