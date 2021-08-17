import React, { Component } from 'react'
import axios from "axios";
import './comiteesetup.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Swal from 'sweetalert2';
import { BsPlusCircle } from "react-icons/bs";
import StarRateIcon from '@material-ui/icons/StarRate';
import { AiFillSave, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { IconContext } from 'react-icons';
import Header from './Header'
import DataTable from './DataTable';
import { Table, Button } from "reactstrap";
import EditOffice from './EditOffice';




class Officesetup extends Component {


    constructor(props) {
        super(props);

        var data = true;

        this.state = {
            officeid: '',
            officename: '',
            adress: '',
            maximum_branch: '',
            maximum_somitee: '',
            office_in_charge: '',
            phone: '',
            email: '',
            offices: [],
            editofficeData: {
                _id: '',
                officeid: '',
                officename: '',
                adress: '',
                maximum_branch: '',
                maximum_somitee: '',
                office_in_charge: '',
                phone: '',
                email: ''
            },
            editofficeModal: false,
            noDataFound: "",
            seesidebar: true,

            errors: {}

        }

        this.officeid = this.officeid.bind(this);
        this.officename = this.officename.bind(this);
        this.adress = this.adress.bind(this);
        this.maximum_branch = this.maximum_branch.bind(this);
        this.maximum_somitee = this.maximum_somitee.bind(this);
        this.office_in_charge = this.office_in_charge.bind(this);
        this.phone = this.phone.bind(this);
        this.email = this.email.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.cancelCourse = this.cancelCourse.bind(this);
    }

    officeid(event) {
        this.setState({ officeid: event.target.value })
    }
    officename(event) {
        this.setState({ officename: event.target.value })
    }
    adress(event) {
        this.setState({ adress: event.target.value })
    }
    maximum_branch(event) {
        this.setState({ maximum_branch: event.target.value })
    }
    maximum_somitee(event) {
        this.setState({ maximum_somitee: event.target.value })
    }
    office_in_charge(event) {
        this.setState({ office_in_charge: event.target.value })
    }
    phone(event) {
        this.setState({ phone: event.target.value })
    }
    email(event) {
        this.setState({ email: event.target.value })
    }

    // chechkofficeid() {
    //     // const checkofficeid = this.state.officeid;
    //     // console.log(checkofficeid);

    //     const packets = {
    //         officeid: this.state.officeid,
    //     };

    //     axios.post('checkofficeid', packets)
    //         .then(res => {
    //             // if (res.data = 200) {
    //             //     this.setState({ checkofficeid: 200 })
    //             // }
    //             // if (res.data = 100) {
    //             //     this.setState({ checkofficeid: '' })
    //             // }
    //             console.log(res.data)

    //             if (res.data = 200) {
    //                 return 200;
    //             }
    //             else if (res.data = 100) {
    //                 return '';
    //             }
    //         }

    //         )
    //         .catch(error => {
    //             console.log("ERROR:: ", error.response.data);

    //         });

    // }

    componentDidMount() {


        this.getoffice()
    }

    getoffice() {
        axios.get(`http://192.168.0.111:8000/api/find_office`)
            .then(res => {
                const offices = res.data;
                this.setState({ offices });
            })

    }



    // DataTable() {


    //     console.log(this.state.offices)



    //     return this.state.offices.map((res, i) => {
    //         return <DataTable obj={res} key={i} />;
    //     });
    // }

    deleteMemberrship = (id) => {
        axios.delete(`http://192.168.0.111:8000/api/office_delete/` + id)
            .then((res) => {
                this.getoffice()
                console.log('delet sucessfully')

            }).catch((error) => {
                console.log(error)
            })


    }



    toggleEditofficeModal = () => {
        this.setState({
            editofficeModal: !this.state.editofficeModal,
        });
    };

    onChangeEditofficeHanler = (e) => {
        let { editofficeData } = this.state;
        editofficeData[e.target.name] = e.target.value;
        this.setState({ editofficeData });
    };

    editoffice = (_id, officeid, officename, adress, maximum_branch, maximum_somitee, office_in_charge, phone, email) => {
        this.setState({
            editofficeData: { _id, officeid, officename, adress, maximum_branch, maximum_somitee, office_in_charge, phone, email },
            editofficeModal: !this.state.editofficeModal,
        });
    };

    updateoffice = () => {
        let {
            _id, officeid, officename, adress, maximum_branch, maximum_somitee, office_in_charge, phone, email
        } = this.state.editofficeData;

        // console.log(this.state.editofficeData);


        axios.post("http://192.168.0.111:8000/api/officeupdate", {
            _id, officeid, officename, adress, maximum_branch, maximum_somitee, office_in_charge, phone, email
        })
            .then((response) => {
                console.log("i am from update")
                console.log(response.data)
                this.getoffice();
                this.setState({
                    editofficeModal: false,
                    editofficeData: { _id, officeid, officename, adress, maximum_branch, maximum_somitee, office_in_charge, phone, email },

                });
            })
            .catch((error) => {
                this.setState({ isLoading: false })
                console.log(error.response);
            });
    };

    handleValidation() {
        // let checkoffice

        let fields = {
            officeid: this.state.officeid,
            officename: this.state.officename,
            adress: this.state.adress,
            maximum_branch: this.state.maximum_branch,
            maximum_somitee: this.state.maximum_somitee,
            office_in_charge: this.state.office_in_charge,
            phone: this.state.phone,
            // checkoffice: this.chechkofficeid(),
            email: this.state.email,
        }
        let formIsValid = true;
        let errors = {};
        //Office Id Validation
        // console.log(checkoffice);

        if (!fields["officeid"]) {
            formIsValid = false;
            errors["officeid"] = "Cannot be empty";
        }
        // if (!fields[" checkoffice"]) {
        //     formIsValid = false;
        //     errors[" checkoffice"] = "OfficeId already in database";
        // }
        //Office Name Validation
        if (!fields["officename"]) {
            formIsValid = false;
            errors["officename"] = "Cannot be empty";
        }
        //Address Validation
        if (!fields["adress"]) {
            formIsValid = false;
            errors["adress"] = "Cannot be empty";
        }
        //Maximum-branch validation
        if (!fields["maximum_branch"]) {
            formIsValid = false;
            errors["maximum_branch"] = "Cannot be empty";
        }

        if (fields["maximum_branch"] > 5) {
            formIsValid = false;
            errors["maximum_branch"] = "Sorry,maximum limit reached";
        }

        //Maximum-Somiitee validation
        if (!fields["maximum_somitee"]) {
            formIsValid = false;
            errors["maximum_somitee"] = "Cannot be empty";
        }

        if (fields["maximum_somitee"] > 40) {
            formIsValid = false;
            errors["maximum_somitee"] = "Sorry,maximum limit reached";
        }
        //Office-In-Charge validation

        if (!fields["office_in_charge"]) {
            formIsValid = false;
            errors["office_in_charge"] = "Cannot be empty";
        }

        //Phone No Validation

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }
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




        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();


        if (this.handleValidation()) {
            console.log("i am here for save data ")


            const packets = {
                officeid: this.state.officeid,
                officename: this.state.officename,
                adress: this.state.adress,
                maximum_branch: this.state.maximum_branch,
                maximum_somitee: this.state.maximum_somitee,
                office_in_charge: this.state.office_in_charge,
                phone: this.state.phone,
                email: this.state.email,

            };

            axios.post('http://192.168.0.111:8000/api/officesetup', packets)
                .then(res => {
                    console.log(res.data)
                }

                )
                .catch(error => {
                    console.log("ERROR:: ", error.response.data);

                });

            this.setState({
                officeid: '',
                officename: '',
                adress: '',
                maximum_branch: '',
                maximum_somitee: '',
                office_in_charge: '',
                phone: '',
                email: ''
            },
                () => this.getoffice());




            Swal.fire({
                position: 'center',
                icon: 'sucess',
                title: 'Good Job ',
                text: 'New office Added Sucessfully',
                showConfirmButton: false,
                timer: 1000
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
            officename: '',
            adress: '',
            maximum_branch: '',
            maximum_somitee: '',
            office_in_charge: '',
            phone: '',
            email: ''
        });
    }

    seesidebar = () => {

        this.setState({ seesidebar: !(this.state.seesidebar) });
        console.log("see header");
    };

    render() {

        let officesDetails = [];
        if (this.state.offices.length) {
            officesDetails = this.state.offices.map((offices) => {
                return (
                    <tr>
                        <td>{offices.officeid}</td>
                        <td>{offices.officename}</td>
                        <td>{offices.adress}</td>

                        <td>
                            <IconContext.Provider value={{ color: 'black', fontSize: '2.5rem' }}>
                                <div className="add">

                                    <AiFillEdit style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'blue' }}
                                        onClick={() =>
                                            this.editoffice(
                                                offices._id,
                                                offices.officeid,
                                                offices.officename,
                                                offices.adress,
                                                offices.maximum_branch,
                                                offices.maximum_somitee,
                                                offices.office_in_charge,
                                                offices.phone,
                                                offices.email,

                                            )
                                        }
                                    />

                                </div>
                            </IconContext.Provider>


                        </td>
                        <td>
                            <IconContext.Provider value={{ color: 'black', fontSize: '1.5rem' }}>
                                <div className="add">
                                    <AiFillDelete style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'red' }} onClick={() => this.deleteMemberrship(offices._id)} />
                                </div>
                            </IconContext.Provider>


                        </td>
                        {/* <td>
                            <Button
                                color="success"
                                className="mr-3"
                                size="sm"
                            >
                                Edit
                            </Button>
                            <Button
                                color="danger"
                                size="sm"
                                onClick={() => this.deleteMemberrship(offices._id)}
                            >
                                Delete

                            </Button>
                        </td> */}
                    </tr>
                );
            });
        }

        return (
            <>
                <Header
                // seesidebar={this.seesidebar()}
                />
                {/* <div className={this.state.seesidebar ? 'pagesarea' : 'closesidebarpagesarea '}> */}
                <div className='body'>
                    <div className='container'>
                        <div className="title" > Office Setup Form </div>
                        <div className='content'>
                            <EditOffice
                                toggleEditofficeModal={this.toggleEditofficeModal}
                                editofficeModal={this.state.editofficeModal}
                                onChangeEditofficeHanler={this.onChangeEditofficeHanler}
                                editoffice={this.editoffice}
                                editofficeData={this.state.editofficeData}
                                updateoffice={this.updateoffice}
                            />
                            <form>
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Office Id</span>
                                        <input type="text" value={this.state.officeid} placeholder=" Enter office id" onChange={this.officeid} required />
                                        <span style={{ color: 'red' }} >{this.state.errors["officeid"]}</span>
                                        <span >{this.state.errors[" checkoffice"]}</span>

                                    </div>
                                    <div className="input-box">
                                        <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Office Name </span>
                                        <input type="text" value={this.state.officename} placeholder="Enter office name" onChange={this.officename} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["officename"]}</span>
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Adress </span>
                                        <input type="text" value={this.state.adress} placeholder="Enter adress" onChange={this.adress} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["adress"]}</span>
                                    </div>

                                    <div className="input-box">
                                        < span className="details" >< StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Maximum Branch Number(Max-5)</span>
                                        <input type="number" value={this.state.maximum_branch} placeholder="Enter max_branch number" onChange={this.maximum_branch} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["maximum_branch"]}</span>
                                    </div>

                                    <div className="input-box" >
                                        <span className="details" >< StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Maximum Somitee Number(Max-40) </span>
                                        <input type="number" value={this.state.maximum_somitee} placeholder="Enter max_somitee id" onChange={this.maximum_somitee} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["maximum_somitee"]}</span>
                                    </div>

                                    <div className="input-box" >
                                        <span className="details" >< StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Office In Charge </span>
                                        <input type="text" value={this.state.office_in_charge} placeholder="Enter office in chargge" onChange={this.office_in_charge} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["office_in_charge"]}</span>
                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Official Number </span>
                                        <input type="number" value={this.state.phone} placeholder="Enter national id" onChange={this.phone} required />
                                        <span style={{ color: 'red' }} >{this.state.errors["phone"]}</span>
                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Offical Email </span>
                                        <input type="email" value={this.state.email} placeholder="Enter email" onChange={this.email} required />
                                        <span style={{ color: 'red' }} >{this.state.errors["email"]}</span>
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


                    <div className="main_body">
                        <div className="Table_manupulation">
                            <div className="table-area">
                                <table className="table_format">
                                    <thead>
                                        <tr>

                                            <th>office Id</th>
                                            <th>Office Name </th>
                                            <th>Adress </th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* {this.state.offices.map((res, i) => {
                                            return (
                                                <tr>
                                                    <td>{res.officeid}</td>
                                                    <td>{res.officename}</td>
                                                    <td>{res.adress}</td>


                                                    <td>
                                                        <IconContext.Provider value={{ color: 'black', fontSize: '2.5rem' }}>
                                                            <div className="add">

                                                                <AiFillEdit style={{ cursor: 'pointer', fontSize: '2.5rem' }} onClick={this._next} />

                                                            </div>
                                                        </IconContext.Provider>


                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ color: 'black', fontSize: '1.5rem' }}>
                                                            <div className="add">
                                                                <AiFillDelete style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => this.deleteMemberrship(res._id)} />
                                                            </div>
                                                        </IconContext.Provider>


                                                    </td>
                                                </tr>);
                                        })} */}
                                        {officesDetails}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </>
        );
    }
}


export default Officesetup;