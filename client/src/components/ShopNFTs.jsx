import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ShopNFTs = (props) => {
    const [shopNFTs, setNFTs] = useState([])

    const getNFTs= async () => {
        const res = await axios.get('http://localhost:3001/nfts')
        let selectedNFTs = []
        res.data.nfts.forEach((nft) => {
            if(nft.owner_id === props.shop._id) {
                selectedNFTs.push(nft)
            }
        })
        setNFTs(selectedNFTs)
        console.log(shopNFTs)
    }

    let navigate = useNavigate();

    const nftDetails = (nft) => {
        navigate(`/nft/${nft._id}`)
    }
    
    useEffect(() => {
        getNFTs();
    }, [props])

    return (
        <div className="shop-nft-container">
            {
                shopNFTs.map((nft) => {
                    return(
                        <div className="shop-nft-item" key={ nft._id } onClick={() => nftDetails(nft)}>
                            <img className="nft-image" src={nft.image} alt={`can't display image`} />
                            <div className="nft-name-container">
                                <p className="nft-name">{ nft.name }</p>
                            </div>
                            <div className="nft-price-container">
                                <p className="nft-price">{ nft.price } ETH</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ShopNFTs;