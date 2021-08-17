import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Admin() {
    return (

        <Router >
        <Navbar />
        </Router> 
    );
}

export default Admin;

// if (document.getElementById('admin')) {
//     ReactDOM.render( < Admin /> , document.getElementById('admin));
// }