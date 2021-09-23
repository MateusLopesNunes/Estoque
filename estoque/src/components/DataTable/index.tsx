import { useEffect, useState } from "react";
import axios from "axios";
import ButtonAdd from "../../components/ButtonAdd";
import ModalDelete from "../ModalDelete";
import ModalUpdate from "../ModalUpdate";
import { BASE_URL } from "../../util/requests";
import { ProductPage } from "../../types/Product";
import Search from "../Search";
import Pagiation from "../Pagination";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);

    const [page, setPage] = useState<ProductPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/v2/api/product?page=${activePage}&size=7`).then(response => {
            setPage(response.data);
        })
    }, [activePage, page.content])

    const changePagination = (index: number) => {
        setActivePage(index);
    }

    const changeDelete = (id: number) => {
        axios.delete(`${BASE_URL}/v2/api/product/${id}`)
    }

    const changeSearch = (name: string) => {
        console.log(`Name: ${name}`);
        axios.get(`${BASE_URL}/v2/api/product/${name}`).then(response => {
            setPage(response.data);
        });
    }

    return (
        <>
            <div className="mx-3">
                <Search productChange={changeSearch} />
                <ButtonAdd />
            </div>
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
                                    <ModalDelete product={item} productChange={changeDelete} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagiation page={page} paginationChange={changePagination} />
        </>
    );
}

export default DataTable;