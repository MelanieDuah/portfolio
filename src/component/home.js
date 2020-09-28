import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './navigation';

class Intro extends React.Component {
    render() {
        return (
            <div className="container-fliud h-100 hero-image">
                  <Navigation />
                <div className="row h-100">
                    <div className="col-md-12">
                        <div className="hero-text">
                            <h1 className="greeting">Hi, I'm Melanie</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Intro;