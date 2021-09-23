import { Link } from "react-router-dom";
import productIcon from "../../assets/icons/product.jpeg";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light  navBarTop">
            <div className="container">
                <Link to="/" className="titleLink">
                    <img src={productIcon} alt="Gerênciador de estoque" width="50" height="50" />
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;