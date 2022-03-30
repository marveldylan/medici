import React, { useEffect, useState } from 'react';
import LeftSidebar from './LeftSidebar';
import Featured from './Featured';
import ViewPort from './ViewPort';
import RightSidebar from './RightSidebar';
import TopCollections from './TopCollections';
import Banner from './Banner';


const Landing = () => {

    const [nft, setNFT] = useState(null)

    useEffect(() => {
        setNFT(null)
    }, [])


    return(
        <div className="landing-page">
            <LeftSidebar nft={ nft }/>
            <ViewPort />
            <RightSidebar nft={ nft }/>
            <Banner />
        </div>
    )
}

export default Landing;