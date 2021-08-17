import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IconContext } from 'react-icons';


export default class DataTable extends Component {
    constructor(props) {
        super(props);
        this.deleteMemberrship = this.deleteMemberrship.bind(this);
    }

    deleteMemberrship(e) {
        e.preventDefault();
        axios.delete(`http://192.168.0.111:8000/api/office_delete/` + this.props.obj._id)
            .then((res) => {
                console.log('delet sucessfully')
            }).catch((error) => {
                console.log(error)
            }),

            () => this.props.getoffice
    }
    render() {

        return (

            <tr>
                <td>{this.props.obj.officeid}</td>
                <td>{this.props.obj.officename}</td>
                <td>{this.props.obj.adress}</td>


                <td>
                    <IconContext.Provider value={{ color: 'black', fontSize: '2.5rem' }}>
                        <div className="add">

                            <AiFillEdit style={{ cursor: 'pointer', fontSize: '2.5rem' }} onClick={this._next} />

                        </div>
                    </IconContext.Provider>


                </td>
                <td>
                    <IconContext.Provider value={{ color: 'black', fontSize: '1.5rem' }}>
                        <div className="add">
                            <AiFillDelete style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={this.deleteMemberrship} />
                        </div>
                    </IconContext.Provider>


                </td>
            </tr>



        );
    }
}