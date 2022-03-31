import TopCollections from './TopCollections';
import NFTActions from './NFTActions';


const RightSidebar = (props) => {

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
            <NFTActions nft= { props.nft } />
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