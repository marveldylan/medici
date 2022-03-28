const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Shop = new Schema(
    {
        name: { type: String, required: true },
        profile_image: { type: String, required: true },
        cover_image: { type: String, required: false },
        description: { type: String, required: true },
        rank: { type: Number, required: true },
        reviews: [{ type: Schema.Types.ObjectId, ref: 'reviews'}],
        nfts: [{ type: Schema.Types.ObjectId, ref: 'nfts'}]

    },
    { timestamps: true },
)

module.exports = Shop
// module.exports = mongoose.model('shops', Shop)