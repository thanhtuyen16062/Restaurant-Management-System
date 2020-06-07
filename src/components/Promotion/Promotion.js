import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Top from '../Top/Top';

export class Promotion extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="menu__header">
                    <Top />
                    <Nav />
                    <div className="carousel__content">
                        <h1 style={{fontFamily: 'cursive, sans-serif'}}>PROMOTION</h1>
                    </div>
                </header>

                <div className="promotion">
                    <center><h2 style={{fontFamily: 'cursive, sans-serif'}}>Today's Deals</h2></center>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="../img/km.jpg" alt="" width="400px" height="400px" />
                            <center>
                                <p>FOOD RESTAURANT</p>
                            </center>
                        </div>
                        <div className="col-lg-6">
                            <img src="../img/km1.jpg" alt="" width="400px" height="400px" />
                            <center>
                            <p> 20% DISCOUNT </p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Promotion;
