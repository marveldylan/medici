import { Link } from 'react-router-dom';
import Search from './Search';
import Create from './Create';

const Nav = () => {



    return (
        <div className="nav">
            <div className="navbar">
                <Link className = "link" to="/">Home</Link>
                <Link className = "link" to="/about">About</Link>
                <Link className = "link" to ="/profile">Profile</Link>
                <Link className = "link" to ="/connect-wallet">Connect Wallet</Link>
            </div>
            <Search />
            <Create />
        </div>
    )
}

export default Nav;