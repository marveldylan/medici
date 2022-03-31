import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Shop from './Shop';

const ShopDetails = (props) => {

    const [shopId, setShopId] = useState('');
    const [shops, setShops] = useState([]);
    const [shop, setShop] = useState({});

    let { id } = useParams()

    let navigate = useNavigate();

    const setSelectedShop = async () => {
        await setShopId(props.nft.shop_id)
    }

    const updateCurrentShop = async (shops) =>{
        console.log(shopId)
        let currentShop = await shops.find(
            (shop) => shop._id === shopId
        )
        console.log(`currentShop: ${currentShop.name}`)
        console.log(`shop: ${shop}`)
        // setShop(currentShop)
    } 

    const getShops = async () => {
        const res = await axios.get('http://localhost:3001/shops')
        setShops(res.data.shops)
        setSelectedShop();
    }

    const shopPage = () => {
        navigate(`/shops/${shopId}`)
    }

    useEffect( async ()=> {
         await getShops();
        updateCurrentShop(shops);
        return(()=>{
            setShopId('');
            setShop({});
            setShops([]);
        })
    }, [props, shopId])

    console.log(`shop id: ${shopId}`)

    return (
        <div className="shop-info" onClick={()=> shopPage()}>
            <h1>{shop.name}</h1>
        </div>
    )
}

export default ShopDetails