import React from 'react';
import App from '../App'
import sayHello from './blog'
import WebsiteMetaStructure from './structure'
import { HashRouter, Route } from 'react-router-dom';
export default (
    <HashRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/what" component={WebsiteMetaStructure}/>
            <Route path="/huh" component={sayHello}/>
        </div>
    </HashRouter>
);
