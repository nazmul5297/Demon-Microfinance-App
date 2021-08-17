// import React from 'react';
import React, { Component } from 'react';
import axios from "axios";
import './comiteesetup.css';
import { AiFillSave } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { IconContext } from 'react-icons';
import Branchdrop from './Branchdrop';
import Somiteedrop from './Somiteedrop';
import Swal from 'sweetalert2';
import StarRateIcon from '@material-ui/icons/StarRate';
import Header from './Header'



class Somiteesetup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            officeid: '',
            branchid: '',
            somiteetype: '',
            somiteename: '',
            somiteeadress: '',
            somiteeincharge: '',
            maximum_member: '',
            formationdate: '',
            getofficeid: [],
            getbranchid: [],
            findbranchid: [],
            errors: {}
        }

        this.officeid = this.officeid.bind(this);
        this.branchid = this.branchid.bind(this);
        this.somiteetype = this.somiteetype.bind(this);
        this.somiteename = this.somiteename.bind(this);
        this.somiteeadress = this.somiteeadress.bind(this);
        this.somiteeincharge = this.somiteeincharge.bind(this);
        this.maximum_member = this.maximum_member.bind(this);
        this.formationdate = this.formationdate.bind(this);
        this.getofficeid = this.getofficeid.bind(this);
        this.find_branchid = this.find_branchid.bind(this);
        // this.getbranchid = this.getofficeid.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    officeid(event) {
        this.setState({ officeid: event.target.value })
    }

    branchid(event) {
        this.setState({ branchid: event.target.value })
    }
    somiteetype(event) {
        this.setState({ somiteetype: event.target.value })
    }
    somiteename(event) {
        this.setState({ somiteename: event.target.value })
    }
    somiteeadress(event) {
        this.setState({ somiteeadress: event.target.value })
    }
    somiteeincharge(event) {
        this.setState({ somiteeincharge: event.target.value })
    }
    maximum_member(event) {
        this.setState({ maximum_member: event.target.value })
    }
    formationdate(event) {
        this.setState({ formationdate: event.target.value })
    }
    DataTable() {
        return this.state.getofficeid.map((res, i) => {
            return <Branchdrop obj={res} key={i} />;
        });
    }
    DataTable_BranchID() {
        return this.state.getbranchid.map((res, i) => {
            return <Somiteedrop obj={res} key={i} />;
        });
    }



    getofficeid(e) {
        // e.preventdefault();
        e.preventDefault();
        axios.get('http://127.0.0.1:8000/api/find_office_id')
            .then(res => {
                const getofficeid = res.data;
                this.setState({ getofficeid });
                //    console.log(officeid);
                // this.state.officeid=res.data.bind(this);

            })
    }


    find_branchid(e) {
        console.log(this.state.officeid);


        const packets = {
            officeid: this.state.officeid
        };
        console.log(this.state.officeid);
        axios.post('http://127.0.0.1:8000/api/find_branch_id', packets)
            .then(res => {
                const getbranchid = res.data;
                this.setState({ getbranchid });
                // console.log(getbranchid);
                // this.state.officeid=res.data.bind(this);
                console.log(res.data);

            })
    }
    // getbranchid(e) {
    //     // e.preventDefault();

    //     Swal.fire(
    //         'Good job!',
    //         'New Member Added Successfully',
    //         'success'
    //     )
    //     const packets = {
    //         officeid: this.state.officeid
    //     };

    //     Swal.fire(
    //         'Good job!',
    //         'New Member Added Successfully',
    //         'success'
    //     )

    //     console.log(this.state.officeid);
    //     axios.post('http://127.0.0.1:8000/api/find_branch_id', packets)
    //         .then(res => {
    //             const getbranchid = res.data;
    //             this.setState({ getbranchid });
    //             console.log(getbranchid);
    //             // this.state.officeid=res.data.bind(this);

    //         })
    // }

    handleValidation() {
        let fields = {
            officeid: this.state.officeid,
            branchid: this.state.branchid,
            somiteetype: this.state.somiteetype,
            somiteename: this.state.somiteename,
            somiteeadress: this.state.somiteeadress,
            somiteeincharge: this.state.somiteeincharge,
            maximum_member: this.state.maximum_member,
            formationdate: this.state.formationdate
        }
        let formIsValid = true;
        let errors = {};
        //Office-ID-validation
        if (!fields["officeid"]) {
            formIsValid = false;
            errors["officeid"] = "Cannot be empty";
        }
        //Branch-ID-validation
        if (!fields["branchid"]) {
            formIsValid = false;
            errors["branchid"] = "Cannot be empty";
        }
        //Somitee-Type-Validation
        if (!fields["somiteetype"]) {
            formIsValid = false;
            errors["somiteetype"] = "Cannot be empty";
        }

        if (!fields["somiteename"]) {
            formIsValid = false;
            errors["somiteename"] = "Cannot be empty";
        }

        if (!fields["somiteeadress"]) {
            formIsValid = false;
            errors["somiteeadress"] = "Cannot be empty";
        }

        if (!fields["maximum_member"]) {
            formIsValid = false;
            errors["maximum_member"] = "Cannot be empty";
        }
        if (fields["maximum_member"] > 20) {
            formIsValid = false;
            errors["maximum_member"] = "Sorry,maximum limit reached";
        }
        if (!fields["formationdate"]) {
            formIsValid = false;
            errors["formationdate"] = "Cannot be empty";
        }








        this.setState({ errors: errors });
        return formIsValid;
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            const packets = {

                officeid: this.state.officeid,
                branchid: this.state.branchid,
                somiteetype: this.state.somiteetype,
                somiteename: this.state.somiteename,
                somiteeadress: this.state.somiteeadress,
                somiteeincharge: this.state.somiteeincharge,
                maximum_member: this.state.maximum_member,
                formationdate: this.state.formationdate
            };

            axios.post('somiteesetup', packets)
                .then(
                    //     response => alert("Data Save Sucessfully")

                )
                .catch(error => {
                    console.log("ERROR:: ", error.response.data);

                });
            this.setState({
                officeid: '',
                branchid: '',
                somiteetype: '',
                somiteename: '',
                somiteeadress: '',
                somiteeincharge: '',
                maximum_member: '',
                formationdate: ''
            });


            Swal.fire({
                position: 'center',
                icon: 'sucess',
                title: 'Good Job ',
                text: 'New Somitee Added Sucessfully',
                showConfirmButton: false,
                timer: 2000
            });
        }
        else {
            Swal.fire({
                position: 'center',
                icon: "error",
                title: 'Sorry',
                text: 'There is a wrong Input',
                showConfirmButton: false,
                timer: 2000
            });

        }
    }


    Reset = () => {
        this.setState({
            officeid: '',
            branchid: '',
            somiteetype: '',
            somiteename: '',
            somiteeadress: '',
            somiteeincharge: '',
            maximum_member: '',
            formationdate: ''
        });
    }




    render() {
        return (
            <>
                <Header />


                <div className='body'>
                    <div className='container' >
                        <div className="title" > Somitee Setup Form </div>
                        <div className='content'>

                            <form >
                                <div className="user-details" >

                                    <div className="input-box">
                                        <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Office Id </span>
                                        <select value={this.state.officeid} onClick={this.getofficeid} onChange={this.officeid} >
                                            <option></option>
                                            {this.DataTable()}
                                        </select>
                                        <span style={{ color: 'red' }}>{this.state.errors["officeid"]}</span>
                                    </div>

                                    <div className="input-box">
                                        <span className="details">< StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Branch Id </span>
                                        <select value={this.state.branchid} onClick={this.find_branchid} onChange={this.branchid} >
                                            <option> </option>
                                            {this.DataTable_BranchID()}
                                        </select>
                                        <span style={{ color: 'red' }}>{this.state.errors["branchid"]}</span>

                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Somitee Type </span>
                                        <input type="text" value={this.state.somiteetype} placeholder=" Enter Somitee type" onChange={this.somiteetype} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["somiteetype"]}</span>

                                    </div>



                                    <div className="input-box" >
                                        <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Somitee Name </span>
                                        <input type="text" value={this.state.somiteename} placeholder="Enter Somitee Name" onChange={this.somiteename} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["somiteename"]}</span>

                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Somitee Adress </span>
                                        <input type="text" value={this.state.somiteeadress} placeholder="Enter Somitee Adress" onChange={this.somiteeadress} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["somiteeadress"]}</span>

                                    </div>


                                    <div className="input-box" >
                                        <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Somitee In charge </span>
                                        <input type="text" value={this.state.somiteeincharge} placeholder="Enter the name of comitee in" onChange={this.somiteeincharge} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["somiteeincharge"]}</span>

                                    </div>

                                    <div className="input-box" >
                                        <span className="details" >< StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Maximum Member (Max-20)</span>
                                        <input type="number" value={this.state.maximum_member} placeholder="Maximum member number" onChange={this.maximum_member} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["maximum_member"]}</span>

                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Somitee Setup Date </span>
                                        <input type="date" value={this.state.formationdate} onChange={this.formationdate} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["formationdate"]}</span>

                                    </div>
                                </div>

                                <div className="button">
                                    <IconContext.Provider value={{ color: 'black' }}>
                                        <div className="add">
                                            {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
                                            {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
                                            <AiFillSave style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this.handleSubmit} />
                                        </div>
                                    </IconContext.Provider>
                                    <IconContext.Provider value={{ color: 'black' }}>

                                        <div className="reset">
                                            {/* <input type = "submit"value = "-"/> */}
                                            <BiReset style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this.Reset} />

                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Somiteesetup;

