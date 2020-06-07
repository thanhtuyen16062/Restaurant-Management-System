import React, { Component } from 'react';
import Top from '../Top/Top';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

export class Cart extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="menu__header">
                    <Top />
                    <Nav />
                    <div className="carousel__content">
                        <h1 style={{fontFamily: 'cursive, sans-serif'}}>CART</h1>
                    </div>
                </header>

                <div>
                <br /> <br /> <br />
                <center>
                <table style={{width: '80%'}}>
                    <thead>
                        <tr>
                        <th><center>Food Name</center></th>
                        <th><center>Quantity</center></th>
                        <th><center>Price of a dish</center></th>
                        <th><center>price of food in large quantities</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Garlic butter toast</td>
                            <td>1</td>
                            <td>50</td>
                            <td>50</td>
                            
                        </tr>
                        <tr>
                            <td>Beijing roast duck</td>
                            <td>2</td>
                            <td>55</td>
                            <td>110</td>
                            
                        </tr>
                        <tr>
                            <td><center>Total</center></td>
                            <td></td>
                            <td></td>
                            <td>160</td>
                            
                        </tr>
                    </tbody>
                </table>
                </center>
                </div>

                <br /> 
                
                <center><button type="button" className="btn btn-outline-success btn-sm">Pay</button></center>

                <br /> <br />
                <hr />

                <center><button type="button" className="btn btn-outline-success btn-sm">Confirm</button></center>

                <br /> <br />

                <footer>
                    <Footer />
                </footer>

            </div>
        );
    }
}

export default Cart;
