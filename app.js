const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://sandra_joseph:junghoseok@ac-dayqjc3-shard-00-00.gtlcxqh.mongodb.net:27017,ac-dayqjc3-shard-00-01.gtlcxqh.mongodb.net:27017,ac-dayqjc3-shard-00-02.gtlcxqh.mongodb.net:27017/petdb?ssl=true&replicaSet=atlas-13t3ac-shard-0&authSource=admin&appName=Cluster0").then(


    ()=>{

        console.log("MongoDb connected")
    }
).catch(
    (error) =>{

        console.log(error)
    }
)

const Pet = mongoose.model("Pets", new mongoose.Schema(
    {
        bookingID: String,
            petName: String,
            petType: String,
            breed: String,
            age: String,
            weight: String,
            vaccinationStatus: String,
            ownerName: String,
            ownerPhone: String,
            ownerEmail: String,
            checkinDate: String,
            checkoutDate: String,
            kennelNum: String


    }
))
app.post("/Pet-add", async (req,res)=>{
    await Pet.create(req.body)
    res.json({"status":"success"})
})






app.listen(2000, ()=>{
    console.log("server started")
})