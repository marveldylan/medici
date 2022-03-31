const { Owner } = require('../models')


const getOwnerById = async (req, res) => {
    try {
        const { id } = req.params;
        const owner = await Owner.findById(id)
        if (owner) {
            return res.status(200).json({ shop });
        }
        return res.status(404).send('owner with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getOwnerById
}