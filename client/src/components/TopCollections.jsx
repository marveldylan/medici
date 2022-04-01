import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TopCollections = () => {

    const [shops, setShops] = useState([]);

    let navigate = useNavigate();

    const goToShop = (shop) => {
        navigate(`/shops/${shop._id}`)
    }

    const getShops = async () => {
        const res = await axios.get('http://localhost:3001/shops')
        let sortedShops = res.data.shops.sort((a, b)=> (a.rank > b.rank ? 1 : -1));
        setShops(sortedShops.slice(0, 3))
    }

    useEffect(()=> {
         getShops();
    }, [])

    return(
        <div className="top-collections-container">
            {
                shops.map((shop) => {
                    console.log(shop);
                    return(
                        <div className="top-collections-item" key={ shop._id } style={{ backgroundImage: `url(${shop.cover_image})`, objectFit: 'cover', backgroundRepeat: 'no-repeat'}} onClick={() => goToShop(shop)}>
                            <div className="top-collections-image-container">
                                <p className="top-collections-rank">Rank: {shop.rank}</p>
                                <img className="shop-profile-image" src={shop.profile_image} alt={`can't display image`} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TopCollections;
