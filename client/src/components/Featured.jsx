import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Featured = () => {

    const [featNFTs, setFeatured] = useState([])

    const getFeatured = async () => {
        const res = await axios.get('http://localhost:3001/nfts')
        setFeatured(res.data.nfts)
    }

    const nftDetails = (nft) => {
        console.log(nft._id)
    }
    useEffect(() => {
        getFeatured();
    }, [])

    return (
        <div className="featured-container">
            {
                featNFTs.map((nft) => {
                    console.log(nft)
                    return(
                        <div className="featured-item" key={ nft._id } onClick={() => nftDetails(nft)}>
                            <div className="featured-name-container">
                                <p className="nft-name">{ nft.name }</p>
                            </div>
                            <div className="featured-price-container">
                                <p className="nft-price">{ nft.price } ETH</p>
                            </div>
                            <div className="featured-image-container">
                                <img className="nft-image" src={nft.image} alt={`can't display image`} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Featured;