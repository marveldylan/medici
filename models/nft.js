const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NFT = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = NFT
// module.exports = mongoose.model('nfts', NFT)