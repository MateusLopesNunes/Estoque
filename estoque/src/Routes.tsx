import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Product from './page/Product';
import RegistrationProduct from './page/RegistrationProduct';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Product />
                </Route>
                <Route path="/Registration" exact>
                    <RegistrationProduct />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;