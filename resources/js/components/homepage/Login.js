// import React, { Component } from 'react';
// import './log.css'
// // import './login.css';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import Header from './Header';
// import Footer from './Footer';
// import { RepeatOneSharp } from '@material-ui/icons';
// import MakerDashboard from '../MakerDashboard';
// import Navbar from '../Navbar';
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';



// export default class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//             redirect: false,
//             username: '',
//             errors: {},
//             userstatus: ''


//         };

//         this.email = this.email.bind(this);
//         this.pass = this.pass.bind(this);
//         // this.userstatus = this.userstatus.bind(this)
//         this.signinhandelar = this.signinhandelar.bind(this);
//     }
//     // componentDidMount() {
//     //     loadCaptchaEnginge(6);
//     // };

//     email(event) {
//         this.setState({ email: event.target.value })
//     }
//     pass(event) {
//         this.setState({ pass: event.target.value })
//     }
//     // usertype(event) {
//     //     this.setState({ usertype: event.target.value })
//     // }
//     handleValidation() {
//         let fields = {
//             email: this.state.email,
//             pass: this.state.pass
//         }
//         let formIsValid = true;
//         let errors = {};
//         //Name
//         // if(!fields["name"]){
//         //    formIsValid = false;
//         //    errors["name"] = "Cannot be empty";
//         // }

//         // if(typeof fields["name"] !== "undefined"){
//         //    if(!fields["name"].match(/^[a-zA-Z]+$/)){
//         //       formIsValid = false;
//         //       errors["name"] = "Only letters";
//         //    }        
//         // }

//         //Email
//         if (!fields["email"]) {
//             formIsValid = false;
//             errors["email"] = "Cannot be empty";
//         }

//         if (typeof fields["email"] !== "undefined") {
//             let lastAtPos = fields["email"].lastIndexOf('@');
//             let lastDotPos = fields["email"].lastIndexOf('.');

//             if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
//                 formIsValid = false;
//                 errors["email"] = "Email is not valid";
//             }
//         }
//         //Pass
//         if (!fields["pass"]) {
//             formIsValid = false;
//             errors["pass"] = "Cannot be empty";
//         }
//         let pass = fields["pass"];
//         let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//         let test = reg.test(pass);
//         if (!test) {
//             formIsValid = false;
//             errors["pass"] = "Password is not valid";
//         }


//         this.setState({ errors: errors });
//         return formIsValid;
//     }

//     signinhandelar(e) {
//         e.preventDefault();
//         // let user_captcha = document.getElementById('user_captcha_input').value;
//         if (this.handleValidation()) {
//             const packets = {
//                 email: this.state.email,
//                 pass: this.state.pass,

//             };
//             // if (validateCaptcha(user_captcha) == true) {
//             //     document.getElementById('user_captcha_input').value = "";
//             axios.post('login', packets)
//                 .then(response => {
//                     console.log(response.data);
//                     if (response.data === 200) {
//                         this.setState({ userstatus: 'Admin' })
//                         this.setState({ redirect: true });

//                     }

//                     else if (response.data === 100) {
//                         this.setState({ redirect: true });
//                         this.setState({ userstatus: 'Maker User' })
//                     }
//                     else if (response.data === 50) {
//                         this.setState({ userstatus: 'Checker User' })
//                         this.setState({ redirect: true });

//                     }

//                     else {
//                         this.setState({ redirect: false });
//                         Swal.fire({
//                             position: 'center',
//                             icon: 'failed',
//                             title: 'Invalid Login Request',
//                             text: 'Please use a valid mail and password',
//                             showConfirmButton: false,
//                             timer: 2000
//                         })
//                     }

//                 })
//             // }
//             // else {
//             //     alert('Captcha Does Not Match');
//             // }
//         }

//     }

//     render() {

//         if (this.state.redirect) {
//             console.log(this.state.userstatus);

//             console.log("hi i am calling from render");

//             if (this.state.userstatus == 'Admin') {
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'failed',
//                     title: 'Sucessfully Loagin In Admin Panel',
//                     text: 'It will Close in 2 sec',
//                     showConfirmButton: false,
//                     timer: 2000
//                 })

//                 return <Redirect to="/admin" />;
//                 this.setState({ redirect: false });
//             }
//             else if (this.state.userstatus == 'Checker User') {
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'failed',
//                     title: 'Sucessfully Loagin In Chechker User Panel',
//                     text: 'It will Close in 2 sec',
//                     showConfirmButton: false,
//                     timer: 2000
//                 })

//                 return <Redirect to="/checkeruser" />;
//                 this.setState({ redirect: false });
//             }
//             else {
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'failed',
//                     title: 'Sucessfully Loagin In Maker User Panel',
//                     text: 'It will Close in 2 sec',
//                     showConfirmButton: false,
//                     timer: 2000
//                 })

