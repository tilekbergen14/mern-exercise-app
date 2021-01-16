const express = require("express")
const app = express()
const mongoose = require("mongoose")
const users = require("./routes/user")
const exercises =  require("./routes/exercise")
const cors = require("cors")

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use("/users", users)
app.use("/exercises", exercises)

mongoose.connect("mongodb://localhost/mernapp", {useNewUrlParser: true,useCreateIndex:true, useUnifiedTopology:true, useFindAndModify: false })

app.get("/", (req, res) => {
    console.log("Hello express")
    res.send("Hello")
})

app.listen(port, console.log(`Listening to port ${port}`))