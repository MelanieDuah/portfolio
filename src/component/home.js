import React from 'react';
import { NavLink } from 'react-router-dom';

class Intro extends React.Component {
    render() {
        return (
            <div className="container-fliud h-100 hero-image">
                <header className="row">
                    <div className="col-md-12 d-flex justify-content-end">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
                                data-target="#navbarToggler" aria-controls="navbarToggler">
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
                <div className="row h-100">
                    <div className="col-md-12">
                        <div className="hero-text">
                            <h1 className="greeting">Hi, I'm Melanie</h1>
                        </div>
                    </div>
                </div>
                <footer className="row fixed-bottom">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="ending">
                            <span className="h5 text-light">&copy; All rights reserved </span>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Intro;