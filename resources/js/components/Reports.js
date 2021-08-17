
// import React, { Component } from 'react'
// import axios from "axios";
// // import ReactDOM from 'react-dom';
// // import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import { AiFillSave } from "react-icons/ai";
// // import { BiReset } from "react-icons/bi";
// import { VscOpenPreview } from "react-icons/vsc";
// import { FcPrint, FcFinePrint } from "react-icons/fc";
// import { IconContext } from 'react-icons';
// import Somiteenamedrop from './Somiteenamedrop';
// import DataTable from './DataTable';
// import ReactToPrint from "react-to-print";
// import './report.css';






// export default class Reports extends Component {


//     constructor(props) {
//         super(props);

//         this.state = {
//             somiteename: '',
//             find_member_group_by_somitee: [],
//             getprintdata: [],
//             getsomiteename: [],

//         }


//         this.somiteename = this.somiteename.bind(this);
//         this.find_somiteename = this.find_somiteename.bind(this);
//         this.member_somitee = this.member_somitee.bind(this);

//     }

//     somiteename(event) {
//         this.setState({ somiteename: event.target.value })
//     }

//     DataTable() {
//         return this.state.find_member_group_by_somitee.map((res, i) => {
//             return <DataTable obj={res}
//                 key={i}
//             />;
//         });


//     }


//     DataTable_somiteename() {
//         return this.state.getsomiteename.map((res, i) => {
//             return <Somiteenamedrop obj={res} key={i} />;
//         });
//     }


//     find_somiteename(e) {
//         e.preventDefault();

//         axios.get('http://127.0.0.1:8000/api/get_somiteename')
//             .then(res => {
//                 console.log(res.data)
//                 const getsomiteename = res.data;
//                 this.setState({ getsomiteename });


//             })
//     }

//     member_somitee(e) {
//         e.preventDefault();


//         const packets = {
//             somiteename: this.state.somiteename
//         };



//         axios.post('http://127.0.0.1:8000/api/find_member_details', packets)
//             .then(res => {
//                 console.log(res.data);
//                 const find_member_group_by_somitee = res.data;
//                 this.setState({ find_member_group_by_somitee });
//             })

//     }


//     // handleSubmit(e) {
//     //     e.preventDefault();

//     //     const packets = {
//     //         fullname: this.state.fullname,
//     //         fathername: this.state.fathername,
//     //         mothername: this.state.mothername,
//     //         phone: this.state.phone,
//     //         email: this.state.email,
//     //         dob: this.state.dob,
//     //         nid: this.state.nid,
//     //         comiteename: this.state.comiteename,
//     //         officeid: this.state.officeid,
//     //         branchid: this.state.branchid

//     //     };

//     //     axios.post('/store', packets)
//     //         .then(
//     //             console.log("Hi data saved")

//     //         )
//     //         .catch(error => {
//     //             console.log("ERROR:: ", error.response.data);

//     //         });

//     //     Swal.fire(
//     //         'Good job!',
//     //         'New Member Added Successfully',
//     //         'success'
//     //     )


//     // }

//     render() {

//         return (

//             <div className='body'>
//                 <div className='container'>
//                     <div className="title" > MemberShip Form </div>
//                     <div className='content'>
//                         <form>
//                             <div className="user-details">
//                                 <div className="input-box">
//                                     <span className="details"> Somitee Name </span>
//                                     <select onClick={this.find_somiteename} onChange={this.somiteename}>
//                                         <option> </option>
//                                         {this.DataTable_somiteename()}
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="button">
//                                 <IconContext.Provider value={{ color: 'black' }}>
//                                     <div className="add">
//                                         {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
//                                         {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
//                                         <VscOpenPreview style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this.member_somitee} />
//                                     </div>
//                                 </IconContext.Provider>

//                             </div>

//                         </form>
//                     </div>
//                 </div>
//                 <div className='printarea'>
//                     <Preview
//                         member_somitee={this.member_somitee}
//                         somiteename={this.state.somiteename}
//                         DataTable={this.DataTable()}
//                         ref={el => (this.componentRef = el)}

//                     />

//                 </div>

//                 <div className="printiconarea">
//                     <IconContext.Provider value={{ color: 'black' }}>


//                         {/* <input type = "submit"value = "-"/> */}
//                         {/* < FcPrint style={{ fontSize: '2.5rem', cursor: 'pointer' }} /> */}
//                         <ReactToPrint trigger={
//                             () => < button >  < FcPrint style={{ fontSize: '2.5rem', cursor: 'pointer' }} /></button >}
//                             content={
//                                 () => this.componentRef}
//                         />


//                     </IconContext.Provider>
//                 </div>
//             </div>
//         );
//     }
// }


// class Preview extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className='printarea2'>
//                 <div className='contentarea'>
//                     <div className="titlearea">
//                         <h3>Report of Member In Same Somitee</h3>
//                     </div>

//                     <div className="general-content">
//                         <h4>Somitee Name:{this.props.somiteename}</h4>
//                         <h5>Created By:</h5>
//                         <h6>Date:</h6>
//                         <br />
//                         <br />
//                         <p></p>

//                     </div>

//                 </div>

//                 <div className="table area">
//                     <table className='table_format'>
//                         <thead>
//                             <tr>
//                                 <th>Fullname</th>
//                                 <th>Phone</th>
//                                 <th>Nomini Fullname</th>
//                                 <th>Nomini Phone</th>
//                             </tr>
//                         </thead>
//                         <tbody>

