import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShopNFTs from './ShopNFTs';
import ShopReviews from './ShopReviews';
import WriteReview from './WriteReview';

const Shop = () => {

    const [selectedShop, setShop ] = useState({})

    let { id } = useParams()

    const getShop = async () => {
        const res = await axios.get(`/shops/${ id }`)
        setShop(res.data.shop)
    }

    useEffect(() => {
        getShop();
        return(()=>{
            setShop({})
        })
    }, [])

    return (
        <div className="shop-layout">
            <div className="shop-image" style={{ backgroundImage: `url(${selectedShop.cover_image})`}}>
                <img className="profile-image" src={selectedShop.profile_image} />
            </div>
            <div className="shop-header">
                <p className="shop-rank">Rank: {selectedShop.rank}</p>
                <p className="shop-name">{selectedShop.name}</p>
                <p className="shop-description">{selectedShop.description}</p>
            </div>
            <div className="shop-content">
                <ShopNFTs shop = { selectedShop } />
                <div className="reviews-container">
                    <WriteReview shop = { selectedShop } />
                    <ShopReviews shop = { selectedShop } />
                </div>

            </div>
        </div>
    )
}

export default Shop;