import Featured from './Featured';

const LeftSidebar = () => {

    return (
       <div className="left-sidebar">
           <div></div>
           <div className="featured-header">
                <p>Featured</p>
           </div>
           <div></div>
           <div></div>
           <Featured />
           <div></div>
           <div className="featured-footer">
           </div>
       </div>
    )
}

export default LeftSidebar;