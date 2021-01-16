const express = require("express")
const Users = require("../models/user")
const router = express.Router()

router.get("/", (req, res) => {
    console.dir(req.query)
    Users.find()
        .then(result => res.json(result))
        .catch(error => res.status(404).json("Couldn't find users"))
})

router.post("/add", (req, res) => {
    let user = new Users({ 
        username: req.body.username
    })
    user.save()
        .then(() => res.json("User added succesfully!"))
        .catch(err => res.json("Could't add user"))
})

module.exports = router