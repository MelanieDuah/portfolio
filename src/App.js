import React from 'react';
import './index.css';
import Index from './component/index/index';
import { Route, Switch } from 'react-router-dom'
import Aboutme from './component/aboutme/index';
import Contact from './component/contact/index';
import Portfolio from './component/protfolio/index';



export default function App() {
    return (
        <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/about' component={Aboutme} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
        </Switch>
    );
}
