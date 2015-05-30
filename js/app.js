/**
 * Created by nuwan on 5/30/15.
 */

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/login.js';
import ContactHandler from './components/contact.js';


class App extends React.Component {
    render(){
        return (<div className="nav">
            <Link to="app">Home</Link>
            <Link to="login">Login</Link>
            <Link to="contact">Contact</Link>

            <RouteHandler/>
        </div>);
    }
}


let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" path="/login" handler={LoginHandler}/>
        <Route name="contact" path="/contact" handler={ContactHandler}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
