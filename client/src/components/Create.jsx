import { useNavigate } from 'react-router-dom';

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