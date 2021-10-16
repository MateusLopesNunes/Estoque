import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './page/Home';
import Product from './page/Product';
import RegistrationCategory from './page/RegistrationCategory';
import RegistrationProduct from './page/RegistrationProduct';
import UpdateProduct from './page/UpdateProduct';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}>
                    <Home />
                </Route>
                <Route path="/Product/" component={Product}>
                    <Product />
                </Route>
                <Route path="/RegistrationProduct/" component={RegistrationProduct}>
                    <RegistrationProduct />
                </Route>
                <Route path="/Update/:id" component={UpdateProduct}>
                    <UpdateProduct />
                </Route>
                <Route path="/RegistrationCategory/" component={RegistrationCategory}>
                    <RegistrationCategory />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;