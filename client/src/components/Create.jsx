import { useNavigate } from 'react-router-dom';
import Creator from './Creator';
import axios from 'axios'

const Create = () => {

    let navigate = useNavigate();
    const navigateCreate = () => {
        navigate('/create');
    }

    return (
        <div className="create-container">
            <button className="create-btn" onClick={ navigateCreate }>Create</button>
        </div>
    )
}

export default Create;