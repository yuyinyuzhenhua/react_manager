import React from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Home from 'page/home/index.jsx'
import User from 'page/user/index.jsx'
import Product from 'page/product/router.jsx'
import Layout  from 'component/layout/index.jsx'
import Login from 'page/login/index.jsx'
import ProductRouter    from 'page/product/router.jsx';


class App extends React.Component{
    render(){
        let LayoutRouter= (
                <Layout>
                    <Switch>product/detail
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/product" component={ProductRouter}></Route>
                        <Route path="/user" exact component={User}></Route>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </Layout>
        )

        return (
            <Router>
                <Switch>
                    <Route path="/login"  component={Login}></Route>
                    <Route path="/" render={props => LayoutRouter}></Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)