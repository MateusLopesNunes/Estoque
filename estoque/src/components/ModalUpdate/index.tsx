import { Link } from "react-router-dom";
import imgUpdate from "../../assets/icons/pencil-fill.svg";
import { Product } from "../../types/Product";

type Props = {
    product: Product;
}

const ModalUpdate = ({product}: Props) => {
    return (
        <>
            <Link to={{pathname: `/Update/${product.id}`}}>
                <button type="button" className="btn btn-success me-2" data-bs-target="#exampleModal">
                    <img src={imgUpdate} alt="DevSuperior" width="17" />
                    &nbsp; Update
                </button>
            </Link>
        </>
    );
}

export default ModalUpdate;