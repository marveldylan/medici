const { default: mongoose } = require('mongoose');
const db = require('../db')
const { Shop, Review, NFT, Owner } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createShops = async () => {

    const shops = [
        { 
            name: 'BATTLEDUCKS',
            profile_image: 'https://i.imgur.com/9sPXnwg.png',
            description: `BATTLEDUCKS is a high-octane, turn-based, duck-themed card game for two players! Everyone knows that ducks are competitive creatures by nature, and we've gathered the coolest ducks around to compete in the fiery crucible that is BATTLEDUCKS!!!`,
            rank: 2
        },
        {
            name: 'robotZ',
            profile_image: 'test',
            cover_image: 'test',
            description: '. . . Blip Borg. These robotZ are ready to take control of the galaxy with their flashy style and can-do attitude! Well, that and their laser vision . . .',
            rank: 1
        },
        {
            name: 'Dull Chimp Boat Frat',
            profile_image: 'test',
            cover_image: 'test',
            description: `Just chimps smokin' stogies, sailing boats, having a dull time, ya dig?`,
            rank: 3
        }
    
    ]

    await Shop.insertMany(shops)
    console.log(shops)
    console.log("Created some shops!")
}

const createReviews = async () => {

    const battleDucks = await Shop.find({ name: 'BATTLEDUCKS'})
    const robotz = await Shop.find({ name: 'robotZ'})
    const dullChimps = await Shop.find({ name: 'Dull Chimp Boat Frat'})

    const reviews = [
        {
            name: 'Duck Boy',
            rating: 5,
            content: 'Kinda cool pretty lame',
            shop_id: battleDucks[0]._id
        },
        {
            name: 'roboLover',
            rating: 7,
            content: 'So cool',
            shop_id: robotz[0]._id
        },
        {
            name: 'Brad',
            rating: 3,
            content: 'Dull Chimps suck',
            shop_id: dullChimps[0]._id
        }
    ]
    await Review.insertMany(reviews);
    console.log('Created Reviews!');
    return reviews;
}

const createOwners = async () => {
    const battleDucks = await Shop.find({ name: 'BATTLEDUCKS'})
    const robotz = await Shop.find({ name: 'robotZ'})
    const dullChimps = await Shop.find({ name: 'Dull Chimp Boat Frat'})

    const owners = [
        {
            _id: mongoose.Types.ObjectId(77),
            name: 'Dylan Marvel',
            profile_image: 'https://media-exp1.licdn.com/dms/image/D4D03AQEaryWMxklntQ/profile-displayphoto-shrink_200_200/0/1648671159140?e=1654128000&v=beta&t=JvpwzF7aYOGA00g4jpEfjspIkSlkj_-3tImzB_YM5Gg'
        },
        {
            _id: mongoose.Types.ObjectId(battleDucks[0]._id),
            name: battleDucks[0].name,
            profile_image: battleDucks[0].profile_image
        },
        {
            _id: mongoose.Types.ObjectId(robotz[0]._id),
            name: robotz[0].name,
            profile_image: robotz[0].profile_image
        },
        {
            _id: dullChimps[0]._id,
            name: dullChimps[0].name,
            profile_image: dullChimps[0].profile_image
        },

    ]
    await Owner.create(owners);
    console.log('Created an owner!');
    return owners;
}

const createNFTs = async () => {

    const battleDucks = await Shop.find({ name: 'BATTLEDUCKS'})
    const robotz = await Shop.find({ name: 'robotZ'})
    const dullChimps = await Shop.find({ name: 'Dull Chimp Boat Frat'})

    const nfts = [
        {
            name: 'Test NFT 1',
            image: 'https://i.imgur.com/83OmhBW.png',
            price: 0.5,
            description: ' Test Description 1',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: true

        },
        {
            name: 'Test NFT 2',
            image: 'https://i.imgur.com/FPTcVj9.png',
            price: 1.5,
            description: ' Test Description 2',
            shop_id: robotz[0]._id,
            owner_id: robotz[0]._id,
            featured: true
        },
        {
            name: 'Test NFT 3',
            image: 'https://i.imgur.com/toYd9dP.png',
            price: 10,
            description: ' Test Description 3',
            shop_id: dullChimps[0]._id,
            owner_id: dullChimps[0]._id,
            featured: true
        }
    ]
    await NFT.insertMany(nfts);
    console.log('Created some NFTs with shop ids!');
    return nfts;
}


const run = async () => {
    await createShops();
    await createReviews();
    await createOwners();
    await createNFTs();
    db.close()
}


run()