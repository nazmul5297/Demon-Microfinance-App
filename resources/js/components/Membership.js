// import React, { Component, useState } from 'react'
// import './comiteesetup.css'
// import axios from "axios";
// import './comiteesetup.css';
// import { AiFillSave } from "react-icons/ai";
// import { BiReset } from "react-icons/bi";
// import { IconContext } from 'react-icons';
// import Branchdrop from './Branchdrop';
// import Somiteedrop from './Somiteedrop';
// import Swal from 'sweetalert2';
// import Somiteenamedrop from './Somiteenamedrop';
// import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";




// export default class Membership extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             currentStep: 1,
//             officeid: '',
//             branchid: '',
//             somiteename: '',
//             fullname: '',
//             fathername: '',
//             mothername: '',
//             phone: '',
//             dob: '',
//             nid: '',
//             nomini_fullname: '',
//             nomini_fathername: '',
//             nomini_mothername: '',
//             nomini_relation: '',
//             nomini_phone: '',
//             nomini_dob: '',
//             nomini_nid: '',
//             getofficeid: [],
//             findbranchid: [],
//             getbranchid: [],
//             getsomiteename: []

//         };
//         // this.getofficeid = this.getofficeid.bind(this);
//         this.find_branchid = this.find_branchid.bind(this);
//         this.find_somiteename = this.find_somiteename.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//     }


//     // DataTable() {

//     //     return this.state.getofficeid.map((res, i) => {
//     //         return <Branchdrop obj={res} key={i} />;
//     //     });
//     // }

//     // DataTable_BranchID() {
//     //     return this.state.getbranchid.map((res, i) => {
//     //         return <Somiteedrop obj={res} key={i} />;
//     //     });
//     // }

//     DataTable_somiteename() {
//         return this.state.getsomiteename.map((res, i) => {
//             return <Somiteenamedrop obj={res} key={i} />;
//         });
//     }



//     // getofficeid(e) {
//     //     console.log("hi i amfrom getoffice id")

//     //     const packets = {
//     //         somiteename: this.state.somiteename
//     //     };
//     //     axios.post('http://127.0.0.1:8000/api/findofficeid_membership_setup', packets)
//     //         .then(res => {
//     //             const getofficeid = res.data;
//     //             console.log(getofficeid[0].officeid);
//     //             this.setState({ getofficeid })

//     //         })


//     // }



//     find_branchid(e) {


//         const packets = {
//             somiteename: this.state.somiteename
//         };
//         axios.post('http://127.0.0.1:8000/api/findbranchid_membership_setup', packets)
//             .then(res => {
//                 // const getbranchid = res.data;
//                 // this.setState({ getbranchid });
//                 // // console.log(getbranchid);
//                 // // this.state.officeid=res.data.bind(this);
//                 // console.log(res.data);
//                 console.log(res.data[0]);

//             })

//         return 200;
//     }

//     find_somiteename(e) {
//         e.preventDefault();


//         // const packets = {
//         //     officeid: this.state.officeid,
//         //     branchid: this.state.branchid
//         // };
//         // console.log(this.state.officeid);
//         // axios.post('http://127.0.0.1:8000/api/find_somiteename', packets)
//         //     .then(res => {
//         //         const getsomiteename = res.data;
//         //         console.log(res.data);
//         //         this.setState({ getsomiteename });
//         //         // console.log(getbranchid);
//         //         // this.state.officeid=res.data.bind(this);
//         //         // console.log(res.data);
//         //     })


//         axios.get('http://127.0.0.1:8000/api/allsomiteename')
//             .then(res => {
//                 const getsomiteename = res.data;
//                 console.log(res.data);
//                 this.setState({ getsomiteename });
//             })
//     }

//     handleChange = event => {
//         const { name, value } = event.target
//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit(e) {

//         e.preventDefault();

//         const office_id = () => {
//             console.log("hi i amfrom getoffice id")

//             const packets = {
//                 somiteename: this.state.somiteename
//             };
//             axios.post('http://127.0.0.1:8000/api/findofficeid_membership_setup', packets)
//                 .then(res => {
//                     const getofficeid = res.data;
//                     console.log(getofficeid[0].officeid);
//                     this.setState({ getofficeid })

//                 })

//         }

//         const packets = {

//             officeid: this.state.officeid,
//             branchid: this.find_branchid(),
//             somiteename: this.state.somiteename,
//             fullname: this.state.fullname,
//             fathername: this.state.fathername,
//             mothername: this.state.mothername,
//             phone: this.state.phone,
//             dob: this.state.dob,
//             nid: this.state.nid,
//             nomini_fullname: this.state.nomini_fullname,
//             nomini_fathername: this.state.nomini_fathername,
//             nomini_mothername: this.state.nomini_mothername,
//             nomini_relation: this.state.nomini_relation,
//             nomini_phone: this.state.nomini_phone,
//             nomini_dob: this.state.nomini_dob,
//             nomini_nid: this.state.nomini_nid,


//         };
//         console.log(packets);
//         axios.post('memberdatastore', packets)
//             .then(res => {
//                 console.log(res.data);

//             }


//             )
//             .catch(error => {
//                 console.log("ERROR:: ", error.response.data);

//             });

//         Swal.fire(
//             'Good job!',
//             'New Member Added Successfully',
//             'success'
//         )

//         // this.form.reset();

//         //   this.setState({fullname: '',
//         //   fathername: '',
//         //   mothername: '',
//         //   phone: '',
//         //   email: '',
//         //   dob: '',
//         //   nid: '',
//         //   comiteename: '',
//         //   officeid: '',
//         //   branchid: '' })

//     }



//     _next = () => {
//         let currentStep = this.state.currentStep
//         currentStep = currentStep >= 2 ? 2 : currentStep + 1
//         this.setState({
//             currentStep: currentStep
//         })
//     }

