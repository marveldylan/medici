import Featured from './Featured';
import NFTInfo from './NFTInfo';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = (props) => {

    let navigate = useNavigate();

    const landing = () => {
        navigate(`/`)
    }
    return (
       <div className="sidebar">
           <div></div>
           <div className="sidebar-header" onClick={() => landing()}>
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