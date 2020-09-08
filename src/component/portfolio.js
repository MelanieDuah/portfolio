import React from 'react';
import { NavLink } from 'react-router-dom';
import weather from '../images/weather.png';
import Burger from '../images/burger.png';
import Dailytracker from '../images/daylytracker.png';
import Googlebook from '../images/googlebook.png';
import Notetaker from '../images/notetaker.png';
import Password from '../images/password.png';
import Quiz from '../images/quiz.png';
import Transaction from '../images/transaction.png';
import Image from '../images/image2.png'
import Navigation from './navigation';
import Footer from './footer';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="container-fliud h-100 hero-image hero-image2">
               <Navigation/>
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 h-75">
                            <div className="card-body">
                                <h5 className="card-title">Here are some of the things I've been working on</h5>
                                <div className="d-flex flex-row flex-wrap justify-content-around">
                                    <a href={"https://melanieduah.github.io/Assignments/week7/"}><img src={weather} alt="weather project"  className="img-fluid img-thumbnail" /></a> 
                                    <a href=''><img src={Burger} alt="burger project"  className="img-fluid img-thumbnail" /></a>
                                    <a href={"https://melanieduah.github.io/Assignments/week6/"}><img src={Dailytracker} alt="daylytracker project"  className="img-fluid img-thumbnail" /></a> 
                                    <a href=''><img src={Googlebook} alt="googlebook project" className="img-fluid img-thumbnail" /></a>
                                    <a href={"https://melanieduah.github.io/Assignments/Week2/"}><img src={Image} alt="image project" className="img-fluid img-thumbnail" /></a>
                                    <a href='https://notetakerhomeworkmelanie.herokuapp.com/'> <img src={Notetaker} alt="notetaker project"  className="img-fluid img-thumbnail" /></a>
                                    <a href={"https://melanieduah.github.io/Assignments/week4/"}><img src={Password} alt="password project"  className="img-fluid img-thumbnail" /></a>
                                    <a href={"https://melanieduah.github.io/Assignments/week5/"}><img src={Quiz} alt="quiz project" className="img-fluid img-thumbnail" /></a>
                                    <a href={'https://budgettrackerindexdbhomework.herokuapp.com/'}><img src={Transaction} alt="transaction project"  className="img-fluid img-thumbnail" /></a>
                                    <a href={"https://melanieduah.github.io/Assignments/week7/"}><img src={weather} alt="weather project"  className="img-fluid img-thumbnail" /></a> 
                                </div>

                            </div>
                            <div className="d-flex flex-row justify-content-end my-4 mr-4">
                                <NavLink className="mr-4" to="https://www.facebook.com/melanie.duah"><i
                                    className="fa fa-facebook-square"></i></NavLink>
                                <NavLink className="mr-4" to="https://www.instagram.com/iam_melanie/"><i
                                    className="fa fa-instagram"></i></NavLink>
                                <NavLink to="melanieduah@gmail.com"><i className="fa fa-envelope-square"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
               <Footer/>
            </div>
        )
    }
}
export default Portfolio;