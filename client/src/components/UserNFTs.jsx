import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserNFTs = (props) => {
    const [userNFTs, setNFTs] = useState([])

    const getNFTs= async () => {
        const res = await axios.get('http://localhost:3001/nfts')
        let selectedNFTs = []
        res.data.nfts.forEach((nft) => {
            if(nft.owner_id === props.owner._id) {
                selectedNFTs.push(nft)
            }
        })
        setNFTs(selectedNFTs)
        console.log(userNFTs)
    }

    let navigate = useNavigate();

    const nftDetails = (nft) => {
        navigate(`/nft/${nft._id}`)
    }
    
    useEffect(() => {
        getNFTs();
    }, [props])

    return (
        <div className="user-nft-container">
            {
                userNFTs.map((nft) => {
                    return(
                        <div className="user-nft-item" key={ nft._id } onClick={() => nftDetails(nft)}>
                            <img className="nft-image" src={nft.image} alt={`can't display image`} />
                            <p className="user-nft-name">{ nft.name }</p>
                            <div className="overlay">
                                <p className="nft-name-overlay">{ nft.name }</p>
                                <p className="nft-description">{ nft.description }</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserNFTs;