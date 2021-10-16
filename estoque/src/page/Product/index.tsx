import ButtonAdd from "../../components/ButtonAdd";
import ButtonCategory from "../../components/ButtonCategory";
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
                    <div className="d-flex flex-row mt-4">
                        <div className="p-2">
                            <ButtonAdd />
                        </div>
                        <div className="p-2">
                            <ButtonCategory />
                        </div>
                    </div>
                    <DataTable />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Product;