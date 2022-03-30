import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LeftSidebar from "./LeftSidebar";
import ViewPort from "./ViewPort";
import RightSidebar from "./RightSidebar";
import Banner from "./Banner";

const NFTDetails = () => {

    const [selectedNFT, setNFT ] = useState({})
    const [ nfts, setNFTs ] = useState([])

    let { id } = useParams()

    return (
        <div className="landing-page">
        <LeftSidebar />
        <ViewPort />
        <RightSidebar />
        <Banner />
    </div>
    )
}

export default NFTDetails;