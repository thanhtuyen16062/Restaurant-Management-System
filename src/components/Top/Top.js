import React, { Component } from 'react';

export class Top extends Component {
    render() {
        return (
            <div className="header__top" id="header__top">
                <div className="header__icons">
                  <i className="fa fa-facebook" />
                  <i className="fa fa-twitter" />
                  <i className="fa fa-google-plus" />
                  <i className="fa fa-linkedin" />
                </div>
              </div>
        );
    }
}

export default Top;
