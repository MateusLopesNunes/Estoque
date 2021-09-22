import { Product } from "../../types/Product";
import imgDelete from "../../assets/icons/trash-fill.svg";

type Props = {
    product: Product;
    productChange: Function;
}

const ModalDelete = ({ product, productChange }: Props) => {

    return (
        <>
            <button type="button" className="btn btn-danger" onClick={() => productChange(product.id)}>
                <img src={imgDelete} alt="DevSuperior" width="17"/>
                &nbsp; Delete
            </button>
        </>
    );
}

export default ModalDelete;