//                 return <Redirect to="/makerdashboard" />;
//                 // return <MakerDashboard username={this.state.username} />
//                 // return <Navbar username={this.state.username} />
//                 this.setState({ redirect: false });

//             }




//         }

//         return (

//             <div>
//                 <Header />
//                 <div className="container-fluid" >
//                     <div className="row no-gutter" >

//                         <div className="col-md-7 d-none d-md-flex bg-image" >
//                         </div>



//                         <div className="col-md-5 bg-light">
//                             <div className="login d-flex align-items-center py-5" >


//                                 <div className="container">
//                                     <div className="row customHover">
//                                         <div className="col-lg-10 col-xl-7 mx-auto " >
//                                             <h3 className="display-3 bg-primary text-white text-center loginradius mb-5" > Log In </h3>
//                                             <form>


//                                                 <div className="form-group mb-4" >
//                                                     <input id="inputEmail"
//                                                         type="text"
//                                                         onChange={this.email}
//                                                         placeholder="Email address"

//                                                         className="form-control rounded-pill border-0 shadow p-1 px-4 text-primary" />
//                                                     <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
//                                                 </div>
//                                                 <div className="form-group mb-4" >
//                                                     <input id="inputPassword"
//                                                         type="password"
//                                                         onChange={this.pass}
//                                                         placeholder="Password"
//                                                         className="form-control rounded-pill border-0 shadow p-1 px-4 text-primary" />
//                                                     <span style={{ color: "red" }}>{this.state.errors["pass"]}</span>
//                                                 </div>

//                                                 {/* <div className="form-group mb-3" >
//                                                     <LoadCanvasTemplate />
//                                                 </div>
//                                                 <div className="form-group mb-3">
//                                                     <input className="form-control rounded-pill border-0 shadow p-1 px-4 text-primary" placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text" />
//                                                 </div> */}

//                                                 <button type="submit"
//                                                     className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
//                                                     onClick={this.signinhandelar} > Sign in </button>
//                                                 <p className="text-center"><Link to="">Forget Password</Link></p>
//                                                 <div className="text-center d-flex justify-content-center mt-4" > < p className=""> New Here ? ? Click to</p >

//                                                 </div>
//                                                 <p className="text-center">< Link to="/register"> Register </Link></p>
//                                             </form> </div> </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         )
//     }
// }


