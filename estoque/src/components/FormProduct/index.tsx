const FormProduct = () => {
    return (
        <form>
            <div className="row g-3">
                <div className="col-md-8">
                    <label htmlFor="inputName" className="form-label">Name of product</label>
                    <input type="email" className="form-control" id="inputName" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputCode" className="form-label">Quantity</label>
                    <input type="password" className="form-control" id="inputCode" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" id="inputPrice" aria-label="Amount (to the nearest dollar)" />
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCode" className="form-label">Bar code</label>
                    <input type="password" className="form-control" id="inputCode" />
                </div>
            </div>
            <div className="mt-4">
                <button type="submit" className="btn btn-primary buttonSave">Save</button>
            </div>
        </form>
    );
}

export default FormProduct;