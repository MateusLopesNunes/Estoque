import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
            <div className="jumbotron" >
                <h1 className="display-4 mt-3">Stock</h1>
                <p className="lead">inventory management crud</p>
                <hr />
                <p>This system consists of doing crud operations to manage a store's inventory</p>
            </div>
            <Link className="btn btn-primary" to="/Product">
                Acess products
            </Link>
        </div> 
        </>
    );
}

export default Home;