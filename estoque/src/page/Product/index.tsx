import DataTable from "../../components/DataTable";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Product = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="title mt-4">Inventory management</h1>
                <DataTable />
            </div>
            <Footer/>
        </>
    );
}

export default Product;