//     _prev = () => {
//         let currentStep = this.state.currentStep
//         currentStep = currentStep <= 1 ? 1 : currentStep - 1
//         this.setState({
//             currentStep: currentStep
//         })
//     }

//     /*
//     * the functions for our button
//     */
//     previousButton() {
//         let currentStep = this.state.currentStep;
//         if (currentStep !== 1) {
//             return (
//                 // <button
//                 //     className="btn btn-secondary"
//                 //     type="button" onClick={this._prev}>
//                 //     ↵
//                 // </button>
//                 <IconContext.Provider value={{ color: 'black' }}>
//                     <div className="add">
//                         {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
//                         {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
//                         <GrFormPreviousLink style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this._prev} />
//                     </div>
//                 </IconContext.Provider>

//             )
//         }
//         return null;

//     }

//     nextButton() {
//         let currentStep = this.state.currentStep;
//         if (currentStep < 3) {
//             return (
//                 <IconContext.Provider value={{ color: 'black' }}>
//                     <div className="add">
//                         {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
//                         {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
//                         <GrFormNextLink style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this._next} />
//                     </div>
//                 </IconContext.Provider>
//             )
//             // return (
//             //     <button
//             //         className="btn btn-primary float-right"
//             //         type="button" onClick={this._next}>
//             //         →
//             //     </button>
//             // )
//         }
//         return null;
//     }

//     render() {
//         return (

//             < React.Fragment >


//                 <div className='body'>
//                     <div className='container'>
//                         {/* <div className="title" > MemberShip Form </div> */}
//                         <div className='content'>

//                             <form onSubmit={this.handleSubmit}>
//                                 {/* 
//           render the form steps and pass required props in
//         */}
//                                 <Step1
//                                     currentStep={this.state.currentStep}
//                                     handleChange={this.handleChange}
//                                     // email={this.state.email}
//                                     // getofficeid={this.getofficeid}
//                                     // DataTable={this.DataTable()}
//                                     // find_branchid={this.find_branchid}
//                                     // DataTable_BranchID={this.DataTable_BranchID()}
//                                     find_somiteename={this.find_somiteename}
//                                     DataTable_somiteename={this.DataTable_somiteename()}

//                                 />
//                                 <Step2
//                                     currentStep={this.state.currentStep}
//                                     handleChange={this.handleChange}
//                                     username={this.state.username}
//                                     password={this.state.password}

//                                 />
//                                 {/* <Step3
//                                     currentStep={this.state.currentStep}
//                                     handleChange={this.handleChange}
//                                     password={this.state.password}
//                                 /> */}
//                                 <div className="button">
//                                     {this.previousButton()}
//                                     {this.nextButton()}
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>

//             </React.Fragment >
//         );
//     }
// }

// function Step1(props) {

//     if (props.currentStep !== 1) {
//         return null
//     }
//     return (
//         <div>
//             <div className="title" > Key Information </div>

//             <div className="user-details">
//                 {/* <div className="input-box">
//                     <span className="details"> office Id </span>
//                     <select id="officeid" name="officeid" onClick={props.getofficeid} onChange={props.handleChange}  >
//                         <option></option>
//                         <option>HI</option>
//                         {props.DataTable}
//                     </select>
//                 </div>

//                 <div className="input-box">
//                     <span className="details"> Branch Id </span>
//                     <select id="branchid" name="branchid" onClick={props.find_branchid} onChange={props.handleChange} >
//                         <option> </option>
//                         {props.DataTable_BranchID}
//                     </select>
//                 </div>

//                 <div className="input-box">
//                     <span className="details"> Somitee Name </span>
//                     <select id="somiteename" name="somiteename" onClick={props.find_somiteename} onChange={props.handleChange} >
//                         <option> </option>
//                         {props.DataTable_somiteename}
//                     </select>
//                 </div> */}

//                 <div className="input-box">
//                     <span className="details"> Somitee Name </span>
//                     <select id="somiteename" name="somiteename" onClick={props.find_somiteename} onChange={props.handleChange} >
//                         <option> </option>
//                         {props.DataTable_somiteename}
//                     </select>
//                 </div>


//                 <div className="input-box">
//                     <span className="details"> Full Name </span>
//                     <input id="fullname" name="fullname" type="text" placeholder=" Enter full name" value={props.fullname} onChange={props.handleChange} required />
//                 </div>

//                 <div className="input-box">
//                     <span className="details"> Father Name </span>
//                     <input id="fathername" name="fathername" type="text" placeholder="Enter father name" value={props.fathername} onChange={props.handleChange} required />
//                 </div>
//                 <div className="input-box">
//                     <span className="details"> Mother Name </span>
//                     <input id="mothername" name="mothername" type="text" placeholder="Enter mother name" value={props.mothername} onChange={props.handleChange} required />
//                 </div>

//                 <div className="input-box">
//                     < span className="details" > Phone Number </span>
//                     <input id="phone" name="phone" type="number" placeholder="Enter phone number" value={props.phone} onChange={props.handleChange} required />
//                 </div>


//                 <div className="input-box" >
//                     <span className="details" > Date Of Birth </span>
//                     <input id="dob" name="dob" type="date" placeholder="Enter Comitee Name" value={props.dob} onChange={props.handleChange} required />
//                 </div>

//                 <div className="input-box" >
//                     <span className="details" > National Id </span>
//                     <input id="nid" name="nid" type="text" placeholder="Enter national id" value={props.nid} onChange={props.handleChange} required />
//                 </div>


//             </div>
//         </div>

//     );
// }

// function Step2(props) {
//     if (props.currentStep !== 2) {
//         return null
//     }
//     return (

//         // <div>
//         //     <div className="title" > Basic Information </div>


