import TopCollections from './TopCollections';
import NFTActions from './NFTActions';
import axios from 'axios';
import { useState, useEffect } from 'react';


const RightSidebar = (props) => {

    const [owner, setOwner] = useState({})

    const getOwner = async () => {
        const res = await axios.get('/owner/0000004deb629f9dfaa9858b')
        setOwner(res.data.owner)
    }

    useEffect(() => {
        getOwner();
    }, [])

    return (
        <div className="sidebar">
            <div></div>
            <div className="sidebar-header">
            {
                props.nft !== null ?
                <p>NFT Actions</p>
                : <p>Top Collections</p>
            }
            </div>
            <div></div>
            <div></div>
            {
            props.nft !== null ?
            <NFTActions nft= { props.nft } owner = { owner } />
            : <TopCollections />  
            }         
            <div></div>
            <div></div>
            <div className="sidebar-footer">
            <div></div>
        </div>
    </div>
    )
}

export default RightSidebar;