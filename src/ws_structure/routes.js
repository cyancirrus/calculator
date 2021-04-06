import React from 'react';
import App from '../App';
import sayHello from './blog';
import WebsiteMetaStructure from './structure';
import { HashRouter, Route } from 'react-router-dom';
import LandingPage from './main_page';

export default (
    <HashRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/home" component={LandingPage}/>
            <Route path="/calculator" component={WebsiteMetaStructure}/>
            <Route path="/blog" component={sayHello}/>
        </div>
    </HashRouter>
);