//         //     <div className="user-details">
//         //         <div className="input-box">
//         //             <span className="details"> Somitee Name </span>
//         //             <select id="somiteename" name="somiteename" onClick={props.find_somiteename} onChange={props.handleChange} >
//         //                 <option> </option>
//         //                 {props.DataTable_somiteename}
//         //             </select>
//         //         </div>


//         //         <div className="input-box">
//         //             <span className="details"> Full Name </span>
//         //             <input id="fullname" name="fullname" type="text" placeholder=" Enter full name" value={props.fullname} onChange={props.handleChange} required />
//         //         </div>

//         //         <div className="input-box">
//         //             <span className="details"> Father Name </span>
//         //             <input id="fathername" name="fathername" type="text" placeholder="Enter father name" value={props.fathername} onChange={props.handleChange} required />
//         //         </div>
//         //         <div className="input-box">
//         //             <span className="details"> Mother Name </span>
//         //             <input id="mothername" name="mothername" type="text" placeholder="Enter mother name" value={props.mothername} onChange={props.handleChange} required />
//         //         </div>

//         //         <div className="input-box">
//         //             < span className="details" > Phone Number </span>
//         //             <input id="phone" name="phone" type="number" placeholder="Enter phone number" value={props.phone} onChange={props.handleChange} required />
//         //         </div>


//         //         <div className="input-box" >
//         //             <span className="details" > Date Of Birth </span>
//         //             <input id="dob" name="dob" type="date" placeholder="Enter Comitee Name" value={props.dob} onChange={props.handleChange} required />
//         //         </div>

//         //         <div className="input-box" >
//         //             <span className="details" > National Id </span>
//         //             <input id="nid" name="nid" type="text" placeholder="Enter national id" value={props.nid} onChange={props.handleChange} required />
//         //         </div>


//         //     </div>
//         // </div>

//         <React.Fragment>


//             <div>
//                 <div className="title" > Nomini Information </div>

//                 <div className="user-details">

//                     <div className="input-box">
//                         <span className="details"> Full Name </span>
//                         <input id="nomini_fullname" name="nomini_fullname" type="text" placeholder=" Enter full name" value={props.nomini_fullname} onChange={props.handleChange} required />
//                     </div>

//                     <div className="input-box">
//                         <span className="details"> Father Name </span>
//                         <input id="nomini_fathername" name="nomini_fathername" type="text" placeholder="Enter father name" value={props.nomini_fathername} onChange={props.handleChange} required />
//                     </div>
//                     <div className="input-box">
//                         <span className="details"> Mother Name </span>
//                         <input id="nomini_mothername" name="nomini_mothername" type="text" placeholder="Enter mother name" value={props.nomini_mothername} onChange={props.handleChange} required />
//                     </div>
//                     <div className="input-box" >
//                         <span className="details" > Relation </span>
//                         <input id="nomini_relation" name="nomini_relation" type="text" placeholder="Enter email id" value={props.nomini_relation} onChange={props.handleChange} required />
//                     </div>

//                     <div className="input-box">
//                         < span className="details" > Phone Number </span>
//                         <input id="nomini_phone" name="nomini_phone" type="number" placeholder="Enter phone number" value={props.nomini_phone} onChange={props.handleChange} required />
//                     </div>



//                     <div className="input-box" >
//                         <span className="details" > Date Of Birth </span>
//                         <input id="nomini_dob" name="nomini_dob" type="date" placeholder="Enter Comitee Name" value={props.nomini_dob} onChange={props.handleChange} required />
//                     </div>

//                     <div className="input-box" >
//                         <span className="details" > National Id </span>
//                         <input id="nomini_nid" name="nomini_nid" type="text" placeholder="Enter national id" value={props.nomini_nid} onChange={props.handleChange} required />
//                     </div>


//                 </div>
//             </div>
//             <button className="btn btn-success btn-block" >Add Member</button>
//         </React.Fragment>

//     );
// }

// // function Step3(props) {
// //     if (props.currentStep !== 3) {
// //         return null
// //     }
// //     return (
// //         <React.Fragment>


// //             <div>
// //                 <div className="title" > Nomini Information </div>

// //                 <div className="user-details">

// //                     <div className="input-box">
// //                         <span className="details"> Full Name </span>
// //                         <input id="nomini_fullname" name="nomini_fullname" type="text" placeholder=" Enter full name" value={props.nomini_fullname} onChange={props.handleChange} required />
// //                     </div>

// //                     <div className="input-box">
// //                         <span className="details"> Father Name </span>
// //                         <input id="nomini_fathername" name="nomini_fathername" type="text" placeholder="Enter father name" value={props.nomini_fathername} onChange={props.handleChange} required />
// //                     </div>
// //                     <div className="input-box">
// //                         <span className="details"> Mother Name </span>
// //                         <input id="nomini_mothername" name="nomini_mothername" type="text" placeholder="Enter mother name" value={props.nomini_mothername} onChange={props.handleChange} required />
// //                     </div>
// //                     <div className="input-box" >
// //                         <span className="details" > Relation </span>
// //                         <input id="nomini_relation" name="nomini_relation" type="text" placeholder="Enter email id" value={props.nomini_relation} onChange={props.handleChange} required />
// //                     </div>

// //                     <div className="input-box">
// //                         < span className="details" > Phone Number </span>
// //                         <input id="nomini_phone" name="nomini_phone" type="number" placeholder="Enter phone number" value={props.nomini_phone} onChange={props.handleChange} required />
// //                     </div>



// //                     <div className="input-box" >
// //                         <span className="details" > Date Of Birth </span>
// //                         <input id="nomini_dob" name="nomini_dob" type="date" placeholder="Enter Comitee Name" value={props.nomini_dob} onChange={props.handleChange} required />
// //                     </div>

// //                     <div className="input-box" >
// //                         <span className="details" > National Id </span>
// //                         <input id="nomini_nid" name="nomini_nid" type="text" placeholder="Enter national id" value={props.nomini_nid} onChange={props.handleChange} required />
// //                     </div>


