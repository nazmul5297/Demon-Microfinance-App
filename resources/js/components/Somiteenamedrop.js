
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class Somiteenamedrop extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <>

                <option value={this.props.obj.somiteename}> {this.props.obj.somiteename} </option>

            </>

        );
    }
}