const { Shop } = require('../models')

const getShops = async (req, res) => {
    try {
        const shops = await Shop.find()
        return res.status(200).json({ shops })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getShopById = async (req, res) => {
    try {
        const { id } = req.params;
        const shop = await Shop.findById(id)
        if (shop) {
            return res.status(200).json({ shop });
        }
        return res.status(404).send('shop with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getShops,
    getShopById
}