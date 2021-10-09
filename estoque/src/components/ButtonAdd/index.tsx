import { Link } from 'react-router-dom';

const ButtonAdd = () => {
    return (
        <div className="mt-4">
            <Link to="/Registration" className="btn btn-primary">Add product</Link>
        </div>
    );
}

export default ButtonAdd;