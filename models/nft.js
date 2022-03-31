const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NFT = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        shop_id: { type: Schema.Types.ObjectId, ref: 'shop_id' },
        owner_id: { type: Schema.Types.ObjectId, ref: 'owner_id' },
        featured: { type: Boolean }
    },
    { timestamps: true },
)

module.exports = NFT