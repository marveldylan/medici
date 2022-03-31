const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Owner = new Schema(
    {
        name: { type: String, required: true },
        profile_image: { type: String, required: true },
        
    },
    { timestamps: true },
)

module.exports = Owner