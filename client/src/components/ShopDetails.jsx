import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShopDetails = (props) => {
    
    console.log(props.nft)

    const [shopId, setShopId] = useState('');
    const [shops, setShops] = useState([]);
    const [shop, setShop] = useState({});

    let { id } = useParams()

    let navigate = useNavigate();

    const setSelectedShop = () => {
        setShopId(props.nft.shop_id)
    }

    const updateCurrentShop = (shops) =>{
        let currentShop = shops.find(
            (shop) => shop._id === shopId
        )
        console.log(`current shop ${currentShop.name}`)
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
            setShopId('')
        })
    }, [props, shopId])

    console.log(`shop id: ${shopId}`)

    return (
        <div className="shop-info" onClick={()=> shopPage()}>
            <h1>Test</h1>
        </div>
    )
}

export default ShopDetails