// //                 </div>
// //             </div>
// //             <button className="btn btn-success btn-block" >Sign up</button>
// //         </React.Fragment>
// //     );
// // }


// import React, { Component, useState } from 'react'
// import './comiteesetup.css'
// import axios from "axios";
// import './comiteesetup.css';
// import { AiFillSave } from "react-icons/ai";
// import { BiReset } from "react-icons/bi";
// import { IconContext } from 'react-icons';
// import Branchdrop from './Branchdrop';
// import Somiteedrop from './Somiteedrop';
// import Swal from 'sweetalert2';
// import Somiteenamedrop from './Somiteenamedrop';
// import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";




// export default class Membership extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             currentStep: 1,
//             officeid: '',
//             branchid: '',
//             somiteename: '',
//             fullname: '',
//             fathername: '',
//             mothername: '',
//             phone: '',
//             dob: '',
//             nid: '',
//             nomini_fullname: '',
//             nomini_fathername: '',
//             nomini_mothername: '',
//             nomini_relation: '',
//             nomini_phone: '',
//             nomini_dob: '',
//             nomini_nid: '',
//             getofficeid: [],
//             findbranchid: [],
//             getbranchid: [],
//             getsomiteename: []

//         };
//         this.getofficeid = this.getofficeid.bind(this);
//         this.find_branchid = this.find_branchid.bind(this);
//         this.find_somiteename = this.find_somiteename.bind(this);
//         this.findofficeid_somiteename = this.findofficeid_somiteename.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//         // this.fullname = this.fullname.bind(this);
//         // this.fathername = this.fathername.bind(this);
//         // this.mothername = this.mothername.bind(this);
//         // this.phone = this.phone.bind(this);
//         // this.email = this.email.bind(this);
//         // this.dob = this.dob.bind(this);
//         // this.nid = this.nid.bind(this);
//         // this.comiteename = this.comiteename.bind(this);
//         // this.officeid = this.officeid.bind(this);
//         // this.branchid = this.branchid.bind(this);
//     }


//     DataTable() {
//         // Swal.fire(
//         //     'Good job!',
//         //     'New Member Added Successfully',
//         //     'success'
//         // )
//         return this.state.getofficeid.map((res, i) => {
//             return <Branchdrop obj={res} key={i} />;
//         });
//     }

//     DataTable_BranchID() {
//         return this.state.getbranchid.map((res, i) => {
//             return <Somiteedrop obj={res} key={i} />;
//         });
//     }

//     DataTable_somiteename() {
//         return this.state.getsomiteename.map((res, i) => {
//             return <Somiteenamedrop obj={res} key={i} />;
//         });
//     }



//     getofficeid(e) {
//         e.preventDefault();
//         axios.get('http://127.0.0.1:8000/api/find_office_id')
//             .then(res => {
//                 const getofficeid = res.data;
//                 this.setState({ getofficeid });
//                 console.log(res.data);
//                 // this.state.officeid=res.data.bind(this);

//             })
//     }



//     find_branchid(e) {


//         const packets = {
//             officeid: this.state.officeid
//         };
//         console.log(this.state.officeid);
//         axios.post('http://127.0.0.1:8000/api/find_branch_id', packets)
//             .then(res => {
//                 const getbranchid = res.data;
//                 this.setState({ getbranchid });
//                 // console.log(getbranchid);
//                 // this.state.officeid=res.data.bind(this);
//                 console.log(res.data);

//             })
//     }

//     find_somiteename(e) {


//         // const packets = {
//         //     officeid: this.state.officeid,
//         //     branchid: this.state.branchid
//         // };
//         console.log(this.state.officeid);
//         axios.get('http://127.0.0.1:8000/api/allsomiteename')
//             .then(res => {
//                 const getsomiteename = res.data;
//                 console.log(res.data);
//                 this.setState({ getsomiteename });
//                 // console.log(getbranchid);
//                 // this.state.officeid=res.data.bind(this);
//                 // console.log(res.data);

//             })
//     }

//     handleChange = event => {
//         const { name, value } = event.target
//         this.setState({
//             [name]: value
//         })
//     }

//     findofficeid_somiteename(e) {
//         // e.preventDefault();
//         console.log(this.state.somiteename);
//         console.log("hi i amfrom getoffice id");
//         var bbb = [];

//         const packets = {
//             somiteename: this.state.somiteename
//         };
//         axios.post('http://127.0.0.1:8000/api/findofficeid_membership_setup', packets)
//             .then(res => {
//                 bbb = res.data;
//                 console.log(bbb[0].officeid);
//                 this.setState({ officeid: bbb[0].officeid })

//             })

//         return (bbb)

//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const xx = this.findofficeid_somiteename();
//         console.log(xx);
//         console.log(this.officeid);


//         const packets = {

//             officeid: this.state.officeid,
//             branchid: this.state.branchid,
//             somiteename: this.state.somiteename,
//             fullname: this.state.fullname,
//             fathername: this.state.fathername,
//             mothername: this.state.mothername,
//             phone: this.state.phone,
//             dob: this.state.dob,
//             nid: this.state.nid,
//             nomini_fullname: this.state.nomini_fullname,
//             nomini_fathername: this.state.nomini_fathername,
//             nomini_mothername: this.state.nomini_mothername,
//             nomini_relation: this.state.nomini_relation,
//             nomini_phone: this.state.nomini_phone,
//             nomini_dob: this.state.nomini_dob,
//             nomini_nid: this.state.nomini_nid,


//         };
//         console.log(packets);
//         axios.post('memberdatastore', packets)
//             .then(res => {
//                 console.log(res.data);

//             }


//             )
//             .catch(error => {
//                 console.log("ERROR:: ", error.response.data);

