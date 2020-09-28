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
                    <div className="col-sm-12 d-flex justify-content-center">
                        <div className="card w-75 h-75">
                            <div className="card-body overflow-auto">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <h5 className="card-title">Melanie Agyemang Duah</h5>
                                    </div>
                                </div>
                                <div className='row my-2 mx-5'>
                                    <div className='col-sm-12'>
                                        <img className='float-left img-fluid mr-3' alt='hero' src={photo} />
                                        <p className="text-justify lead">I'm a web developer.</p>
                                        <p className="text-justify">
                                            I am a creative and resourceful individual with an educational background in Economics and newly acquired skills in Javascript, Node.js, MySQL MongoDB among others and looking to kickstart a career in Web Development.
                                            I am proactive and highly reliable with excellent communication skills, both written and verbal. I am hardworking, driven, and adept at leveraging sound analytical and problem solving skills to design and develop web applications
                                        </p>
                                        <p className="text-justify">
                                            I am fueled by my passion for problem solving and continous learning of new technologies.
                                            As a matter of fact, I consider myself a student for life, eager to both build on my academic foundations in Economics
                                            while keeping up with the latest in web development technologies through continued coursework and professional development.
                                        </p>
                                        <p className="text-justify">
                                            My hunger for knowledge and determination to constantly evolve and acquire new skills is what contributed to my decision pick up programming and web development.
                                            I believe in mindfulness, maintaining a postive outlook all the time, and staying healthy. These are tenets I live out through my interests in meditation, reading, and working out.
                                            I am currently completing a web development bootcamp program at Northwestern University and I am looking forward to the next challenge.
                                        <NavLink to="/portfolio/contact"> Reach out to me and lets connect!</NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className="d-flex flex-row justify-content-end my-4 mr-4">
                                        <a className="mr-4" href="https://www.facebook.com/melanie.duah"><i
                                            className="fa fa-facebook-square"></i></a>
                                        <a className="mr-4" href="https://www.instagram.com/iam_melanie/"><i
                                            className="fa fa-instagram"></i></a>
                                        <a href="melanieduah@gmail.com"><i className="fa fa-envelope-square"></i></a>
                                        <a className="ml-3" href="https://www.linkedin.com/in/melanie-duah-9370381a1/"><i className='fa fa-linkedin'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default AboutMe;