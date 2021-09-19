const Search = () => {
    return (
        <form className="row mt-3">
            <div className="col-4">
                <label htmlFor="inputPassword2 fs-3">Name</label>
                <input type="password" className="form-control" id="inputPassword2"/>
            </div>
            <div className="col-auto mt-4">
                <button type="submit" className="btn btn-primary mb-3">Search</button>
            </div>
        </form>
    );
}

export default Search;