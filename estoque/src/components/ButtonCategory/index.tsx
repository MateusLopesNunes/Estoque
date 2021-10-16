import { Link } from "react-router-dom";

const ButtonCategory = () => {
    return (
        <div>
            <Link to="/RegistrationCategory" className="btn btn-secondary">Add category</Link>
        </div>
    );
}

export default ButtonCategory;