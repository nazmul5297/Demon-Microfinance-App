
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React, { Component } from 'react'

export default class MakerDashboard extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Router >
                <Navbar />
            </Router>
        )
    }
}




// export default MakerDashboard;

// if (document.getElementById('makerdashboard ')) {
//     ReactDOM.render(< MakerDashboard />, document.getElementById('makerdashboard '));
// }