import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Banner from "./Banner";

const NFTDetails = () => {

    const [selectedNFT, setNFT ] = useState({})
    const [ nfts, setNFTs ] = useState([])

    let { id } = useParams()

    const getNFT = async () => {
        const res = await axios.get(`http://localhost:3001/nfts/${ id }`)
        setNFT(res.data.nft)
    }

    useEffect(() => {
        getNFT();
    }, [])

    return (
        <div className="landing-page">
            <LeftSidebar nft = { selectedNFT } />
            <div className="nft-details">
                <img className="nft-details-image" src={selectedNFT.image} alt="can't display image" />
            </div>
            <RightSidebar nft = { selectedNFT } />
            <Banner />
        </div>
    )
}

export default NFTDetails;