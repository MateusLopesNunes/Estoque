import FormProduct from "../../components/FormProduct";
import NavBar from "../../components/NavBar";

const RegistrationProduct = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <h1 className="mt-4">Product registration</h1>
                <div className="mt-4">
                    <FormProduct/>
                </div>
            </div>
        </>
    );
}

export default RegistrationProduct;