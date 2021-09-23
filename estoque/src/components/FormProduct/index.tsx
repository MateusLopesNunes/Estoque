import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Product } from "../../types/Product";
import { BASE_URL } from "../../util/requests";

const FormProduct = () => {

    const [values, setValues] = useState<Product>({
        name: '',
        barCode: 0,
        price: 0,
        quantity: 0
    });
    const history = useHistory(); //hook para fazer o redirecionamento de uma ação

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => { //recebe o evento do onChange
        const { name, value } = ev.target; //desmembrando o objeto. O ev.target contem estes dois atributos.

        setValues({...values, [name]: value}); //pega um valor na posição do name, este sendo referente ao name do input
    }

    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => { //envio padrão do formulario
        ev.preventDefault(); //evita o funcionamento padrão do formulario(antigo)

        axios.post(`${BASE_URL}/v2/api/product`, values).then(response => { 
            history.push('/Product'); //faz o redirecionamento
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row g-3">
                <div className="col-md-8">
                    <label htmlFor="inputName" className="form-label">Name of product</label>
                    <input type="text" name="name" className="form-control" id="inputName" onChange={onChange} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputCode" className="form-label">Quantity</label>
                    <input type="text" name="quantity" className="form-control" id="inputQuantity" onChange={onChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="text" name="price" className="form-control" id="inputPrice" aria-label="price of a product" onChange={onChange} />
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCode" className="form-label">Bar code</label>
                    <input type="number" name="barCode" className="form-control" id="inputCode" onChange={onChange} />
                </div>
            </div>
            <div className="mt-4">
                <button type="submit" className="btn btn-primary buttonSave">Save</button>
            </div>
        </form>
    );
}

export default FormProduct;