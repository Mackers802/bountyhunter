const mongoose = require("mongoose")
const Schema = mongoose.Schema

const trackerSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        // unique: true
    },
    lastName: {
        type: String,
        required: true,
        // unique: true
    },
    bountyAmount: {
        type: Number,
        required: true
    }
    ,
    type: {
        type: String,
        enumValues: ["Jedi", "Sith"]
    }

})


module.exports = mongoose.model("BountyTracker", trackerSchema)
