import { Link } from "react-router-dom";
import imgUpdate from "../../assets/icons/pencil-fill.svg";

const ModalUpdate = () => {
    return (
        <>
            <Link to="/Registration">
                <button type="button" className="btn btn-success me-2" data-bs-target="#exampleModal">
                    <img src={imgUpdate} alt="DevSuperior" width="17" />
                    &nbsp; Update
                </button>
            </Link>
        </>
    );
}

export default ModalUpdate;