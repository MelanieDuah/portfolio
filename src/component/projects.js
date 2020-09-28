import React from 'react';
import weather from '../images/weather.png';
import Dailytracker from '../images/daylytracker.png';
import Notetaker from '../images/notetaker.png';
import Password from '../images/password.png';
import Quiz from '../images/quiz.png';
import Transaction from '../images/transaction.png';
import Image from '../images/image2.png';
import GardenHelper from '../images/gardenhelper.png';
import MovieGenre from '../images/moviegenre.png';
import Navigation from './navigation';
import Footer from './footer';

class Projects extends React.Component {
    render() {
        return (
            <div className="container-fliud h-100 hero-image hero-image2">
                <Navigation />
                <div className="row projectsintro">
                    <div className="col-12">
                        <span className="h5 text-white w-100 ml-5">Here are some of the things I've been working on...</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div id="projectcarousel" className="carousel slide carouselcontainer" data-ride="carousel">
                            <div className="carousel-inner w-100">
                                <div className="carousel-item active">
                                    <img className="w-100 img-fluid img-rounded" src={weather} alt="First slide" />
                                </div>
                                 <div className="carousel-item">
                                    <img className="w-100 img-fluid img-rounded" src={GardenHelper} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid img-rounded" src={MovieGenre} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid img-rounded" src={Dailytracker} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid img-rounded" src={Notetaker} alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid img-rounded" src={Password} alt="fourth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid img-rounded" src={Quiz} alt="fiveth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid img-rounded" src={Transaction} alt="sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid img-rounded" src={Image} alt="seventh slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#projectcarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#projectcarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Projects;