import { useEffect, useState } from "react";
import axios from "axios";
import ModalDelete from "../ModalDelete";
import ModalUpdate from "../ModalUpdate";
import { BASE_URL } from "../../util/requests";
import { ProductPage } from "../../types/Product";

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
    }, [])

    return (
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
                                <ModalDelete />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;