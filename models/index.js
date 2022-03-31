const { model } = require('mongoose');
const ShopSchema = require('./shop');
const ReviewSchema = require('./review');
const NFTSchema = require('./nft');
const OwnerSchema = require('./owner');

const Shop = model('shops', ShopSchema);
const Review = model('reviews', ReviewSchema);
const Owner = model('owners', OwnerSchema);
const NFT = model('nfts', NFTSchema);

module.exports = {
    Shop,
    Review,
    Owner,
    NFT
}