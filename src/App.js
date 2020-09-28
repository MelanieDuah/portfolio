import React from 'react';
import './index.css';
import Index from './component/home';
import { Route, Switch } from 'react-router-dom'
import Aboutme from './component/aboutme';
import Contact from './component/contact';
import Projects from './component/projects';



export default function App() {
    return (
        <Switch>
            <Route exact path='/portfolio' component={Index} />
            <Route path='/portfolio/about' component={Aboutme} />
            <Route path='/portfolio/projects' component={Projects} />
            <Route path='/portfolio/contact' component={Contact} />
        </Switch>
    );
}
