import Footer from "../../components/Footer";
import FormProduct from "../../components/FormProduct";
import NavBar from "../../components/NavBar";

const RegistrationProduct = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className="container">
                    <h1 className="mt-4">Product registration</h1>
                    <div className="mt-4">
                        <FormProduct />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default RegistrationProduct;