import { Link } from 'react-router-dom';

const ButtonAdd = () => {
    return (
        <div className="">
            <Link to="/Registration" className="btn btn-primary">Add product</Link>
        </div>
    );
}

export default ButtonAdd;