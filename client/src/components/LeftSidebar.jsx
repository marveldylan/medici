import Featured from './Featured';
import ShopDetails from './ShopDetails';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = (props) => {

    let navigate = useNavigate();

    const landing = () => {
        navigate(`/`)
    }
    return (
       <div className="left-sidebar">
           <div></div>
           <div className="left-header" onClick={() => landing()}>
                {
                props.nft !== null ?
                    <p>Back To Featured</p>
                    : <p>Featured</p>
                }
           </div>
           <div></div>
           <div></div>
           {
            props.nft !== null ?
            <ShopDetails nft={props.nft} />
            : <Featured nft={props.nft} />
           }

           <div></div>
           <div className="left-footer">
           </div>
       </div>
    )
}

export default LeftSidebar;