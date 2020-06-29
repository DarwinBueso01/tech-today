import React, { Component } from "react";
import Navbar from '../../Navbar/Navbar';
import '../../User/user.css'; 


export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar page="loginPage"/>
            <div className="auth-inner">
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">Password?</a>
                </p>
            </form>
            </div>
            </React.Fragment>

        );
    }
}
