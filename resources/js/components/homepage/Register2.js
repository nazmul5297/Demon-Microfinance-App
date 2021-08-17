import React, { Component } from 'react';
import './register.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BsStarFill } from "react-icons/bs";
import Header from './Header';
import Footer from './Footer';
import { BsArrowRightShort } from "react-icons/bs";
import Somiteedrop from '../Somiteedrop';



class Register2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            email: '',
            pass: '',
            cpass: '',
            phone: '',
            officeid: '',
            bid: '',
            usertype: '',
            getbranchid: [],
            errors: {}
        };

        this.fname = this.fname.bind(this);
        this.lname = this.lname.bind(this);
        this.email = this.email.bind(this);
        this.pass = this.pass.bind(this);
        this.cpass = this.cpass.bind(this);
        this.phone = this.phone.bind(this);
        this.email = this.email.bind(this);
        this.officeid = this.officeid.bind(this);
        this.bid = this.bid.bind(this);
        this.usertype = this.usertype.bind(this);
        this.signup = this.signup.bind(this);
        // this.getofficeid = this.getofficeid.bind(this);
        this.find_branchid = this.find_branchid.bind(this);
    }

    fname(event) {
        this.setState({ fname: event.target.value })
    }
    lname(event) {
        this.setState({ lname: event.target.value })
    }
    email(event) {
        this.setState({ email: event.target.value })
    }
    phone(event) {
        this.setState({ phone: event.target.value })
    }
    pass(event) {
        this.setState({ pass: event.target.value })
    }
    cpass(event) {
        this.setState({ cpass: event.target.value })
    }
    officeid(event) {
        this.setState({ officeid: event.target.value })
    }
    bid(event) {
        this.setState({ bid: event.target.value })
    }
    usertype(event) {
        this.setState({ usertype: event.target.value })
    }

    DataTable_BranchID() {
        return this.state.getbranchid.map((res, i) => {
            return <Somiteedrop obj={res} key={i} />;
        });
    }


    find_branchid(e) {
        axios.get('http://192.168.0.111:8000/api/allbranchid')
            .then(res => {
                const getbranchid = res.data;
                this.setState({ getbranchid });
                // console.log(getbranchid);
                // this.state.officeid=res.data.bind(this);
                console.log(res.data);

            })
    }
    handleValidation() {
        let fields = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            pass: this.state.pass,
            cpass: this.state.pass,
            phone: this.state.phone,
            bid: this.state.bid,
            usertype: this.state.usertype
        }
        let formIsValid = true;
        let errors = {};
        //First-Name-Validation
        if (!fields["fname"]) {
            formIsValid = false;
            errors["fname"] = "Cannot be empty";
        }

        // if (typeof fields["fname"] !== "undefined") {
        //     if (!fields["fname"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["fname"] = "Only letters";
        //     }
        // }
        //Last-Name-Validation
        if (!fields["lname"]) {
            formIsValid = false;
            errors["lname"] = "Cannot be empty";
        }

        // if (typeof fields["lname"] !== "undefined") {
        //     if (!fields["lname"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["lname"] = "Only letters";
        //     }
        // }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
        //Pass
        if (!fields["pass"]) {
            formIsValid = false;
            errors["pass"] = "Cannot be empty";
        }
        let pass = fields["pass"];
        let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        let test = reg.test(pass);
        if (!test) {
            formIsValid = false;
            errors["pass"] = "Password is not valid";
        }
        //Confirm Password
        if (!fields["cpass"]) {
            formIsValid = false;
            errors["cpass"] = "Cannot be empty";
        }

        if (typeof fields["pass"] !== "undefined" && typeof fields["cpass"] !== "undefined") {

            if (fields["pass"] != fields["cpass"]) {
                formIsValid = false;
                errors["cpass"] = "Passwords don't match.";
            }
        }
        //Phone No Validation

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }

        //Branch-Id-Validation
        if (!fields["bid"]) {
            formIsValid = false;
            errors["bid"] = "Cannot be empty";
        }

        //Employee-Id-Validation
        if (!fields["usertype"]) {
            formIsValid = false;
            errors["usertype"] = "Cannot be empty";
        }



        this.setState({ errors: errors });
        return formIsValid;
    }


    signup(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            const packets = {
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                phone: this.state.phone,
                pass: this.state.pass,
                cpass: this.state.cpass,
                officeid: this.state.officeid,
                bid: this.state.bid,
                usertype: this.state.usertype

            };

            axios.post('/store', packets)
                .then(res => {
                    console.log(res.data)
                }

                )
                .catch(error => {
                    console.log("ERROR:: ", error.response.data);

                });

            this.setState({
                fname: '',
                lname: '',
                email: '',
                pass: '',
                cpass: '',
                phone: '',
                officeid: '',
                bid: ''
            });

            Swal.fire({
                position: 'center',
                icon: 'sucess',
                title: 'Good Job ',
                text: 'New User Added Sucessfully',
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
            fname: '',
            lname: '',
            email: '',
            pass: '',
            cpass: '',
            phone: '',
            officeid: '',
            bid: ''
        });
    }



    render() {
        let myStyle = {
            minHeight: "80vh"
        }

        return (
            <div>
                <Header />

                < div style={myStyle} >
                    <div className="row">
                        <div className="col-lg-7 mx-8 myLeftDiv">
                            <div className="Text-area">
                                <h2 className="text-center">Some suggestions to get register properly</h2>
                                <hr className="mx-4" />
                                <p className="marginofp"><BsArrowRightShort size="2em" /> All the fields are to be filled mandatory</p>
                                <p className="marginofp"><BsArrowRightShort size="2em" /> The password correct format here should be atleast 8 charecters long with having at least one numeric value and First charecter should be letter</p>
                                <p className="marginofp"><BsArrowRightShort size="2em" /> Password should be filled up correctly in the Confirm Password also</p>
                                <p className="marginofp"><BsArrowRightShort size="2em" /> Every person must have to enter his/her particular branch id and empolyee id </p>
                                <p className="marginofp"></p>
                            </div>
                        </div>
                        < div className="col-lg-5">
                            <div className="wrapper">

                                <div className="title" >
                                    Signup Form
                                </div>
                                <div className="form" >
                                    <div className='error'>
                                        < span className='error-span' style={{ color: "red" }}>{this.state.errors["fname"]}</span>
                                    </div>
                                    <div className="inputfield" >
                                        < BsStarFill size="0.8em" color="red" />&nbsp;&nbsp;&nbsp;   <label > First Name &nbsp;
                                        </label>
                                        <input type="text"
                                            value={this.state.fname}
                                            onChange={this.fname}
                                            className="input" />
                                    </div>
                                    <div className='error'>
                                        < span className='error-span' style={{ color: "red" }}>{this.state.errors["lname"]}</span>
                                    </div>


                                    <div className="inputfield">
                                        < BsStarFill size="0.8em" color="red" />&nbsp;&nbsp;&nbsp;   <label > Last Name  &nbsp; </label>
                                        <input type="text"
                                            value={this.state.lname}
                                            onChange={this.lname}
                                            className="input" />
                                    </div>
                                    {/* <span style={{ color: "red" }}>{this.state.errors["lname"]}</span> */}

                                    <div className='error'>
                                        < span className='error-span' style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                    </div>

                                    <div className="inputfield" >
                                        < BsStarFill size="0.8em" color="red" />&nbsp;&nbsp;&nbsp;  <label > Email  &nbsp;</label>
                                        <input type="text"
                                            value={this.state.email}
                                            onChange={this.email}
                                            className="input" />
                                    </div>
                                    {/* <span style={{ color: "red" }}>{this.state.errors["email"]}</span> */}

                                    <div className='error'>
                                        < span className='error-span' style={{ color: "red" }}>{this.state.errors["pass"]}</span>
                                    </div>

                                    <div className="inputfield" >
                                        < BsStarFill size="0.8em" color="red" />&nbsp;&nbsp;&nbsp;  <label > Password  &nbsp; </label>
                                        <input type="password"
                                            value={this.state.pass}
                                            onChange={this.pass}
                                            className="input" />
                                    </div>
                                    {/* <span style={{ color: "red" }}>{this.state.errors["pass"]}</span> */}

                                    <div className='error'>
                                        < span className='error-span' style={{ color: "red" }}>{this.state.errors["cpass"]}</span>
                                    </div>

                                    <div className="inputfield" >
                                        < BsStarFill size="0.8em" color="red" /> &nbsp;&nbsp;&nbsp;  <label > Confirm Password </label>
                                        <input type="password"
                                            value={this.state.cpass}
                                            onChange={this.cpass}
                                            className="input" />
                                    </div>
                                    {/* <span style={{ color: "red" }}>{this.state.errors["cpass"]}</span> */}

                                    <div className='error'>
                                        < span className='error-span' style={{ color: "red" }}>{this.state.errors["phone"]}</span>
                                    </div>

                                    <div className="inputfield" >
                                        < BsStarFill size="0.8em" color="red" />&nbsp;&nbsp;&nbsp;   <label > Phone No  &nbsp;</label>
                                        <input type="number"
                                            value={this.state.phone}
                                            onChange={this.phone}
                                            className="input" />
                                    </div>
                                    {/* <span style={{ color: "red" }}>{this.state.errors["phone"]}</span> */}
                                    <div className='error'>
                                        < span className='error-span' style={{ color: "red" }}>{this.state.errors["bid"]}</span>
                                    </div>

                                    <div className="inputfield" >
                                        < BsStarFill size="0.8em" color="red" align="center" /> &nbsp;&nbsp;&nbsp; <label > Branch ID  &nbsp;</label>

                                        <select className="input" onClick={this.find_branchid} onChange={this.bid} >
                                            <option> </option>
                                            {this.DataTable_BranchID()}
                                        </select>
                                    </div>
                                    {/* <div className="input-box">
                                    <span className="details">< StarRateIcon color = "secondary"style = {  { fontSize: 15 } }/> Branch Id </span>
                                    <select onClick={this.find_branchid} onChange={this.branchid} >
                                        <option> </option>
                                        {this.DataTable_BranchID()}
                                    </select>
                                    <span >{this.state.errors["branchid"]}</span>

                                </div> */}
                                    {/* <span style={{ color: "red" }}>{this.state.errors["bid"]}</span> */}

                                    <div className='error'>
                                        < span className='error-span' style={{ color: "red" }}>{this.state.errors["usertype"]}</span>
                                    </div>

                                    <div className="inputfield" >
                                        < BsStarFill size="0.8em" color="red" />&nbsp;&nbsp;&nbsp;  <label> User Type &nbsp; </label>
                                        <select onChange={this.usertype} className="input" >
                                            <option value=""></option>
                                            <option value="Maker_User"> Maker User</option>
                                            <option value="Checker User">Checker User</option>
                                            {/* <option value="Admin">Admin </option> */}
                                        </select>

                                    </div>
                                    {/* <span style={{ color: "red" }} >{this.state.errors["usertype"]}</span> */}

                                    {
                                        /* <div className="inputfield terms">
                                                      <label className="check">
                                                        <input type="checkbox"/>
                                                        <span className="checkmark"></span>
                                                      </label>
                                                      <p>Agreed to terms and conditions</p>
                                                   </div>  */
                                    } <div className="inputfield" >
                                        <input className='btn'
                                            type="submit"
                                            value="SignUp"
                                            onClick={this.signup}
                                        /> </div>
                                </div>
                            </div>
                        </div>

                    </div>






                </div>
                <Footer />
            </div>
        );
    }
}

export default Register2;