//             });

//         Swal.fire(
//             'Good job!',
//             'New Member Added Successfully',
//             'success'
//         )

//         // this.form.reset();

//         //   this.setState({fullname: '',
//         //   fathername: '',
//         //   mothername: '',
//         //   phone: '',
//         //   email: '',
//         //   dob: '',
//         //   nid: '',
//         //   comiteename: '',
//         //   officeid: '',
//         //   branchid: '' })

//     }



//     _next = () => {
//         let currentStep = this.state.currentStep
//         currentStep = currentStep >= 2 ? 3 : currentStep + 1
//         this.setState({
//             currentStep: currentStep
//         })
//     }

//     _prev = () => {
//         let currentStep = this.state.currentStep
//         currentStep = currentStep <= 1 ? 1 : currentStep - 1
//         this.setState({
//             currentStep: currentStep
//         })
//     }

//     /*
//     * the functions for our button
//     */
//     previousButton() {
//         let currentStep = this.state.currentStep;
//         if (currentStep !== 1) {
//             return (
//                 // <button
//                 //     className="btn btn-secondary"
//                 //     type="button" onClick={this._prev}>
//                 //     ↵
//                 // </button>
//                 <IconContext.Provider value={{ color: 'black' }}>
//                     <div className="add">
//                         {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
//                         {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
//                         <GrFormPreviousLink style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this._prev} />
//                     </div>
//                 </IconContext.Provider>

//             )
//         }
//         return null;

//     }

//     nextButton() {
//         let currentStep = this.state.currentStep;
//         if (currentStep < 3) {
//             return (
//                 <IconContext.Provider value={{ color: 'black' }}>
//                     <div className="add">
//                         {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
//                         {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
//                         <GrFormNextLink style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this._next} />
//                     </div>
//                 </IconContext.Provider>
//             )
//             // return (
//             //     <button
//             //         className="btn btn-primary float-right"
//             //         type="button" onClick={this._next}>
//             //         →
//             //     </button>
//             // )
//         }
//         return null;
//     }

//     render() {
//         return (

//             < React.Fragment >


//                 <div className='body'>
//                     <div className='container'>
//                         {/* <div className="title" > MemberShip Form </div> */}
//                         <div className='content'>

//                             <form onSubmit={this.handleSubmit}>
//                                 {/* 
//           render the form steps and pass required props in
//         */}
//                                 <Step1
//                                     currentStep={this.state.currentStep}
//                                     handleChange={this.handleChange}
//                                     // email={this.state.email}
//                                     // getofficeid={this.getofficeid}
//                                     // DataTable={this.DataTable()}
//                                     // find_branchid={this.find_branchid}
//                                     // DataTable_BranchID={this.DataTable_BranchID()}
//                                     find_somiteename={this.find_somiteename}
//                                     DataTable_somiteename={this.DataTable_somiteename()}

//                                 />
//                                 <Step2
//                                     currentStep={this.state.currentStep}
//                                     handleChange={this.handleChange}
//                                     username={this.state.username}

//                                 />
//                                 {/* <Step3
//                                     currentStep={this.state.currentStep}
//                                     handleChange={this.handleChange}
//                                     password={this.state.password}
//                                 /> */}
//                                 <div className="button">
//                                     {this.previousButton()}
//                                     {this.nextButton()}
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>

//             </React.Fragment >
//         );
//     }
// }


// function Step1(props) {

//     if (props.currentStep !== 1) {
//         return null
//     }
//     return (
//         // <div>
//         //     <div className="title" > Key Information </div>

//         //     <div className="user-details">
//         //         <div className="input-box">
//         //             <span className="details"> office Id </span>
//         //             <select id="officeid" name="officeid" onClick={props.getofficeid} onChange={props.handleChange}  >
//         //                 <option></option>
//         //                 <option>HI</option>
//         //                 {props.DataTable}
//         //             </select>
//         //         </div>

//         //         <div className="input-box">
//         //             <span className="details"> Branch Id </span>
//         //             <select id="branchid" name="branchid" onClick={props.find_branchid} onChange={props.handleChange} >
//         //                 <option> </option>
//         //                 {props.DataTable_BranchID}
//         //             </select>
//         //         </div>

//         //         <div className="input-box">
//         //             <span className="details"> Somitee Name </span>
//         //             <select id="somiteename" name="somiteename" onClick={props.find_somiteename} onChange={props.handleChange} >
//         //                 <option> </option>
//         //                 {props.DataTable_somiteename}
//         //             </select>
//         //         </div>


//         //     </div>
//         // </div>

//         <div>
//             <div className="title" > Basic Information </div>

//             <div className="user-details">
//                 <div className="input-box">
//                     <span className="details"> Somitee Name </span>
//                     <select id="somiteename" name="somiteename" onClick={props.find_somiteename} onChange={props.handleChange} >
//                         <option> </option>
//                         {props.DataTable_somiteename}
//                     </select>
//                 </div>

//                 <div className="input-box">
//                     <span className="details"> Full Name </span>
//                     <input id="fullname" name="fullname" type="text" placeholder=" Enter full name" value={props.fullname} onChange={props.handleChange} required />
//                 </div>

//                 <div className="input-box">
//                     <span className="details"> Father Name </span>
//                     <input id="fathername" name="fathername" type="text" placeholder="Enter father name" value={props.fathername} onChange={props.handleChange} required />
//                 </div>
//                 <div className="input-box">
//                     <span className="details"> Mother Name </span>
//                     <input id="mothername" name="mothername" type="text" placeholder="Enter mother name" value={props.mothername} onChange={props.handleChange} required />
//                 </div>

//                 <div className="input-box">
//                     < span className="details" > Phone Number </span>
//                     <input id="phone" name="phone" type="number" placeholder="Enter phone number" value={props.phone} onChange={props.handleChange} required />
//                 </div>


