
import React            from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'


import ProductList      from 'page/product/index/index.jsx';
import ProductDetail from 'page/product/index/detail.jsx'
import ProductSave from 'page/product/index/save.jsx'

class ProductRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/product/index" component={ProductList}></Route>
                <Route path="/product/detail/:pid" component={ProductDetail}></Route>
                <Route path="/product/save/:pid?" component={ProductSave}></Route>
                <Redirect exact from="/product" to="/product/index" />
            </Switch>
        )
    }
}

export default ProductRouter
