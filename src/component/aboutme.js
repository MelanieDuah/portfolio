import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../images/image7.jpg';
import Footer from './footer';
import Navigation from './navigation';


class AboutMe extends React.Component {
    render() {
        return (
            <div className="container-fliud h-100 hero-image hero-image2">
                <Navigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 h-75">
                            <div className="card-body">
                                <h5 className="card-title">Melanie Agyemang Duah</h5>
                                <div className='my-5 mx-5'>
                                    <img className='float-left img-fluid mr-3' src={photo} />
                                    <p className="text-justify text-muted lead">I'm a web developer.</p>
                                    <p className="text-justify text-muted">
                                        I am fueled by my passion for problem solving and continous learning of new technologies.
                                        As a matter of fact, I consider myself a student for life, eager to both build on my academic foundations in Economics
                                        while keeping up with the latest in web development technologies through continued coursework and professional development.
                                    </p>
                                    <p className="text-justify text-muted">
                                        My hunger for knowledge and determination to constantly evolve and acquire new skills is what contributed to my decision pick up programming and web development. 
                                        I believe in mindfulness, maintaining a postive outlook all the time, and staying healthy. These are tenets I live out through my interests in meditation, reading, and working out.
                                        I am currently completing a web development bootcamp program at Northwestern University and I am looking forward to the next challenge.  
                                        <NavLink to="/contact"> Reach out to me and lets connect!</NavLink>
                                    </p>
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
                <Footer />
            </div>
        )
    }
}
export default AboutMe;