const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        name: { type: String, required: true },
        rating: { type: String, required: true},
        content: { type: String, required: true}
    },
    { timestamps: true },
)

module.exports = Review
// module.exports = mongoose.model('reviews', Review)