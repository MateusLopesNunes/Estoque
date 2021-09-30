import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string,
  quantity: number,
  price: number,
  barCode: number
};

type Props = {
    onChange: Function
}

const Search = ({onChange}: Props) => {

    const { register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => { //envio padrão do formulario
        onChange(data.name);        
    }

    return (
        <form className="row mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-4">
                <label htmlFor="inputName fs-3">Name</label>
                <input type="text" className="form-control" id="inputName" {...register("name")}/>
            </div>
            <div className="col-auto mt-4">
                <button type="submit" className="btn btn-primary mb-3">Search</button>
            </div>
        </form>
    );
}

export default Search;