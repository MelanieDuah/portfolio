import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../images/image7.jpg';
import { MailSlurp } from "mailslurp-client";
import Navigation from './navigation';
import Footer from './footer';
const mailslurp = new MailSlurp({ apiKey: "af09981b8affd4ed72c06191454258b498d6f3196de5bdf9fc25f57e5acd5cb3" });

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }


    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    resetForm() {

        this.setState({ name: '', email: '', message: '' })
    }

    async handleSubmit(event) {
        event.preventDefault();
        let inbox = await mailslurp.getInbox('6ecd2217-2e07-4a27-8dd7-92ef3af2a991');
        const options = {
            to: ['melanieduah@gmail.com'],
            subject: 'Hey Melanie, I just checked out your portfolio',
            body: `Message from: ${this.state.name}.
                      
                  ${this.state.message}

                My email is: ${this.state.email}`
        }
        await mailslurp.sendEmail(inbox.id, options);
        this.resetForm();
        alert('message received')
    }

    render() {
        return (
            <div className="container-fliud h-100 hero-image hero-image2">
                <Navigation/>
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 h-75 d-flex">
                            <div className="card-body">
                                <h5 className="card-title">Let's start a conversation</h5>
                                <form id="contact-form" onSubmit={(e) => this.handleSubmit(e)}>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" id="fullname" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" id="email" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Messages</label>
                                            <textarea className="form-control" id="messages" rows="3" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-secondary">Submit</button>
                                    </div>
                                </form>
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
            </div >
        )
    }
}

export default Contact;