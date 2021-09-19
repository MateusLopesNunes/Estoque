import ModalDelete from "../ModalDelete";
import ModalUpdate from "../ModalUpdate";

const DataTable = () => {
    return (
        <table className="table table-striped mt-2">
            <thead>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">barCode</th>
                <th scope="col"></th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Lenovo ideaped 145</td>
                    <td>200</td>
                    <td>20</td>
                    <td>156515</td>
                    <td>
                        <div className="d-grid gap-2 d-md-block">
                            <ModalUpdate />
                            <ModalDelete />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Lenovo ideaped 145</td>
                    <td>200</td>
                    <td>20</td>
                    <td>156515</td>
                    <td>
                        <div className="d-grid gap-2 d-md-block">
                            <ModalUpdate />
                            <ModalDelete />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Lenovo ideaped 145</td>
                    <td>200</td>
                    <td>20</td>
                    <td>156515</td>
                    <td>
                        <div className="d-grid gap-2 d-md-block">
                            <ModalUpdate />
                            <ModalDelete />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Lenovo ideaped 145</td>
                    <td>200</td>
                    <td>20</td>
                    <td>156515</td>
                    <td>
                        <div className="d-grid gap-2 d-md-block">
                            <ModalUpdate />
                            <ModalDelete />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Lenovo ideaped 145</td>
                    <td>200</td>
                    <td>20</td>
                    <td>156515</td>
                    <td>
                        <div className="d-grid gap-2 d-md-block">
                            <ModalUpdate />
                            <ModalDelete />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default DataTable;