import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './page/Home';
import Product from './page/Product';
import RegistrationProduct from './page/RegistrationProduct';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Product" exact>
                    <Product />
                </Route>
                <Route path="/Registration">
                    <RegistrationProduct />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;