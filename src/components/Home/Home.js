import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Top from '../Top/Top';
import Footer from '../Footer/Footer';

export class Home extends Component {
    render() {
        return (
            <div className="wrapper">
            {/*HEADER*/}
            <header className="header">
              <Top />
              <Nav />
            </header>
            {/* END HEADER */}
            {/* CAROUSEL */}
            <div className="carousel">
              <div className="overlay">
                <div className="carousel__content">
                  <h1>ORGANIC FAST FOOD MADE
                    EASY AND HEALTHY.</h1>
                  <p>
                  </p>
                  <button className="btn aboutUs">About Us</button>
                  <button className="btn readMore">View Menu</button>
                  <div className="carousel__icons icon1">
                    <i className="fa fa-circle" />
                    <div className="carousel__icons23 icon23">
                      <i className="fa fa-circle" />
                      <i className="fa fa-circle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END CAROUSEL */}
            {/* CONCEPT */}
            <div className="concept">
              <div className="concept__title">
                <h1>CONCEPT</h1>
              </div>
              <div className="concept__content">
                As the first modern Lao restaurant chain in Vietnam, Khao Lao desires to bring the quintessential cuisine - a complete harmony of traditional cuisine and modern cuisine - while retaining the original unique flavor. Japanese version, just suitable for the taste of most international customers.
              </div>
            </div>
            {/* END CONCEPT */}
            {/* SPECIAL FOOD */}
            <br />
            <div className="special">
              <div className="special__intro">
                <img src="../img/sf.PNG" alt="Special Food" />
                <img src="../img/sf1.PNG" alt="Special Food" />
              </div>
            </div>
            {/* END SPECIAL FOOD */}
            {/* SPACE */}
            <div className="space">
              <div className="space__title">
                <h1>SPACE</h1>
              </div>
              <div className="space__content">
                With 18 restaurants across the country, with a warm, modern golden brown space - Khao Lao promises to be a great culinary space for all diners.
                  Once to Khao Lao, to the rustic, simple but no less attractive, impressive from the restaurant space, the harmony of the dishes, the friendliness of the people of Khao Lao for you.
              </div>
            </div>
            {/* END SPACE */}
            <br /><br />
            {/* FOOTER */}
            <Footer />
            {/* END FOOTER */}
          </div>
      
        );
    }
}

export default Home;