//                 <div className="input-box" >
//                     <span className="details" > Date Of Birth </span>
//                     <input id="dob" name="dob" type="date" placeholder="Enter Comitee Name" value={props.dob} onChange={props.handleChange} required />
//                 </div>

//                 <div className="input-box" >
//                     <span className="details" > National Id </span>
//                     <input id="nid" name="nid" type="text" placeholder="Enter national id" value={props.nid} onChange={props.handleChange} required />
//                 </div>


//             </div>
//         </div>
//     );
// }

// function Step2(props) {
//     if (props.currentStep !== 2) {
//         return null
//     }
//     return (

//         // <div>
//         //     <div className="title" > Basic Information </div>

//         //     <div className="user-details">

//         //         <div className="input-box">
//         //             <span className="details"> Full Name </span>
//         //             <input id="fullname" name="fullname" type="text" placeholder=" Enter full name" value={props.fullname} onChange={props.handleChange} required />
//         //         </div>

//         //         <div className="input-box">
//         //             <span className="details"> Father Name </span>
//         //             <input id="fathername" name="fathername" type="text" placeholder="Enter father name" value={props.fathername} onChange={props.handleChange} required />
//         //         </div>
//         //         <div className="input-box">
//         //             <span className="details"> Mother Name </span>
//         //             <input id="mothername" name="mothername" type="text" placeholder="Enter mother name" value={props.mothername} onChange={props.handleChange} required />
//         //         </div>

//         //         <div className="input-box">
//         //             < span className="details" > Phone Number </span>
//         //             <input id="phone" name="phone" type="number" placeholder="Enter phone number" value={props.phone} onChange={props.handleChange} required />
//         //         </div>


//         //         <div className="input-box" >
//         //             <span className="details" > Date Of Birth </span>
//         //             <input id="dob" name="dob" type="date" placeholder="Enter Comitee Name" value={props.dob} onChange={props.handleChange} required />
//         //         </div>

//         //         <div className="input-box" >
//         //             <span className="details" > National Id </span>
//         //             <input id="nid" name="nid" type="text" placeholder="Enter national id" value={props.nid} onChange={props.handleChange} required />
//         //         </div>


//         //     </div>
//         // </div>
//         <React.Fragment>

//             <div>
//                 <div className="title" > Nomini Information </div>

//                 <div className="user-details">

//                     <div className="input-box">
//                         <span className="details"> Full Name </span>
//                         <input id="nomini_fullname" name="nomini_fullname" type="text" placeholder=" Enter full name" value={props.nomini_fullname} onChange={props.handleChange} required />
//                     </div>

//                     <div className="input-box">
//                         <span className="details"> Father Name </span>
//                         <input id="nomini_fathername" name="nomini_fathername" type="text" placeholder="Enter father name" value={props.nomini_fathername} onChange={props.handleChange} required />
//                     </div>
//                     <div className="input-box">
//                         <span className="details"> Mother Name </span>
//                         <input id="nomini_mothername" name="nomini_mothername" type="text" placeholder="Enter mother name" value={props.nomini_mothername} onChange={props.handleChange} required />
//                     </div>
//                     <div className="input-box" >
//                         <span className="details" > Relation </span>
//                         <input id="nomini_relation" name="nomini_relation" type="text" placeholder="Enter email id" value={props.nomini_relation} onChange={props.handleChange} required />
//                     </div>

//                     <div className="input-box">
//                         < span className="details" > Phone Number </span>
//                         <input id="nomini_phone" name="nomini_phone" type="number" placeholder="Enter phone number" value={props.nomini_phone} onChange={props.handleChange} required />
//                     </div>



//                     <div className="input-box" >
//                         <span className="details" > Date Of Birth </span>
//                         <input id="nomini_dob" name="nomini_dob" type="date" placeholder="Enter Comitee Name" value={props.nomini_dob} onChange={props.handleChange} required />
//                     </div>

//                     <div className="input-box" >
//                         <span className="details" > National Id </span>
//                         <input id="nomini_nid" name="nomini_nid" type="text" placeholder="Enter national id" value={props.nomini_nid} onChange={props.handleChange} required />
//                     </div>


//                 </div>
//             </div>
//             <button className="btn btn-success btn-block" >Sign up</button>
//         </React.Fragment>

//     );
// }

// // function Step3(props) {
// //     if (props.currentStep !== 3) {
// //         return null
// //     }
// //     return (
// //         <React.Fragment>


// //             <div>
// //                 <div className="title" > Nomini Information </div>

// //                 <div className="user-details">

// //                     <div className="input-box">
// //                         <span className="details"> Full Name </span>
// //                         <input id="nomini_fullname" name="nomini_fullname" type="text" placeholder=" Enter full name" value={props.nomini_fullname} onChange={props.handleChange} required />
// //                     </div>

// //                     <div className="input-box">
// //                         <span className="details"> Father Name </span>
// //                         <input id="nomini_fathername" name="nomini_fathername" type="text" placeholder="Enter father name" value={props.nomini_fathername} onChange={props.handleChange} required />
// //                     </div>
// //                     <div className="input-box">
// //                         <span className="details"> Mother Name </span>
// //                         <input id="nomini_mothername" name="nomini_mothername" type="text" placeholder="Enter mother name" value={props.nomini_mothername} onChange={props.handleChange} required />
// //                     </div>
// //                     <div className="input-box" >
// //                         <span className="details" > Relation </span>
// //                         <input id="nomini_relation" name="nomini_relation" type="text" placeholder="Enter email id" value={props.nomini_relation} onChange={props.handleChange} required />
// //                     </div>

// //                     <div className="input-box">
// //                         < span className="details" > Phone Number </span>
// //                         <input id="nomini_phone" name="nomini_phone" type="number" placeholder="Enter phone number" value={props.nomini_phone} onChange={props.handleChange} required />
// //                     </div>



