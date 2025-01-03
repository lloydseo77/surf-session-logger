import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Surf Session Logger</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add Session</Link>
            </div>
        </nav>
    )
}

export default Navbar;