import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Top from '../Top/Top';
import Nav from '../Nav/Nav';

export class Contact extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="menu__header">
                    <Top />
                    <Nav />
                    <div className="carousel__content">
                        <h1 style={{fontFamily: 'cursive, sans-serif'}}>CONTACT</h1>
                    </div>
                </header>


                <footer>
                    <Footer />
                </footer>

                
            </div>
        );
    }
}

export default Contact;
