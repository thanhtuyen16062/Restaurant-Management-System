import React, { Component } from 'react';
import Top from '../Top/Top';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

export class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="menu__header">
                    <Top />
                    <Nav />
                    <div className="carousel__content">
                        <h1 style={{fontFamily: 'cursive, sans-serif'}}>LOGIN</h1>
                    </div>

                    <div></div>

                </header>
                <br />
                {/* FORM */}
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                        <span><i className="fa fa-facebook-square" /></span>
                        <span><i className="fa fa-google-plus-square" /></span>
                        <span><i className="fa fa-twitter-square" /></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user" /></span>
                            </div>
                            <input type="text" className="form-control" placeholder="username" />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-key" /></span>
                            </div>
                            <input type="password" className="form-control" placeholder="password" />
                        </div>
                        <div className="row align-items-center remember">
                            <input type="checkbox" />Remember Me
                        </div>
                        <div className="form-group">
                            <button>Log in</button>
                        </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                        Don't have an account?<a href="#">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* END FORM */}

                <br /> <br /> <br />

                <footer><Footer /></footer>

                </div>
        );
    }
}

export default Login;
