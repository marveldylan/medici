import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Shop from './Shop';

const NFTActions = (props) => {

    let { id } = useParams()

    let navigate = useNavigate();

    console.log(props.owner._id)

    const buyNow = async () => {
        const res = await axios.put(`http://localhost:3001/nfts/${id}`, { owner_id: props.owner._id })
        navigate('/Profile')
    }

    return (
        <div className="nft-actions-container">
            <div className="price-container">
                <p className="buy-price">Price: {props.nft.price} Eth</p>
            </div>
            <div className="buy-container" onClick={()=>buyNow()}>
                <p className="buy-nft-text">Buy Now</p>
            </div>
        </div>
    )
}

export default NFTActions