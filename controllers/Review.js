const Review = require('../models/review')

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createReview = async (req, res) => {
    try {
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({ review });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getReviews,
    createReview
}