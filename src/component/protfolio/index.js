import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/image7.jpg';

class Portfolio extends React.Component {
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
                            <div className="contact ml-3">
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
                    <span className="h3 ml-3 mr-3 mt-2">Portfolio</span>
                    <hr/>
                    <div className="card-body col-12 row ml-3 mr-3">
                        <div className="col-xs-12 col-sm-4">
                            <img className="img-thumbnail portfolio-img img-fluid" alt="sunset love"
                                src="./images/image1.jpg"/>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <img className="img-thumbnail portfolio-img img-fluid" alt="flower love"
                                src="./images/image2.jpg"/>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <img className="img-thumbnail portfolio-img img-fluid" alt="book love"
                                src="./images/image3.jpg"/>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <img className="img-thumbnail portfolio-img img-fluid" alt="on the edge"
                                src="./images/image4.jpg"/>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <img className="img-thumbnail portfolio-img img-fluid" alt="dinasour" src="./images/image5.jpg"/>
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
export default Portfolio;