import React, { Component } from 'react';
import './log.css'
// import './login.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { RepeatOneSharp } from '@material-ui/icons';
import MakerDashboard from '../MakerDashboard';
// import Navbar from '../Navbar';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import Navbar from '../admin/Navbar';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
            redirect: false,
            username: '',
            errors: {},
            userstatus: ''


        };

        this.email = this.email.bind(this);
        this.pass = this.pass.bind(this);
        // this.userstatus = this.userstatus.bind(this)
        this.signinhandelar = this.signinhandelar.bind(this);
    }
    // componentDidMount() {
    //     loadCaptchaEnginge(6);
    // };

    email(event) {
        this.setState({ email: event.target.value })
    }
    pass(event) {
        this.setState({ pass: event.target.value })
    }
    // usertype(event) {
    //     this.setState({ usertype: event.target.value })
    // }

    handleChange = e => {
        console.log(e.target.value);
        this.form.validateFields(e.target);
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }
    handleValidation() {
        let fields = {
            email: this.state.email,
            pass: this.state.pass
        }
        let formIsValid = true;
        let errors = {};
        //Name
        // if(!fields["name"]){
        //    formIsValid = false;
        //    errors["name"] = "Cannot be empty";
        // }

        // if(typeof fields["name"] !== "undefined"){
        //    if(!fields["name"].match(/^[a-zA-Z]+$/)){
        //       formIsValid = false;
        //       errors["name"] = "Only letters";
        //    }        
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
        let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        let test = reg.test(pass);
        if (!test) {
            formIsValid = false;
            errors["pass"] = "pass is not valid";
        }


        this.setState({ errors: errors });
        return formIsValid;
    }

    signinhandelar(e) {
        e.preventDefault();
        // let user_captcha = document.getElementById('user_captcha_input').value;
        // if (this.handleValidation()) {
        // this.form.validateFields();

        //  if(this.form.validateFields()){



        const packets = {
            email: this.state.email,
            pass: this.state.pass,

        };
        console.log(packets);
        // if (validateCaptcha(user_captcha) == true) {
        //     document.getElementById('user_captcha_input').value = "";
        axios.post('login', packets)
            .then(response => {
                // console.log(response.data)
                console.log(response.data.status);
                if (response.data.status === 200) {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("userData", response.data.data);
                    localStorage.setItem("userStatus", response.data.status);
                    this.setState({ userstatus: 'Admin' })
                    this.setState({ redirect: true });

                }

                else if (response.data.status === 100) {
                    // localStorage.setItem("isLoggedIn", true);
                    // localStorage.setItem("userData", response.data.data);
                    // localStorage.setItem("userStatus", response.data.status);

                    this.setState({ redirect: true });
                    this.setState({ userstatus: 'Maker User' })
                }
                else if (response.data.status === 50) {
                    // localStorage.setItem("isLoggedIn", true);
                    // localStorage.setItem("userData", response.data.data);
                    // localStorage.setItem("userStatus", response.data.status);

                    this.setState({ userstatus: 'Checker User' })
                    this.setState({ redirect: true });

                }

                else {
                    this.setState({ redirect: false });
                    Swal.fire({
                        position: 'center',
                        icon: 'failed',
                        title: 'Invalid Login Request',
                        text: 'Please use a valid mail and pass',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }

            })
        // }
        // else {
        //     alert('Captcha Does Not Match');
        // }
        //  }
        //  else
        //  {
        //     alert('Form Input Error');
        //  }

    }

    render() {
        const login = localStorage.getItem("isLoggedIn");
        const userstatus = localStorage.getItem("userStatus");
        if (login) {
            if (userstatus == 200) {
                return <Redirect to="/admin" />;

            }
            else if (userstatus == 100) {
                return <Redirect to="/makerdashboard" />;

            }
            else if (userstatus == 50) {
                return <Redirect to="/checkeruser" />;

            }
        }

        if (this.state.redirect) {
            console.log(this.state.userstatus);

            console.log("hi i am calling from render");

            if (this.state.userstatus == 'Admin') {
                Swal.fire({
                    position: 'center',
                    icon: 'failed',
                    title: 'Sucessfully Loagin In Admin Panel',
                    text: 'It will Close in 2 sec',
                    showConfirmButton: false,
                    timer: 2000
                })

                return <Redirect to="/admin" />;
                this.setState({ redirect: false });
            }
            else if (this.state.userstatus == 'Checker User') {
                Swal.fire({
                    position: 'center',
                    icon: 'failed',
                    title: 'Sucessfully Loagin In Chechker User Panel',
                    text: 'It will Close in 2 sec',
                    showConfirmButton: false,
                    timer: 2000
                })

                return <Redirect to="/checkeruser" />;
                this.setState({ redirect: false });
            }
            else {
                Swal.fire({
                    position: 'center',
                    icon: 'failed',
                    title: 'Sucessfully Loagin In Maker User Panel',
                    text: 'It will Close in 2 sec',
                    showConfirmButton: false,
                    timer: 2000
                })

                return <Redirect to="/makerdashboard" />;
                // return <MakerDashboard username={this.state.username} />
                // return <Navbar username={this.state.username} />
                this.setState({ redirect: false });

            }




        }

        return (

            <div>
                <Header />
                <div className="container-fluid" >
                    <div className="row no-gutter" >

                        <div className="col-md-7 d-none d-md-flex bg-image" >
                        </div>



                        <div className="col-md-5 bg-light">
                            <div className="login d-flex align-items-center py-5" >


                                <div className="container">
                                    <div className="row customHover">
                                        <div className="col-lg-10 col-xl-7 mx-auto " >
                                            <h3 className="display-3 bg-primary text-white text-center loginradius mb-5" > Log In </h3>

                                            <FormWithConstraints
                                                ref={form => this.form = form}
                                                noValidate>
                                                <div className="form-group mb-4" >
                                                    <input id="inputEmail"
                                                        type="email"
                                                        onChange={this.handleChange}
                                                        placeholder="Email address"
                                                        required name="email"
                                                        className="form-control rounded-pill border-0 shadow p-1 px-4 text-primary" />
                                                    <FieldFeedbacks for="email">
                                                        <FieldFeedback when="*" />
                                                    </FieldFeedbacks>


                                                </div>
                                                <div className="form-group mb-4" >
                                                    <input id="inputpass"
                                                        type="password"
                                                        onChange={this.handleChange}
                                                        placeholder="Password"
                                                        required name="pass"
                                                        className="form-control rounded-pill border-0 shadow p-1 px-4 text-primary" />
                                                    <FieldFeedbacks for="pass">
                                                        <FieldFeedback when="*" />
                                                    </FieldFeedbacks>


                                                </div>

                                                {/* <div className="form-group mb-3" >
                                                    <LoadCanvasTemplate />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input className="form-control rounded-pill border-0 shadow p-1 px-4 text-primary" placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text" />
                                                </div> */}

                                                <button type="submit"
                                                    className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                                    onClick={this.signinhandelar} > Sign in </button>
                                                <p className="text-center"><Link to="">Forget pass</Link></p>
                                                <div className="text-center d-flex justify-content-center mt-4" > < p className=""> New Here ? ? Click to</p >

                                                </div>
                                                <p className="text-center">< Link to="/register"> Register </Link></p>

                                            </FormWithConstraints>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}