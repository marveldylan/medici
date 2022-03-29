const { Router } = require('express');
const router = Router();
const shopController = require('../controllers/Shop')
const reviewController = require('../controllers/Review')
const nftController = require('../controllers/NFT')

// shops read route:
router.get('/shops', shopController.getShops)

// reviews create and read routes:
router.post('/shops/reviews/:id', reviewController.createReview)
router.get('/shops/reviews/:id', reviewController.getReviews)

// nfts create, read, update, delete routes:
router.post('/shops/nfts', nftController.createNFT)
router.get('/shops/nfts', nftController.getNFTs)
router.put('/shops/nfts', nftController.updateNFT)
router.delete('/shops/nfts', nftController.deleteNFT)

module.exports = router;