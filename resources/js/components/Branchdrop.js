import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class Branchdrop extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <>

                <option value={this.props.obj.officeid}> {this.props.obj.officename} [{this.props.obj.officeid}] </option>

            </>

        );
    }
}