const db = require('../db')
const { ShopModel, ReviewModel, NFTModel } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createNFTs = async () => {
    const nfts = [
        {
            name: 'Test NFT 1',
            image: 'https://i.imgur.com/83OmhBW.png',
            price: 0.5,
            description: ' Test Description 1'
        },
        {
            name: 'Test NFT 2',
            image: 'https://i.imgur.com/FPTcVj9.png',
            price: 1.5,
            description: ' Test Description 2'
        },
        {
            name: 'Test NFT 3',
            image: 'https://i.imgur.com/toYd9dP.png',
            price: 10,
            description: ' Test Description 3'
        }
    ]
    await NFTModel.insertMany(nfts);
    console.log('Created some NFTs!');
    return nfts;
}

const createReviews = async () => {
    const reviews = [
        {
            name: 'Test Review 1',
            rating: 5,
            content: ' Test content 1'
        },
        {
            name: 'Test Review 2',
            rating: 7,
            content: ' Test content 2'
        },
        {
            name: 'Test Review 3',
            rating: 3,
            content: ' Test content 3'
        }
    ]
    await ReviewModel.insertMany(reviews);
    console.log('Created Reviews!');
    return reviews;
}

const createShops = async (reviews, nfts) => {
    console.log(reviews)
    console.log(nfts)

    const shops = [
        { 
            name: 'BATTLEDUCKS',
            profile_image: 'https://i.imgur.com/9sPXnwg.png',
            description: `BATTLEDUCKS is a high-octane, turn-based, duck-themed card game for two players! Everyone knows that ducks are competitive creatures by nature, and we've gathered the coolest ducks around to compete in the fiery crucible that is BATTLEDUCKS!!!`,
            rank: 2,
            reviews: reviews._id,
            nfts: nfts._id
        },
        {
            name: 'robotZ',
            profile_image: 'test',
            cover_image: 'test',
            description: '. . . Blip Borg. These robotZ are ready to take control of the galaxy with their flashy style and can-do attitude! Well, that and their laser vision . . .',
            rank: 1,
            reviews: reviews._id,
            nfts: nfts._id
        },
        {
            name: 'Dull Chimp Boat Frat',
            profile_image: 'test',
            cover_image: 'test',
            description: `Just chimps smokin' stogies, sailing boats, having a dull time, ya dig?`,
            rank: 3,
            reviews: reviews._id,
            nfts: nfts._id
        }
    
    ]

    await ShopModel.insertMany(shops)
    console.log(shops)
    console.log("Created some shops!")
}


const run = async () => {
    const reviews = await createReviews();
    const nfts = await createNFTs();
    await createShops(reviews, nfts);

    db.close()
}


run()