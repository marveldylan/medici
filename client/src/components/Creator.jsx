import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Creator = () => {

    const [ name, setName ] = useState('')
    const [ image, setImage] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ owner, setOwner ] = useState({})
    const [ nftCreated, setCreated ] = useState(false)

    let navigate = useNavigate();

    const getOwner = async () => {
        const res = await axios.get('/owner/0000004d643cdabc9a60454a')
        setOwner(res.data.owner)
    }

    useEffect(() => {
        getOwner();
    }, [])

    const handleName = (e) => {
        setName(e.target.value)
        }

    const handleImage = (e) => {
        setImage(e.target.value)
        }
    
    const handleDescription = (e) => {
        setDescription(e.target.value)
        }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const createNFT = async () => {
        if(name !== '' && image !== '' && description !== '' && price !== ''){
            await axios.post(`/nfts`, {
                name: name,
                image: image,
                description: description,
                price: price,
                owner_id: owner._id
            })
            .then(function (response) {
                setCreated(true);
                console.log(response);
                navigate('/Profile');
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            alert(`Aloha! It looks like some information is missing. Please fill in all fields to create your NFT.`)
        }
    }

    return (
        <div className="full-component-container">
            <div></div>
            <div className="create-nft-form">
                <h2 className="create-header">Create The Next Big Thing!</h2>
                <input
                    className="create-input"
                    type="text"
                    name="name"
                    placeholder="NFT Name" 
                    onChange={(e) => handleName(e, 'num')}
                    />
                <input
                    className="create-input"
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    onChange={(e) => handleImage(e, 'num')}
                    />
                <textarea
                    className="create-input"
                    type="text" 
                    name="description"
                    rows="5"
                    placeholder="Write your description!" 
                    onChange={(e) => handleDescription(e, 'num')}
                    ></textarea>
                <input
                    className="create-input"
                    type="number" 
                    name="price"
                    placeholder="Price (ETH)" 
                    onChange={(e) => handlePrice(e, 'num')}
                    />
                <button className="search-button" type="submit" onClick={() => createNFT()}>S</button>
            </div>
            <div></div>
        </div>
    )
}

export default Creator;