// //                     <div className="input-box" >
// //                         <span className="details" > Date Of Birth </span>
// //                         <input id="nomini_dob" name="nomini_dob" type="date" placeholder="Enter Comitee Name" value={props.nomini_dob} onChange={props.handleChange} required />
// //                     </div>

// //                     <div className="input-box" >
// //                         <span className="details" > National Id </span>
// //                         <input id="nomini_nid" name="nomini_nid" type="text" placeholder="Enter national id" value={props.nomini_nid} onChange={props.handleChange} required />
// //                     </div>


// //                 </div>
// //             </div>
// //             <button className="btn btn-success btn-block" >Sign up</button>
// //         </React.Fragment>
// //     );
// // }


import React, { Component, useState } from 'react'
import './comiteesetup.css'
import axios from "axios";
import './comiteesetup.css';
import { AiFillSave } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { IconContext } from 'react-icons';
import Branchdrop from './Branchdrop';
import Somiteedrop from './Somiteedrop';
import Swal from 'sweetalert2';
import Somiteenamedrop from './Somiteenamedrop';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import MultiStepProgressBar from './MultiStepProgressBar';




export default class Membership extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            officeid: '',
            branchid: '',
            somiteename: '',
            fullname: '',
            fathername: '',
            mothername: '',
            phone: '',
            dob: '',
            nid: '',
            nomini_fullname: '',
            nomini_fathername: '',
            nomini_mothername: '',
            nomini_relation: '',
            nomini_phone: '',
            nomini_dob: '',
            nomini_nid: '',
            getofficeid: [],
            findbranchid: [],
            getbranchid: [],
            getsomiteename: []

        };
        this.getofficeid = this.getofficeid.bind(this);
        this.find_branchid = this.find_branchid.bind(this);
        this.find_somiteename = this.find_somiteename.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // this.fullname = this.fullname.bind(this);
        // this.fathername = this.fathername.bind(this);
        // this.mothername = this.mothername.bind(this);
        // this.phone = this.phone.bind(this);
        // this.email = this.email.bind(this);
        // this.dob = this.dob.bind(this);
        // this.nid = this.nid.bind(this);
        // this.comiteename = this.comiteename.bind(this);
        // this.officeid = this.officeid.bind(this);
        // this.branchid = this.branchid.bind(this);
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

    DataTable_somiteename() {
        return this.state.getsomiteename.map((res, i) => {
            return <Somiteenamedrop obj={res} key={i} />;
        });
    }



    getofficeid(e) {
        e.preventDefault();
        axios.get('http://192.168.0.111:8000/api/find_office_id')
            .then(res => {
                const getofficeid = res.data;
                this.setState({ getofficeid });
                // this.state.officeid=res.data.bind(this);

            })
    }



    find_branchid(e) {


        const packets = {
            officeid: this.state.officeid
        };
        console.log(this.state.officeid);
        axios.post('http://192.168.0.111:8000/api/find_branch_id', packets)
            .then(res => {
                const getbranchid = res.data;
                this.setState({ getbranchid });
                // console.log(getbranchid);
                // this.state.officeid=res.data.bind(this);
                console.log(res.data);

            })
    }

    find_somiteename(e) {


        const packets = {
            officeid: this.state.officeid,
            branchid: this.state.branchid
        };
        console.log(this.state.officeid);
        axios.post('http://192.168.0.111:8000/api/find_somiteename', packets)
            .then(res => {
                const getsomiteename = res.data;
                console.log(res.data);
                this.setState({ getsomiteename });
                // console.log(getbranchid);
                // this.state.officeid=res.data.bind(this);
                // console.log(res.data);

            })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();


        const packets = {

            officeid: this.state.officeid,
            branchid: this.state.branchid,
            somiteename: this.state.somiteename,
            fullname: this.state.fullname,
            fathername: this.state.fathername,
            mothername: this.state.mothername,
            phone: this.state.phone,
            dob: this.state.dob,
            nid: this.state.nid,
            nomini_fullname: this.state.nomini_fullname,
            nomini_fathername: this.state.nomini_fathername,
            nomini_mothername: this.state.nomini_mothername,
            nomini_relation: this.state.nomini_relation,
            nomini_phone: this.state.nomini_phone,
            nomini_dob: this.state.nomini_dob,
            nomini_nid: this.state.nomini_nid,


        };
        console.log(packets);
        axios.post('memberdatastore', packets)
            .then(res => {
                console.log(res.data);

            }


            )
            .catch(error => {
                console.log("ERROR:: ", error.response.data);

            });

        Swal.fire(
            'Good job!',
            'New Member Added Successfully',
            'success'
        )

        // this.form.reset();

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



    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                // <button
                //     className="btn btn-secondary"
                //     type="button" onClick={this._prev}>
                //     ↵
                // </button>
                <IconContext.Provider value={{ color: 'black' }}>
                    <div className="add">
                        {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
                        {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
                        <GrFormPreviousLink style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this._prev} />
                    </div>
                </IconContext.Provider>

            )
        }
        return null;

    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <IconContext.Provider value={{ color: 'black' }}>
                    <div className="add">
                        {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
                        {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
                        <GrFormNextLink style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this._next} />
                    </div>
                </IconContext.Provider>
            )
            // return (
            //     <button
            //         className="btn btn-primary float-right"
            //         type="button" onClick={this._next}>
            //         →
            //     </button>
            // )
        }
        return null;
    }

    render() {
        return (

            < React.Fragment >


                <div className='body'>
                    <div className='container'>
                        {/* <div className="title" > MemberShip Form </div> */}
                        <div className='content'>
                            <div className="progressbar">
                                <MultiStepProgressBar currentStep={this.state.currentStep} ></MultiStepProgressBar>
                            </div>

                            <form onSubmit={this.handleSubmit}>
                                {/* 
          render the form steps and pass required props in
        */}

                                <Step1
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    email={this.state.email}
                                    getofficeid={this.getofficeid}
                                    DataTable={this.DataTable()}
                                    find_branchid={this.find_branchid}
                                    DataTable_BranchID={this.DataTable_BranchID()}
                                    find_somiteename={this.find_somiteename}
                                    DataTable_somiteename={this.DataTable_somiteename()}

                                />
                                <Step2
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    username={this.state.username}

                                />
                                <Step3
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    password={this.state.password}
                                />
                                <div className="button">
                                    {this.previousButton()}
                                    {this.nextButton()}
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </React.Fragment >

        );
    }
}


