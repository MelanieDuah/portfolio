import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/image7.jpg';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <header className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                                aria-controls="navbarToggler">
                                <span className="navbar-toggler-icon navbar-dark"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarToggler">
                                <div className="navbar-nav">
                                <NavLink className="nav-item nav-link active text-light" to="/">Home</NavLink>
                                <NavLink className="nav-item nav-link active text-light" to="/about">About</NavLink>
                                <NavLink className="nav-item nav-link active text-light" to="/portfolio">Portfolio</NavLink>
                                <NavLink className="nav-item nav-link active text-light" to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <article className="row h-100">
                    <div className="col-xs-12 col-md-4">
                        <div className="card h-100 w-100 shadow-sm ml-1 mt-1">
                            <div>
                            <img className="img-fluid aboutmeimg h-md-50 h-xs-100" src={logo} alt="image aboutme" />
                                <div className="ml-3">

                                    <div>
                                        <h3>Find me</h3>
                                    </div>
                                    <div className="contact">
                                        <NavLink className="mr-4" to="https://www.facebook.com/melanie.duah"><i
                                            className="fa fa-facebook-square"></i></NavLink>
                                        <NavLink className="mr-4" to="https://www.instagram.com/iam_melanie/"><i
                                            className="fa fa-instagram"></i></NavLink>
                                        <NavLink to="melanieduah@gmail.com"><i className="fa fa-envelope-square"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-8 h-100">
                        <div className="card h-100 shadow-sm mr-1 my-1">
                            <div className="row ml-2 mt-3 mr-3">
                                <div className="col-12">
                                    <span className="h3">Contact</span>
                                    <hr />
                                </div>
                                <div className="col-12">
                                    <form>
                                        <div className="form-group">
                                            <label for="fullname">Name</label>
                                            <input type="text" id="fullname" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input type="text" id="email" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="messages">Messages</label>
                                            <textarea className="form-control" id="messages" rows="3"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-secondary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <footer className="row fixed-bottom">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="ending">
                            <span className="h5 text-light">&copy; All rights reserved </span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Contact;