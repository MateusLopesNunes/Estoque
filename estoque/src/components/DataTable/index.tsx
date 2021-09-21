import { useEffect, useState } from "react";
import axios from "axios";
import ModalDelete from "../ModalDelete";
import ModalUpdate from "../ModalUpdate";
import { BASE_URL } from "../../util/requests";
import { ProductPage } from "../../types/Product";
import Search from "../Search";

type Id = number | undefined;

const DataTable = () => {


    const [page, setPage] = useState<ProductPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/v2/api/product?page=0&size=20`).then(response => {
            setPage(response.data);
        })
    }, [page.content])

    const changeId = (id: number) => {
        axios.delete(`${BASE_URL}/v2/api/product/${id}`)
    }

    const changeName = (name: string) => {
        axios.get(`${BASE_URL}/v2/api/product/${name}`).then(response => {
            setPage(response.data);
        });
    }

    const nameTop = (name: string) => {
        console.log(`Name: ${name}`);
    }

    return (
        <>
            <Search productChange={nameTop}/>
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">barCode</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {page.content?.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>{item.barCode}</td>
                            <td>
                                <div className="d-grid gap-2 d-md-block">
                                    <ModalUpdate />
                                    <ModalDelete product={item} productChange={changeId} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default DataTable;