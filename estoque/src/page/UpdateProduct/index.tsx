import Footer from "../../components/Footer";
import FormUpdate from "../../components/formUpdate";
import NavBar from "../../components/NavBar";

const UpdateProduct = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className="container">
                    <h1 className="mt-4">Update product</h1>
                    <div className="mt-4">
                        <FormUpdate/>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default UpdateProduct;