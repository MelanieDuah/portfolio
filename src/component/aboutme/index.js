import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/image7.jpg';

class Aboutme extends React.Component {
    render(){
        return(
            <div>
        <header className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                        aria-controls="navbarToggler">
                        <span className="navbar-toggler-icon"></span>
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
            <div className="col-xs-12 col-sm-12 col-md-8 h-100">
                <div className="card shadow-sm ml-1 my-1 h-100">
                    <div className="ml-3 mr-3 mt-1">
                        <p className="h1 text-muted">About Me</p>
                        My name is Melanie, and I enjoy meeting new people and finding ways to help
                        them have an uplifting experience.
                        I have a wonderful family who are very supportive of me and I am always thankful for them.
                        I was born and raised in Ghana, Africa but I'm currently residing in the US. I go back to Ghana
                        every now and then and I find each trip such and enjoyable experience.
                        I have a Degree in Economis but current trying to switch from my current study to Web
                        Development.
                        <hr />
                        <p className="h1 text-muted">Interests</p>
                        <ul>
                            <li>Reading</li>
                            <li>Traveling</li>
                            <li>Cooking</li>
                        </ul>
                        <hr />
                        <p className="h1 text-muted">Education</p>
                        Bachelor Of Science(Economis)
                        <hr />
                        <p className="h1 text-muted">Dreams and Aspirations</p>
                        My biggest dream is to be able to take care of my family financially and physically, I guess. I
                        mean your parents, when you grew up,
                        they take care of you and everything, so my parents did everything they could to give me a good
                        life.
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
export default Aboutme;