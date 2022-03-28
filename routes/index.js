const { Router } = require('express');
const router = Router();
const shopController = require('../controllers/Shop')
const reviewController = require('../controllers/Review')
const nftController = require('../controllers/NFT')

// router.get('/shops', shopController.getShops)

// router.post('shops/reviews/:id', reviewController.createReview)
// router.get('shops/reviews/:id', reviewController.getReviews)

// router.post('shops/nfts/:id', nftController.createNFT)
// router.get('shops/nfts/:id', nftController.getNFTs)
// router.update('shops/nfts/:id', nftController.updateNFT)
// router.delete('shops/nfts/:id', nftController.deleteNFT)