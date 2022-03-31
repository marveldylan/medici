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
        setShops(res.data.shops)
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
                        <div className="top-collections-item" key={ shop._id } style={{ backgroundImage: `url(${shop.cover_image})`}} onClick={() => goToShop(shop)}>
                            <div className="top-collections-image-container">
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
