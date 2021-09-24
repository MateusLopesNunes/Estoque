import { ProductPage } from "../../types/Product";

type Props = {
    page: ProductPage;
    paginationChange: Function;
}

const Pagiation = ({ page, paginationChange }: Props) => {

    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => paginationChange(page.number - 1)}>&laquo;</button>
                    </li>
                    <li className="page-item disabled">
                        <nav className="page-link">{page.number + 1}</nav>
                    </li>
                    <li className={`page-item ${page.last ? "disabled" : ""}`} >
                        <button className="page-link" onClick={() => paginationChange(page.number + 1)}>&raquo;</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagiation;