import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light  navBarTop">
            <div className="container">
                <Link to="/" className="titleLink">
                    <span className="navbar-brand mb-0 h1 fs-3 text-white">Cradfor</span>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;