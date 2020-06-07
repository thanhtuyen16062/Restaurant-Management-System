import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
              <div className="footer__content">
                <div className="footer__item subscribe">
                  <h1>Send us your feedback</h1>
                  <div className="input__container">
                    <input type="email" placeholder="Enter your email..." method="GET" />
                    <i className="fa fa-envelope" />
                  </div>
                </div>
                <div className="footer__item links">
                  <h1>Our Links</h1>
                  <span>Home</span>
                  <span>Menu</span>
                  <span>Order food</span>
                  <span>Contact</span>
                </div>
                <div className="footer__item contactFooter">
                  <h1>Contact Us</h1>
                  <div className="footer__icon">
                    <i className="fa fa-location-arrow" />
                    <p>32A, 4th block, Cao Thang street, Ho Chi Minh City.</p>
                  </div>
                  <div className="footer__icon">
                    <i className="fa fa-envelope" />
                    <p>SPMrestaurant@example.com</p>
                  </div>
                  <div className="footer__icon">
                    <i className="fa fa-phone" />
                    <p>+1234 567 567</p>
                  </div>
                </div>
              </div>
              <div className="footer__end">
                <i className="fa fa-copyright" />
                <p>2019 RMS. All Rights Reserved | Design by <span>RMS project</span></p>
              </div>
              <a className="true" href="#header__top"><img src="../img/arrow.png" alt="omg" /></a>
            </footer>
        );
    }
}

export default Footer;
