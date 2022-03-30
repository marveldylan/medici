const NFTInfo = (props) => {
    return(
        <div className="nft-info">
            <p className="nft-name">{props.nft.name}</p>
            <p className="nft-price">Price: {props.nft.price} Eth</p>
            <p className="nft-description">Description: {props.nft.description} </p>
        </div>
    )
}

export default NFTInfo;