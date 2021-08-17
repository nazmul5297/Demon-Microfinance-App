import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function CheckerUser() {
    return (

        <Router >
            <Navbar />
        </Router>
    );
}

export default CheckerUser;

// if (document.getElementById('admin')) {
//     ReactDOM.render( < Admin /> , document.getElementById('admin));
// }