// image taken from duckduckgo search https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.pngguru.com%2Fpreview%2F841%2F447%2F599%2Fs-008-aesthetic-png-clipart.jpg&f=1&nofb=1
// color-corrected and converted to svg with Gravit.io
import defaultImage from '../assets/david-edited.svg'

const ViewPort = () => {

    return (
        <div className="viewport">
             <img className="default-image" src={ defaultImage } alt="cant find it" />
        </div>
    )
}

export default ViewPort;