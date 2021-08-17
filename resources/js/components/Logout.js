import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import Home from './homepage/Home';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: true,
        };

    }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />;
            this.setState({ redirect: false });

        }


        return (
            <div>
                <h1>still login</h1>
            </div>
        )
    }
}
