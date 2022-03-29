import { Link } from 'react-router-dom';
// import Search from './Search';

const Nav = () => {



    return (
        <div className="nav">
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to ="/profile">Profile</Link>
                <Link to ="/connect-wallet">Connect Wallet</Link>
            </div>
            <div className="search-container">
                {/* <Search /> */}
            </div>
            <div className="create-container">
                <p className="create-text">Create</p>
            </div>
        </div>
    )
}

export default Nav;