//                             {this.props.DataTable}

//                         </tbody>
//                     </table>

//                 </div>

//             </div>

//         );
//     }

// }



import React, { Component } from 'react'
import axios from "axios";
import './report.css';
import { VscOpenPreview } from "react-icons/vsc";
import { FcPrint, FcFinePrint } from "react-icons/fc";
import { IconContext } from 'react-icons';
import Somiteenamedrop from './Somiteenamedrop';
import DataTable from './DataTable';
import ReactToPrint from "react-to-print";






export default class Reports extends Component {


    constructor(props) {
        super(props);

        this.state = {
            somiteename: '',
            find_member_group_by_somitee: [],
            getprintdata: [],
            getsomiteename: [],

        }


        this.somiteename = this.somiteename.bind(this);
        this.find_somiteename = this.find_somiteename.bind(this);
        this.member_somitee = this.member_somitee.bind(this);

    }

    somiteename(event) {
        this.setState({ somiteename: event.target.value })
    }

    DataTable() {
        return this.state.find_member_group_by_somitee.map((res, i) => {
            return <DataTable obj={res}
                key={i}
            />;
        });


    }


    DataTable_somiteename() {
        return this.state.getsomiteename.map((res, i) => {
            return <Somiteenamedrop obj={res} key={i} />;
        });
    }


    find_somiteename(e) {
        e.preventDefault();

        axios.get('http://192.168.0.111:8000/api/get_somiteename')
            .then(res => {
                console.log(res.data)
                const getsomiteename = res.data;
                this.setState({ getsomiteename });


            })
    }

    member_somitee(e) {
        e.preventDefault();

        if (this.state.somiteename == 'All') {
            axios.get('http://127.0.0.1:8000/api/find_member')
                .then(res => {
                    console.log(res.data);
                    const find_member_group_by_somitee = res.data;
                    this.setState({ find_member_group_by_somitee });
                })

        }
        else {

            const packets = {
                somiteename: this.state.somiteename
            };



            axios.post('http://127.0.0.1:8000/api/find_member_details', packets)
                .then(res => {
                    console.log(res.data);
                    const find_member_group_by_somitee = res.data;
                    this.setState({ find_member_group_by_somitee });
                })

        }



    }


    // handleSubmit(e) {
    //     e.preventDefault();

    //     const packets = {
    //         fullname: this.state.fullname,
    //         fathername: this.state.fathername,
    //         mothername: this.state.mothername,
    //         phone: this.state.phone,
    //         email: this.state.email,
    //         dob: this.state.dob,
    //         nid: this.state.nid,
    //         comiteename: this.state.comiteename,
    //         officeid: this.state.officeid,
    //         branchid: this.state.branchid

    //     };

    //     axios.post('/store', packets)
    //         .then(
    //             console.log("Hi data saved")

    //         )
    //         .catch(error => {
    //             console.log("ERROR:: ", error.response.data);

    //         });

    //     Swal.fire(
    //         'Good job!',
    //         'New Member Added Successfully',
    //         'success'
    //     )


    // }

    render() {

        return (

            <div className='body-warp'>
                <div className='container'>
                    <div className="title" > MemberShip Form </div>
                    <div className='content'>
                        <form>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details"> Somitee Name </span>
                                    <select onClick={this.find_somiteename} onChange={this.somiteename}>
                                        <option> </option>
                                        <option>All</option>
                                        {this.DataTable_somiteename()}
                                    </select>
                                </div>
                            </div>
                            <div className="button">
                                <IconContext.Provider value={{ color: 'black' }}>
                                    <div className="add">
                                        {/* <button  onClick = { this.handleSubmit }><AiFillSave className = "add" /></button> */}
                                        {/* <input type = "submit"value = "+" onClick = { this.handleSubmit }/>  */}
                                        <VscOpenPreview style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={this.member_somitee} />
                                    </div>
                                </IconContext.Provider>

                            </div>

                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className=''>
                        <Preview
                            member_somitee={this.member_somitee}
                            somiteename={this.state.somiteename}
                            DataTable={this.DataTable()}
                            ref={el => (this.componentRef = el)}

                        />

                    </div>
                </div>

                <div className="printiconarea">
                    <IconContext.Provider value={{ color: 'black' }}>


                        {/* <input type = "submit"value = "-"/> */}
                        {/* < FcPrint style={{ fontSize: '2.5rem', cursor: 'pointer' }} /> */}
                        <ReactToPrint trigger={
                            () => < button >  < FcPrint style={{ fontSize: '2.5rem', cursor: 'pointer' }} /></button >}
                            content={
                                () => this.componentRef}
                        />


                    </IconContext.Provider>
                </div>
            </div>
        );
    }
}


class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className=''>
                <div className=''>
                    <div className="titlearea">
                        <h3>Report of Member In Same Somitee</h3>
                    </div>

                    <div className="general-content">
                        <h4>Somitee Name:{this.props.somiteename}</h4>
                        <h5>Created By:</h5>
                        <h6>Date:</h6>
                        <br />
                        <br />
                        <p></p>

                    </div>

                </div>

                <div className="table area">
                    <table className='table_format'>
                        <thead style={{ backgroundColor: "#000000" }}>
                            <tr>
                                <th>Fullname</th>
                                <th>Phone</th>
                                <th>Nomini Fullname</th>
                                <th>Nomini Phone</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.props.DataTable}

                        </tbody>
                    </table>

                </div>

            </div>

        );
    }

}
