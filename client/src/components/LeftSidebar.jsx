import Featured from './Featured';
import NFTInfo from './NFTInfo';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = (props) => {

    // direction for navigating to previous page taken from https://stackoverflow.com/questions/65948671/how-to-go-back-to-previous-route-in-react-router-dom-v6
    let navigate = useNavigate();

    return (
       <div className="sidebar">
           <div></div>
           <div className="sidebar-header" onClick={() => navigate(-1)}>
                {
                props.nft !== null ?
                    <p>Back</p>
                    : <p>Featured</p>
                }
           </div>
           <div></div>
           <div></div>
           {
            props.nft !== null ?
            <NFTInfo nft={props.nft} />
            : <Featured nft={props.nft} />
           }

           <div></div>
           <div className="sidebar-footer">
           </div>
       </div>
    )
}

export default LeftSidebar;