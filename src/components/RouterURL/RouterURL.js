import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Menu from '../Menu/Menu';
import Promotion from '../Promotion/Promotion';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';

export class RouterURL extends Component {
    render() {
        return ( 
           <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/menu" component={Menu}/>
                        <Route path="/promotion" component={Promotion}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/login" component={Login}/>
                        <Route component={Home}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default RouterURL;
