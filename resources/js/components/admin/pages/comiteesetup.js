// import React from 'react';
import React, { Component } from 'react';
import axios from "axios";
import './comiteesetup.css';
import Header from './Header'


class comiteesetup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comiteetype: '',
            comiteename: '',
            officeid: '',
            branchid: '',
            comiteecharge: '',
            formationdate: '',
        }

        this.comiteetype = this.comiteetype.bind(this);
        this.comiteename = this.comiteename.bind(this);
        this.officeid = this.officeid.bind(this);
        this.branchid = this.branchid.bind(this);
        this.comiteecharge = this.comiteecharge.bind(this);
        this.formationdate = this.formationdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    comiteetype(event) {
        this.setState({ comiteetype: event.target.value })
    }
    comiteename(event) {
        this.setState({ comiteename: event.target.value })
    }
    officeid(event) {
        this.setState({ officeid: event.target.value })
    }
    branchid(event) {
        this.setState({ branchid: event.target.value })
    }
    comiteecharge(event) {
        this.setState({ comiteecharge: event.target.value })
    }
    formationdate(event) {
        this.setState({ formationdate: event.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();









        const packets = {
            comiteetype: this.state.comiteetype,
            comiteename: this.state.comiteename,
            officeid: this.state.officeid,
            branchid: this.state.branchid,
            comiteecharge: this.state.comiteecharge,
            formationdate: this.state.formationdate,
        };
        axios.post('/sendrequest', packets)
            .then(
                response => alert("Data Save Sucessfully")

            )
            .catch(error => {
                console.log("ERROR:: ", error.response.data);

            });
    }






    render() {
        return (
            <>
                <Header />

                <div className='body'>
                    <div className='container' >
                        <div className="title" > Comitee Setup Form </div>
                        <div className='content'>

                            <form >
                                <div className="user-details" >
                                    <div className="input-box" >
                                        <span className="details" > Comitee Type </span>
                                        <input type="text" placeholder=" Enter Comitee type" onChange={this.comiteetype} required />
                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > Comitee Name </span>
                                        <input type="text" placeholder="Enter Comitee Name" onChange={this.comiteename} required />
                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > Office Id </span>
                                        <input type="text" placeholder="Enter office id " onChange={this.officeid} required />
                                    </div>


                                    <div className="input-box" >
                                        <span className="details" > Branch Id </span>
                                        <input type="text" placeholder="Enter branch id" onChange={this.branchid} required />
                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > Comitee In charge </span>
                                        <input type="text" placeholder="Enter the name of comitee in" onChange={this.comiteecharge} required />
                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > Comitee Setup Date </span>
                                        <input type="date" placeholder="Confirm your password" onChange={this.formationdate} required />
                                    </div>
                                </div>


                                <div className="button" >
                                    <div className="add" >
                                        <input type="submit" value="+" onClick={this.handleSubmit} />
                                    </div>

                                    <div className="reset" >
                                        <input type="submit" value="-" />
                                    </div>

                                    <div className="cancel" >
                                        <input type="submit" value="-" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default comiteesetup;
