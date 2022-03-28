const { model } = require('mongoose');
const ShopSchema = require('./shop');
const ReviewSchema = require('./review');
const NFTSchema = require('./nft');

const ShopModel = model('shops', ShopSchema);
const ReviewModel = model('reviews', ReviewSchema);
const NFTModel = model('nfts', NFTSchema);

module.exports = {
    ShopModel,
    ReviewModel,
    NFTModel
}