import axios from 'axios';
import { useState, useEffect } from 'react';

const Creator = () => {

    const [ name, setName ] = useState('')
    const [ image, setImage] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ owner, setOwner ] = useState({})
    const [ nftCreated, setCreated ] = useState(false)


    const getOwner = async () => {
        const res = await axios.get('http://localhost:3001/owner/0000004d33e223a7bab70e6e')
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
        await axios.post(`http://localhost:3001/nfts`, {
            name: name,
            image: image,
            description: description,
            price: price,
            owner_id: owner._id
          })
          .then(function (response) {
            setCreated(true);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="component-container">
            <h1>Create The Next Big Thing!</h1>
            <div className="create-nft-form">
            <input 
                type="text"
                name="name"
                placeholder="NFT Name" 
                onChange={(e) => handleName(e, 'num')}
                />
            <input 
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={(e) => handleImage(e, 'num')}
                />
             <input 
                type="text" 
                name="description"
                placeholder="Write your description!" 
                onChange={(e) => handleDescription(e, 'num')}
                />
            <input 
                type="number" 
                name="price"
                placeholder="Price" 
                onChange={(e) => handlePrice(e, 'num')}
                />
            <button className="submit-button" type="submit" onClick={() => createNFT()}>Submit</button>
            </div>
        </div>
    )
}

export default Creator;