import Featured from './Featured';

const LeftSidebar = () => {

    return (
       <div className="left-sidebar">
           <div className="featured-header">
                <p>Featured</p>
           </div>
           <Featured />
           <div className="featured-footer">

           </div>
       </div>
    )
}

export default LeftSidebar;