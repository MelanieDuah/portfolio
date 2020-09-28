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
            <Route exact path='/' component={Index} />
            <Route path='/about' component={Aboutme} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
        </Switch>
    );
}
