import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { BASE_URL } from "../../util/requests";

type Inputs = {
    name: string
};

const validationForm = yup.object({
    name: yup.string().max(50, 'this field must be a maximum of 50 characters').required("enter a name")
});

const FormCategory = () => {

    //const [select, setSelect] = useState<Category[]>();

    const { register, handleSubmit } = useForm<Inputs>({
        resolver: yupResolver(validationForm)
    }); //react hook Forms
    const history = useHistory(); //hook para fazer o redirecionamento de uma ação

    const onSubmit: SubmitHandler<Inputs> = data => { //envio padrão do formulario
        axios.post(`${BASE_URL}/v2/api/category`, data).then(response => {
            history.push('/Product'); //faz o redirecionamento
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-row">
                <div className="mt-3 w-100">
                    <label htmlFor="inputCategory" className="form-label">Name of category</label>
                    <input type="text" className="form-control" id="inputCategory" {...register("name")} />
                </div>
                <div className="mx-2 mt-5">
                    <button type="submit" className="btn btn-primary buttonSave">Save</button>
                </div>
            </div>

        </form>
    );
}

export default FormCategory;