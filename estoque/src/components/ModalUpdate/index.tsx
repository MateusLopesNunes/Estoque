import { Link } from "react-router-dom";

const ModalUpdate = () => {
    return (
        <>
            <Link to="/Registration">
                <button type="button" className="btn btn-success me-2" data-bs-target="#exampleModal">
                    Update
                </button>
            </Link>
        </>
    );
}

export default ModalUpdate;