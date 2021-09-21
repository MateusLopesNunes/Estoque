import ButtonAdd from "../../components/ButtonAdd";
import DataTable from "../../components/DataTable";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Search from "../../components/Search";
import Title from "../../components/Title";

const Product = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Title />
                <DataTable />
                <ButtonAdd />
            </div>
            <Footer/>
        </>
    );
}

export default Product;