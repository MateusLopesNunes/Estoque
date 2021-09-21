import { useState } from "react";
import axios from "axios";
import { Product } from "../../types/Product";
import { BASE_URL } from "../../util/requests";

const Search = () => {

    const [values, setValues] = useState<Product>({
        name: '',
        barCode: 0,
        price: 0,
        quantity: 0
    });

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = ev.target;
        setValues({...values, [name]: value});
        console.log(values);
    }

    return (
        <form className="row mt-3">
            <div className="col-4">
                <label htmlFor="inputName fs-3">Name</label>
                <input type="text" name="name" className="form-control" id="inputName" onChange={onChange}/>
            </div>
            <div className="col-auto mt-4">
                <button type="submit" className="btn btn-primary mb-3">Search</button>
            </div>
        </form>
    );
}

export default Search;