import { useState } from "react";
import { Product } from "../../types/Product";

type Props = {
    productChange: Function;
}

const Search = ({ productChange }: Props) => {

    const [values, setValues] = useState<Product>({
        name: '',
        barCode: 0,
        price: 0,
        quantity: 0
    });

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = ev.target;
        setValues({...values, [name]: value});
        productChange(values.name)
    }

    return (
        <form className="row mt-3">
            <div className="col-4">
                <label htmlFor="inputName fs-3">Name</label>
                <input type="text" name="name" className="form-control" id="inputName" onChange={(ev) => onChange(ev)}/>
            </div>
            <div className="col-auto mt-4">
                <button type="submit" className="btn btn-primary mb-3">Search</button>
            </div>
        </form>
    );
}

export default Search;