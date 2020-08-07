
import React            from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'


import ProductList      from 'page/product/index/index.jsx';

class ProductRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route to="/product/index" component={ProductList}></Route>
                <Redirect exact from="/product" to="/product/index"></Redirect>
            </Switch>
        )
    }
}

export default ProductRouter
