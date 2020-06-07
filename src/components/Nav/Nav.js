import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
  
export class Nav extends Component {
    render() {
        return (
            <div>
                {/* NAVIGATION BAR */}
                <nav className="header__bot">
                    <div className="header__logo">
                    <p className="header__logoFisrtLetter">FOOD</p>
                    <p className="header__logoSecondLetter">RESTAURANT</p>
                    </div>
                    <div className="header__nav">

                    <ul>
                        <li><NavLink activeClassName="active" to="/">HOME</NavLink></li>
                        <li><NavLink activeClassName="active" to="/menu">MENU</NavLink></li>
                        <li><NavLink activeClassName="active" to="/promotion">PROMOTION</NavLink></li>
                        <li><NavLink activeClassName="active" to="/cart">CART</NavLink></li>
                        <li><NavLink activeClassName="active" to="/contact">CONTACT</NavLink></li>
                        <li><NavLink activeClassName="active" to="/login">LOG-IN</NavLink></li>
                        
                    </ul>

                    </div>
                </nav>
              {/* END NAVIGATION BAR */}
            </div>
        );
    }
}

export default Nav;
