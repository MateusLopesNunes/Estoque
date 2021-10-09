import ButtonAdd from "../../components/ButtonAdd";
import DataTable from "../../components/DataTable";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Product = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className="container">
                    <h1 className="title mt-4">Inventory management</h1>
                    <ButtonAdd />
                    <DataTable />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Product;