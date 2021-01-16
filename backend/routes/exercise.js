const express = require("express")
const router = express.Router()

const Exercises = require("../models/exercise")

router.get("/", (req, res) => {
    Exercises.find()
        .then(result => res.json(result))
        .catch(() => res.json("Couldn't find exercises"))
})

router.get("/:id", (req, res) => {
    Exercises.findById(req.params.id)
        .then(result => res.json(result))
        .catch(() => res.json("Couldn't find exercise"))
})

router.post("/add", (req, res) => {
    const {username, duration, date, description} = req.body
    const exercise = new Exercises({
        username: username,
        description:  description,
        duration: Number(duration),
        date: Date(date)
    })
    exercise.save()
        .then(() => res.json("Exercise added succesfully"))
        .catch((err) => res.json(err.message))
})

router.put("/:id", (req, res) => {
    const {username, duration, date, description} = req.body
    Exercises.findOneAndUpdate({_id: req.params.id},
        {$set:
            {
                username: username,
                description: description,
                duration: Number(duration),
                date: Date(date)
            }
        }
    ).then(() => res.json("Updated succesfully"))
     .catch(() => res.json("Couldn't update"))
})

router.delete("/:id", (req, res) => {
    Exercises.findByIdAndDelete(req.params.id)
        .then(() => res.json("Deleted succesfully"))
        .catch(() => res.json("Couldn't find specified exercise"))
})

module.exports = router