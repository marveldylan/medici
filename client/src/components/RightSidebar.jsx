import TopCollections from './TopCollections';
import ShopDetails from './ShopDetails';


const RightSidebar = (props) => {
    return (
        <div className="sidebar">
            <div></div>
            <div className="sidebar-header">
                {
                props.nft !== null ?
                    <p>Shop Information</p>
                    : <p>Top Collections</p>
                }
            </div>
            <div></div>
            <div></div>
                {
                props.nft !== null ?
                    <ShopDetails nft= { props.nft } />
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