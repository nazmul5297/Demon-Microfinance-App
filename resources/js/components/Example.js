import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './homepage/Header';
import Footer from './homepage/Footer';
import Login from './homepage/Login';
import Register2 from './homepage/Register2';
import About from './homepage/About';
import Home from './homepage/Home';
import Admin from './admin/Admin';
import CheckerUser from './CheckerUser/CheckerUser';
import Navbar from './admin/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MakerDashboard from './MakerDashboard';

class Example extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch >
                        <Route exact path="/" >
                            <Home />
                        </Route>
                        <Route exact path="/about" >
                            <About />
                        </Route>

                        <Route exact path="/login" >
                            <Login />
                        </Route>
                        <Route exact path="/register" >
                            <Register2 />
                        </Route>
                        <Route exact path="/makerdashboard" >
                            <MakerDashboard />
                        </Route>
                        <Route exact path="/admin" >
                            <Navbar />
                        </Route>
                        <Route exact path="/checkeruser" >
                            <CheckerUser />
                        </Route>
                    </Switch>

                </Router>
            </>
        );
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(< Example />, document.getElementById('example'));
}