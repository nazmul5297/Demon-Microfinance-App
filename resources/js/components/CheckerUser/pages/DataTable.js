import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './datatable.css';
import { FcApprove, FcDisapprove } from "react-icons/fc";
import { IconContext } from 'react-icons';

export default class DataTable extends Component {
    constructor(props) {
        super(props);
        this.deleteMemberrship = this.deleteMemberrship.bind(this);
    }

    deleteMemberrship(e) {
        e.preventDefault();
        axios.delete(`http://127.0.0.1:8000/api/membershipform/` + this.props.obj._id)
            .then((res) => {
                console.log('delet sucessfully')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {

        return (

            <tr>

                <td>{this.props.obj.officeid}</td>
                <td>{this.props.obj.branchid}</td>
                <td>{this.props.obj.somiteename}</td>
                <td>{this.props.obj.fullname}</td>
                <td>{this.props.obj.fathername}</td>
                <td>{this.props.obj.mothername}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.nid}</td>
                <td>{this.props.obj.nomini_fullname}</td>
                <td>{this.props.obj.nomini_nid}</td>

                <td>
                    {/* <Link className="edit-link">
                        <button size="sm" variant="info">Edit</button>
                    </Link> */}
                    {/* <Button onClick={this.deleteMemberrship} size="sm" variant="danger">Delete</Button>  */}
                    {/* <link className="edit-link" to={"/edit-expense/" + this.props.obj.id}>
                   <button size="sm" variant="info">Edit</button>
                </link> */}
                    {/* <button onClick={this.deleteMemberrship} size="sm" variant="danger">Delete</button> */}


                    <IconContext.Provider value={{ color: 'black', fontSize: '2.5rem' }}>
                        <div className="add">

                            <FcApprove style={{ cursor: 'pointer', fontSize: '2.5rem' }} onClick={this._next} />

                        </div>
                    </IconContext.Provider>


                </td>
                <td>
                    <IconContext.Provider value={{ color: 'black', fontSize: '2.5rem' }}>
                        <div className="add">
                            <FcDisapprove style={{ cursor: 'pointer', fontSize: '2.5rem' }} onClick={this._next} />
                        </div>
                    </IconContext.Provider>


                </td>
            </tr>



        );
    }
}