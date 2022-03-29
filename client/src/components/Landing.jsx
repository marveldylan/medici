import LeftSidebar from './LeftSidebar';
import Featured from './Featured';
import ViewPort from './ViewPort';
import RightSidebar from './RightSidebar';
import TopCollections from './TopCollections';


const Landing = () => {
    return(
        <div className="landing-page">
            <LeftSidebar />
            <ViewPort />
            <RightSidebar />
        </div>
    )
}

export default Landing;