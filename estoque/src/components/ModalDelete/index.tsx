const ModalDelete = () => {
    return (
        <>
            <button type="button" className="btn btn-danger me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Delete
            </button>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Do you really want to delete this product?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer w-100">
                            <button type="button" className="btn btn-secondary w-25" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary w-25">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalDelete;