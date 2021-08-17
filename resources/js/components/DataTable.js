import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class DataTable extends Component {
    constructor(props) {
        super(props);
        // this.deleteMemberrship = this.deleteMemberrship.bind(this);
    }

    // deleteMemberrship(e) {
    //     e.preventDefault();
    //     axios.delete(`http://127.0.0.1:8000/api/membershipform/` + this.props.obj._id)
    //         .then((res) => {
    //             console.log('delet sucessfully')
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }
    render() {

        return (

            <tr>
                <td>{this.props.obj.fullname}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.nomini_fullname}</td>
                <td>{this.props.obj.nomini_phone}</td>

            </tr>



        );
    }
}