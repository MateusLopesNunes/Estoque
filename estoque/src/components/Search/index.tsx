import { useState } from "react";
import { useParams } from "react-router";
import { Product } from "../../types/Product";

/*type ParamTypes = {
    id: string;
}*/

type Props = {
    value: string,
    onChange: Function
}

const Search = ({value, onChange}: Props) => {

    //const {id} = useParams<ParamTypes>();

    const [values, setValues] = useState<Product>({
        name: '',
        barCode: 0,
        price: 0,
        quantity: 0
    });

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        onChange(ev.target.value);
    }

    /*const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => { //envio padrão do formulario
        ev.preventDefault(); //evita o funcionamento padrão do formulario(antigo)
    }*/

    return (
        <form className="row mt-4" >
            <div className="col-4">
                <label htmlFor="inputName fs-3">Name</label>
                <input type="text" name="name" className="form-control" id="inputName" onChange={(ev) => handleChange(ev)}/>
            </div>
            <div className="col-auto mt-4">
                <button type="submit" className="btn btn-primary mb-3">Search</button>
            </div>
        </form>
    );
}

export default Search;