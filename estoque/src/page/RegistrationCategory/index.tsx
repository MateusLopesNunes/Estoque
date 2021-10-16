import Footer from "../../components/Footer";
import FormCategory from "../../components/FormCategory";
import NavBar from "../../components/NavBar";

const RegistrationCategory = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className="d-flex justify-content-center">
                    <div className="w-40 mt-5">
                        <div>
                            <h1 className="mt-2">Category registration</h1>
                        </div>
                        <div className="mt-5">
                            <FormCategory />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default RegistrationCategory;