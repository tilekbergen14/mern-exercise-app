const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: {
        type: String, 
        required:true, 
        minLength: 3, 
        unique:true, 
        trim: true
    }
},
    {timestamps: true}
)

const Users = mongoose.model("user", schema)

module.exports = Users