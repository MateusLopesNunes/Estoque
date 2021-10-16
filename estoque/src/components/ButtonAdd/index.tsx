import { Link } from 'react-router-dom';

const ButtonAdd = () => {
    return (
        <div>
            <Link to="/RegistrationProduct" className="btn btn-primary">Add product</Link>
        </div>
    );
}

export default ButtonAdd;