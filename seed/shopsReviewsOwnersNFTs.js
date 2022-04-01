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
            cover_image: 'https://i.imgur.com/novz82q.png',
            description: `BATTLEDUCKS is a high-octane, turn-based, duck-themed card game for two players! Everyone knows that ducks are competitive creatures by nature, and we've gathered the coolest ducks around to compete in the fiery crucible that is BATTLEDUCKS!!!`,
            rank: 1
        },
        {
            name: 'robotZ',
            profile_image: 'https://i.imgur.com/Z2s6VE8.png',
            cover_image: 'https://i.imgur.com/igf2C1a.png',
            description: '. . . Blip Borg. These robotZ are ready to take control of the galaxy with their flashy style and can-do attitude! Well, that and their laser vision . . .',
            rank: 2
        },
        {
            name: 'Dull Chimp Boat Frat',
            profile_image: 'https://i.imgur.com/CJCbpXK.png',
            description: `Just chimps smokin' stogies, sailing boats, having a dull time, ya dig?`,
            rank: 4
        },
        {
            name: 'The Shop of David',
            profile_image: 'https://i.imgur.com/exCccJM.png',
            description: `We only sell Davids here. The same picture of Dave over and over and over again. Don't ask for other pictures, alright? What, you're not happy with this masterpiece? It's like something Michelangelo carved outta stone. Da Vinci and Cellini fans can GTFO.`,
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
    const david = await Shop.find({ name: 'The Shop of David'})

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
    const david = await Shop.find({ name: 'The Shop of David'})

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
            _id: mongoose.Types.ObjectId(dullChimps[0]._id),
            name: dullChimps[0].name,
            profile_image: dullChimps[0].profile_image
        },
        {
            _id: mongoose.Types.ObjectId(david[0]._id),
            name: david[0].name,
            profile_image: david[0].profile_image
        },

    ]
    await Owner.create(owners);
    console.log('Created some owners!');
    return owners;
}

const createNFTs = async () => {

    const battleDucks = await Shop.find({ name: 'BATTLEDUCKS'})
    const david = await Shop.find({ name: 'The Shop of David'})
    const robotz = await Shop.find({ name: 'robotZ'})
    const dullChimps = await Shop.find({ name: 'Dull Chimp Boat Frat'})

    const nfts = [
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/4LZDfW1.png',
            price: 0.5,
            description: 'Angry Brown Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/i1gTDs1.png',
            price: 0.5,
            description: 'Unamused Green Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/0YZ7xqz.png',
            price: 0.5,
            description: 'Unamused Brown Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/APXgb0o.png',
            price: 0.5,
            description: '420 Mallard Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/mK2JI7f.png',
            price: 0.5,
            description: 'Cool Yellow Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/jlg4EeW.png',
            price: 0.5,
            description: 'Bat Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: true

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/a8Cm6gf.png',
            price: 0.5,
            description: 'Blue Party Hat Blue Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/hYcMda8.png',
            price: 0.5,
            description: 'Groovy White Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/y0eE9w0.png',
            price: 0.5,
            description: 'Content Green Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/4jrcAZN.png',
            price: 0.5,
            description: 'Normal Yellow Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/EJrdvyv.png',
            price: 0.5,
            description: 'Frustrated Blue Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/UgcGWfx.png',
            price: 0.5,
            description: 'Green Party Hat Gray Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/UphNRKb.png',
            price: 0.5,
            description: 'Suspicious Blue Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/JSAVHVF.png',
            price: 0.5,
            description: 'Whitey',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/Lbwrx4Z.png',
            price: 0.5,
            description: 'Greaser Gray Duck',
            shop_id: battleDucks[0]._id,
            owner_id: battleDucks[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: 'Dave being Dave',
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: 'David the Conquerer',
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: 'Dave is #1!',
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: `You don't like David I don't like You`,
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: `Yass David!`,
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: `Eww David!`,
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: true

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: `DAV`,
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: `My name's Dave`,
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: `Dave's da best`,
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/exCccJM.png',
            price: 0.5,
            description: `F*#$ Goliath`,
            shop_id: david[0]._id,
            owner_id: david[0]._id,
            featured: false

        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/1Ij2tG0.png',
            price: 1.0,
            description: 'Blue Bot',
            shop_id: robotz[0]._id,
            owner_id: robotz[0]._id,
            featured: true
        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/Z2s6VE8.png',
            price: 1.0,
            description: 'Red Bot',
            shop_id: robotz[0]._id,
            owner_id: robotz[0]._id,
            featured: false
        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/m9ZwigV.png',
            price: 1.0,
            description: 'Green Bot',
            shop_id: robotz[0]._id,
            owner_id: robotz[0]._id,
            featured: false
        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/09jsAjG.png',
            price: 1.0,
            description: 'Yellow Bot',
            shop_id: robotz[0]._id,
            owner_id: robotz[0]._id,
            featured: false
        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/09jsAjG.png',
            price: 1.0,
            description: 'Lavender Bot',
            shop_id: robotz[0]._id,
            owner_id: robotz[0]._id,
            featured: false
        },
        {
            name: (Math.floor(Math.random()*10000)+ 1).toString(),
            image: 'https://i.imgur.com/CJCbpXK.png',
            price: 10,
            description: ' Dull Chimp Captain Hat and Cigar',
            shop_id: dullChimps[0]._id,
            owner_id: dullChimps[0]._id,
            featured: false
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