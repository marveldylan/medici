const { Router } = require('express');
const router = Router();
const shopController = require('../controllers/Shop')
const reviewController = require('../controllers/Review')
const nftController = require('../controllers/NFT')

// shops read route:
router.get('/shops', shopController.getShops)

// reviews create and read routes:
router.post('/reviews', reviewController.createReview)
router.get('/reviews', reviewController.getReviews)

// nfts create, read, update, delete routes:
router.post('/nfts', nftController.createNFT)
router.get('/nfts', nftController.getNFTs)
router.get('/nfts/:id', nftController.getNftById)
router.put('/nfts/:id', nftController.updateNFT)
router.delete('/nfts/:id', nftController.deleteNFT)

module.exports = router;