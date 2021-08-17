import React, { Component } from 'react'
import axios from "axios";
import './comiteesetup.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Swal from 'sweetalert2';
import { BsPlusCircle } from "react-icons/bs";
import StarRateIcon from '@material-ui/icons/StarRate';



class membership extends Component {


    constructor(props) {
        super(props);

        this.state = {
            fullname: '',
            fathername: '',
            mothername: '',
            phone: '',
            email: '',
            dob: '',
            nid: '',
            comiteename: '',
            officeid: '',
            branchid: ''

        }

        this.fullname = this.fullname.bind(this);
        this.fathername = this.fathername.bind(this);
        this.mothername = this.mothername.bind(this);
        this.phone = this.phone.bind(this);
        this.email = this.email.bind(this);
        this.dob = this.dob.bind(this);
        this.nid = this.nid.bind(this);
        this.comiteename = this.comiteename.bind(this);
        this.officeid = this.officeid.bind(this);
        this.branchid = this.branchid.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fullname(event) {
        this.setState({ fullname: event.target.value })
    }
    fathername(event) {
        this.setState({ fathername: event.target.value })
    }
    mothername(event) {
        this.setState({ mothername: event.target.value })
    }
    phone(event) {
        this.setState({ phone: event.target.value })
    }
    email(event) {
        this.setState({ email: event.target.value })
    }
    dob(event) {
        this.setState({ dob: event.target.value })
    }
    nid(event) {
        this.setState({ nid: event.target.value })
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

    handleSubmit(e) {
        e.preventDefault();

        const packets = {
            fullname: this.state.fullname,
            fathername: this.state.fathername,
            mothername: this.state.mothername,
            phone: this.state.phone,
            email: this.state.email,
            dob: this.state.dob,
            nid: this.state.nid,
            comiteename: this.state.comiteename,
            officeid: this.state.officeid,
            branchid: this.state.branchid

        };

        axios.post('/store', packets)
            .then(
                console.log("Hi data saved")

            )
            .catch(error => {
                console.log("ERROR:: ", error.response.data);

            });

//           const  fullname=this.state.fullname;
//           const  fathername=this.state.fathername;
//           const mothername=this.state.mothername;
//           const  phone=this.state.phone;
//            const email= this.state.email;
//         const dob=this.state.dob;
//           const  nid=this.state.nid;
//           const  comiteename=this.state.comiteename;
//           const  officeid=this.state.officeid;
//            const branchid= this.state.branchid;

// this.setState({fullname:""});



        Swal.fire(
            'Good job!',
            'New Member Added Successfully',
            'success'
        )

        this.form.reset();

        //   this.setState({fullname: '',
        //   fathername: '',
        //   mothername: '',
        //   phone: '',
        //   email: '',
        //   dob: '',
        //   nid: '',
        //   comiteename: '',
        //   officeid: '',
        //   branchid: '' })

    }

    render() {

        return (
               
            <div className = 'body'>
            <div className = 'container'>
              <div className = "title" > MemberShip Form </div> 
               <div className = 'content'>
                   <form>
                      <div className = "user-details">
                          <div className = "input-box">
                            <span className = "details"> < StarRateIcon color = "secondary"style = {  { fontSize: 15 } }/>Full Name </span> 
                             <input type = "text" placeholder = " Enter full name" onChange = { this.fullname } required/>
                          </div>

                           <div className = "input-box">
                             <span className = "details"> Father Name </span> 
                             <input type = "text" placeholder = "Enter father name" onChange = { this.fathername } required/>
                           </div> 
                           <div className = "input-box">
                             <span className = "details"> Mother Name </span> 
                             <input type = "text" placeholder = "Enter mother name" onChange = { this.mothername } required/>
                           </div> 
                          
                           <div className = "input-box">
                            < span className = "details" > Phone Number </span> 
                            <input type = "text" placeholder = "Enter phone number" onChange = { this.phone } required/>
                           </div>

                           <div className = "input-box" >
                             <span className = "details" >< StarRateIcon color = "secondary"style = {  { fontSize: 15 } }/> email </span> 
                             <input type = "email" placeholder = "Enter email id" onChange = { this.email } required/>
                           </div> 

                           <div className = "input-box" >
                            <span className = "details" > Date Of Birth </span> 
                            <input type = "date" placeholder = "Enter Comitee Name" onChange = { this.dob } required/>
                           </div>

                          <div className = "input-box" >
                            <span className = "details" > < StarRateIcon color = "secondary"style = {  { fontSize: 15 } }/>National Id </span> 
                            <input type = "text" placeholder = "Enter national id" onChange = { this.nid } required/>
                          </div>

                           <div className = "input-box" >
                            <span className = "details" > < StarRateIcon color = "secondary"style = {  { fontSize: 15 } }/>Comitee Name </span> 
                            <input type = "text" placeholder = "Enter Comitee Name" onChange = { this.comiteename } required/>
                         </div>


                          <div className = "input-box" >
                            <span className = "details" >< StarRateIcon color = "secondary"style = {  { fontSize: 15 } }/> Office Id </span> 
                            <input type = "text" placeholder = "Enter office id "onChange = { this.officeid }required/>
                          </div>


                           <div className = "input-box" >
                            <span className = "details" >< StarRateIcon color = "secondary"style = {  { fontSize: 15 } }/> Branch Id </span> 
                            <input type = "text" placeholder = "Enter branch id" onChange = { this.branchid } required />
                          </div>

                       </div>

                       <div className = "button">
                           <div className = "add">
                              <input type = "submit"value = "+"onClick = { this.handleSubmit }/> 
                           </div>

                            <div className = "reset">
                                <input type = "submit"value = "-"/>
                             </div>                  

                           <div className = "cancel">
                              <input type = "submit"value = "-"/>
                           </div> 
                   </div> 
             </form> 
            </div> 
         </div> 
     </div>
        );
    }
}
           

export default membership;