function Step1(props) {

    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div>
            <div className="title" > Key Information </div>

            <div className="user-details">
                <div className="input-box">
                    <span className="details"> office Id </span>
                    <select id="officeid" name="officeid" onClick={props.getofficeid} onChange={props.handleChange}  >
                        <option></option>
                        {props.DataTable}
                    </select>
                </div>

                <div className="input-box">
                    <span className="details"> Branch Id </span>
                    <select id="branchid" name="branchid" onClick={props.find_branchid} onChange={props.handleChange} >
                        <option> </option>
                        {props.DataTable_BranchID}
                    </select>
                </div>

                <div className="input-box">
                    <span className="details"> Somitee Name </span>
                    <select id="somiteename" name="somiteename" onClick={props.find_somiteename} onChange={props.handleChange} >
                        <option> </option>
                        {props.DataTable_somiteename}
                    </select>
                </div>


            </div>
        </div>


        // <div className="form-group">
        //     <label htmlFor="email">Email address</label>
        //     <input
        //         className="form-control"
        //         id="email"
        //         name="email"
        //         type="text"
        //         placeholder="Enter email"
        //         value={props.email} 
        //         onChange={props.handleChange}
        //     />
        // </div>
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (

        <div>
            <div className="title" > Basic Information </div>

            <div className="user-details">

                <div className="input-box">
                    <span className="details"> Full Name </span>
                    <input id="fullname" name="fullname" type="text" placeholder=" Enter full name" value={props.fullname} onChange={props.handleChange} required />
                </div>

                <div className="input-box">
                    <span className="details"> Father Name </span>
                    <input id="fathername" name="fathername" type="text" placeholder="Enter father name" value={props.fathername} onChange={props.handleChange} required />
                </div>
                <div className="input-box">
                    <span className="details"> Mother Name </span>
                    <input id="mothername" name="mothername" type="text" placeholder="Enter mother name" value={props.mothername} onChange={props.handleChange} required />
                </div>

                <div className="input-box">
                    < span className="details" > Phone Number </span>
                    <input id="phone" name="phone" type="number" placeholder="Enter phone number" value={props.phone} onChange={props.handleChange} required />
                </div>


                <div className="input-box" >
                    <span className="details" > Date Of Birth </span>
                    <input id="dob" name="dob" type="date" placeholder="Enter Comitee Name" value={props.dob} onChange={props.handleChange} required />
                </div>

                <div className="input-box" >
                    <span className="details" > National Id </span>
                    <input id="nid" name="nid" type="text" placeholder="Enter national id" value={props.nid} onChange={props.handleChange} required />
                </div>


            </div>
        </div>

    );
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <React.Fragment>


            <div>
                <div className="title" > Nomini Information </div>

                <div className="user-details">

                    <div className="input-box">
                        <span className="details"> Full Name </span>
                        <input id="nomini_fullname" name="nomini_fullname" type="text" placeholder=" Enter full name" value={props.nomini_fullname} onChange={props.handleChange} required />
                    </div>

                    <div className="input-box">
                        <span className="details"> Father Name </span>
                        <input id="nomini_fathername" name="nomini_fathername" type="text" placeholder="Enter father name" value={props.nomini_fathername} onChange={props.handleChange} required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Mother Name </span>
                        <input id="nomini_mothername" name="nomini_mothername" type="text" placeholder="Enter mother name" value={props.nomini_mothername} onChange={props.handleChange} required />
                    </div>
                    <div className="input-box" >
                        <span className="details" > Relation </span>
                        {/* <input id="nomini_relation" name="nomini_relation" type="text" placeholder="Enter email id" value={props.nomini_relation} onChange={props.handleChange} required /> */}
                        <select id="nomini_relation" name="nomini_relation" type="text" placeholder="Enter email id" value={props.nomini_relation} onChange={props.handleChange}>
                            <option selected>Select a Relation</option>
                            <option value="Father"> Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Sister">Sister</option>
                            <option value="Brother">Brother</option>
                            <option value="Brother-in-law">Brother-In-Law</option>
                            <option value="Sister-In-Law">Sister-In-Law</option>
                            <option value="Uncle">Uncle</option>
                            <option value="Aunty">Aunty</option>
                        </select>

                    </div>

                    <div className="input-box">
                        < span className="details" > Phone Number </span>
                        <input id="nomini_phone" name="nomini_phone" type="number" placeholder="Enter phone number" value={props.nomini_phone} onChange={props.handleChange} required />
                    </div>



                    <div className="input-box" >
                        <span className="details" > Date Of Birth </span>
                        <input id="nomini_dob" name="nomini_dob" type="date" placeholder="Enter Comitee Name" value={props.nomini_dob} onChange={props.handleChange} required />
                    </div>

                    <div className="input-box" >
                        <span className="details" > National Id </span>
                        <input id="nomini_nid" name="nomini_nid" type="text" placeholder="Enter national id" value={props.nomini_nid} onChange={props.handleChange} required />
                    </div>


                </div>
            </div>
            <button className="btn btn-success btn-block" >ADD Member</button>
        </React.Fragment>
    );
}
