import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import NavBar from "../../components/NavBar";
import { Product } from "../../types/Product";
import { BASE_URL } from "../../util/requests";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

type ParamTypes = {
    id: string;
}

type Inputs = {
    name: string,
    quantity: number,
    price: number,
    barCode: number
};

const validationForm = yup.object({
    name: yup.string().max(50, "this field must be a maximum of 6 characters").required("enter a name"),
    price: yup.number().max(999999, "this field must be a maximum of 6 characters").required("enter a number"),
    quantity: yup.number().max(99999, "this field must be a maximum of 5 characters").required("enter a number"),
    barCode: yup.number().max(999999999999, "this field must be a maximum of 12 characters").min(9999999999, "this field must be a minimum of 12 characters").required("enter a number")
}); //yup com hook forms

const UpdateProduct = () => {

    const { id } = useParams<ParamTypes>();

    useEffect(() => {
        axios.get(`${BASE_URL}/v2/api/product/id=${id}`).then(response => {
            reset(response.data);
        });
    }, []);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
        resolver: yupResolver(validationForm)
    }); //react hook Forms

    const history = useHistory(); //hook para fazer o redirecionamento de uma ação

    const onSubmit: SubmitHandler<Inputs> = data => { //envio padrão do formulario
        axios.put(`${BASE_URL}/v2/api/product/${id}`, data).then(Response => {
            history.push("/Product"); //faz o redirecionamento
        });
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="mt-4">Update product</h1>
                <div className="mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row g-3">
                            <div className="col-md-8">
                                <label htmlFor="inputName" className="form-label">Name of product</label>
                                <input type="text" className="form-control" id="inputName" {...register("name")} />
                                <p className="error">{errors.name?.message}</p>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputCode" className="form-label">Quantity</label>
                                <input type="text" className="form-control" id="inputQuantity" {...register("quantity")} />
                                <p className="error">{errors.quantity?.message}</p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPrice" className="form-label">Price</label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input type="text" className="form-control" id="inputPrice" aria-label="price of a product" {...register("price")} />
                                    <span className="input-group-text">.00</span>
                                    <p className="error">{errors.price?.message}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCode" className="form-label">Bar code</label>
                                <input type="number" className="form-control" id="inputCode" {...register("barCode")} />
                                <p className="error">{errors.barCode?.message}</p>
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