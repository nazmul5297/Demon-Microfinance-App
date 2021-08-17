

import React, { Component } from "react";
// import { Table, Button } from "reactstrap";
import axios from "axios";
import DataTable from './DataTable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './datatable.css';


class Request extends Component {

    constructor(props) {
        super(props)
        this.state = {
            membershipdata: []
        }
    }

    //   componentDidMount() {
    //     axios.get('/show')
    //       .then(res => {
    //         // this.setState({
    //         //   expenses: res.data
    //         // });
    //         //console.log(res.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //   }

    DataTable() {
        return this.state.membershipdata.map((res, i) => {
            return <DataTable obj={res} key={i} />;
        });
    }


    componentDidMount() {
        axios.get(`http://192.168.0.111:8000/api/find_member`)
            .then(res => {
                const membershipdata = res.data;
                this.setState({ membershipdata });
            })
    }


    hadleclick(e) {
        //       console.log({this.state.membershipdata})
    }




    render() {
        return (

            <div className="main_body">
                <div className="Table_manupulation">
                    <div className="table-area">
                        <table className="table_format">
                            <thead>
                                <tr>

                                    <th>Office ID</th>
                                    <th>Barnch ID </th>
                                    <th>SomiteeName</th>
                                    <th>Fullname</th>
                                    <th>FatherName</th>
                                    <th>MotherName</th>
                                    <th>Phone</th>
                                    <th>Nid</th>
                                    <th> Nomini Name</th>
                                    <th>Nomini Nid</th>
                                    <th>Approve</th>
                                    <th>Reject</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.DataTable()}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        );
    }

}

export default Request;

