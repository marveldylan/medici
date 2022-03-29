import LeftSidebar from './LeftSidebar';
import Featured from './Featured';
import ViewPort from './ViewPort';
import RightSidebar from './RightSidebar';
import TopCollections from './TopCollections';
import Banner from './Banner';


const Landing = () => {
    return(
        <div className="landing-page">
            <LeftSidebar />
            <ViewPort />
            <RightSidebar />
            <Banner />
        </div>
    )
}

export default Landing;