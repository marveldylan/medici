const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        name: { type: String, required: true },
        rating: { type: String, required: true},
        content: { type: String, required: true},
        shop_id: { type: Schema.Types.ObjectId, ref: 'shop_id' }
    },
    { timestamps: true },
)

module.exports = Review
