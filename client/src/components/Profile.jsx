import axios from 'axios';
import { useState, useEffect } from 'react';
import UserNFTs from './UserNFTs';


const Profile = () => {
    const [owner, setOwner] = useState({})

    const getOwner = async () => {
        const res = await axios.get('http://localhost:3001/owner/0000004d358c79bf5043adf5')
        setOwner(res.data.owner)
    }

    useEffect(() => {
        getOwner();
    }, [])

    return (
        <div className="profile-container">
            <UserNFTs owner = { owner } />
            <div className="user-header">
                <h2>My Profile</h2>
                <img className="user-profile-image" src={owner.profile_image} />
                <h3>{owner.name}</h3>
                <h5>Wallet ID: {owner._id}</h5>
            </div>
        </div>
    )
}

export default Profile;