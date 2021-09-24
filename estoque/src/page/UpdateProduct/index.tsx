import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import NavBar from "../../components/NavBar";
import { Product } from "../../types/Product";
import { BASE_URL } from "../../util/requests";

type ParamTypes = {
    id: string;
}

const UpdateProduct = () => {

    const {id} = useParams<ParamTypes>();

    const [values, setValues] = useState<Product>({
        name: '',
        barCode: 0,
        price: 0,
        quantity: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/v2/api/product/id=${id}`).then(response => {
            const data = response.data as Product;
            const dataId = data.id;
            const dataName = data.name;
            const dataQuantity = data.quantity;
            const dataPrice = data.price;
            const dataBarCode = data.barCode;
            setValues({
                id: dataId,
                name: dataName,
                barCode: dataBarCode,
                price: dataPrice,
                quantity: dataQuantity
            });
        });
    }, [])

    const history = useHistory(); //hook para fazer o redirecionamento de uma ação

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => { //recebe o evento do onChange
        const { name, value } = ev.target; //desmembrando o objeto. O ev.target contem estes dois atributos.

        setValues({ ...values, [name]: value }); //pega um valor na posição do name, este sendo referente ao name do input
    }

    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => { //envio padrão do formulario
        ev.preventDefault(); //evita o funcionamento padrão do formulario(antigo)
        axios.put(`${BASE_URL}/v2/api/product/${id}`, values).then(Response => {
            history.push("/Product");
        });
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="mt-4">Update product</h1>
                <div className="mt-4">
                    <form onSubmit={onSubmit}>
                        <div className="row g-3">
                            <input type="hidden" />
                            <div className="col-md-8">
                                <label htmlFor="inputName" className="form-label">Name of product</label>
                                <input type="text" name="name" className="form-control" id="inputName" value={values.name} onChange={onChange} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputCode" className="form-label">Quantity</label>
                                <input type="text" name="quantity" className="form-control" id="inputQuantity" value={values.quantity} onChange={onChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPrice" className="form-label">Price</label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input type="text" name="price" className="form-control" id="inputPrice" aria-label="price of a product" value={values.price} onChange={onChange} />
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCode" className="form-label">Bar code</label>
                                <input type="number" name="barCode" className="form-control" id="inputCode" value={values.barCode} onChange={onChange} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="btn btn-primary buttonSave">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateProduct;