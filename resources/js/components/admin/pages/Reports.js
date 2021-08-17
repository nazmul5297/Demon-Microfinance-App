import React, { Component } from "react";
// import { Table, Button } from "reactstrap";
import axios from "axios";
import DataTable from './DataTable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import membership from "./membership";
import './datatable.css'
import ReactToPrint from "react-to-print";
// import './comiteesetup.css';
import { AiOutlineSearch, AiFillPrinter } from "react-icons/ai";
import Reports from "../../Reports";
import './report.css';
import Header from './Header'

class Report extends Component {


    render() {
        return (
            <>
                <Header />
                <div className="front">
                    <Reports />
                </div>
            </>
        )
    }
}



export default Report;