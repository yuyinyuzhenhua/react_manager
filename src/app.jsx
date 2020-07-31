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
import Layout  from 'component/layout/index.jsx'
import Login from 'page/login/index.jsx'


class App extends React.Component{
    render(){
        let LayoutRouter= (
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Redirect from="*" to="/"/>
                        <button>test</button>
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