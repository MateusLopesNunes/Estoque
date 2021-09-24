import ButtonAdd from "../../components/ButtonAdd";
import DataTable from "../../components/DataTable";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Search from "../../components/Search";

const Product = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="title mt-4">Inventory management</h1>
                <Search/>
                <ButtonAdd />
                <DataTable />
            </div>
            <Footer/>
        </>
    );
}

export default Product;