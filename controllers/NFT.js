const { default: mongoose } = require('mongoose')
const { NFT } = require('../models')

const createNFT = async (req, res) => {
    console.log(req.body)
    try {
        const nft = await new NFT(req.body)
        await nft.save()
        return res.status(201).json({ nft }); //
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getNFTs = async (req, res) => {
    try {
        const nfts = await NFT.find()
        return res.status(200).json({ nfts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getNftById = async (req, res) => {
    try {
        const { id } = req.params;
        const nft = await NFT.findById(id)
        if (nft) {
            return res.status(200).json({ nft });
        }
        return res.status(404).send('NFT with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




const updateNFT = async (req, res) => {
    try {
        const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(nft)
    } catch (error) {
        res.send(error.message)
    }
}

const deleteNFT = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await NFT.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("NFT deleted");
        }
        throw new Error("Whoops! NFT not found!");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    createNFT,
    getNFTs,
    getNftById,
    updateNFT,
    deleteNFT
}