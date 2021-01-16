const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}
},{timestamps: true})

const Exercises = mongoose.model("exercise", schema)

module.exports = Exercises