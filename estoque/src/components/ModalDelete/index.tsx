import { Product } from "../../types/Product";

type Props = {
    product: Product;
    productChange: Function;
}

const ModalDelete = ({ product, productChange }: Props) => {

    return (
        <>
            <button type="button" className="btn btn-danger" onClick={() => productChange(product.id)}>Delete</button>
        </>
    );
}

export default ModalDelete;