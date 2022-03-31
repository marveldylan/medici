import TopCollections from './TopCollections';
// import ShopDetails from './ShopDetails';


const RightSidebar = (props) => {

    // props.nft !== null ?
    // <ShopDetails nft= { props.nft } />
    // :
    // props.nft !== null ?
    // <p>Shop Information</p>
    // : 
    return (
        <div className="sidebar">
            <div></div>
            <div className="sidebar-header">
                <p>Top Collections</p>
            </div>
            <div></div>
            <div></div>
                <TopCollections />           
            <div></div>
            <div></div>
            <div className="sidebar-footer">
            <div></div>
        </div>
    </div>
    )
}

export default RightSidebar;