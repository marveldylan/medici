const { Shop } = require('../models')

const getShops = async (req, res) => {
    try {
        const shops = await Shop.find()
        return res.status(200).json({ shops })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getShops
}