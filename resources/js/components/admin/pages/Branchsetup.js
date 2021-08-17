import React, { Component } from 'react'
import axios from 'axios';
import Branchdrop from './Branchdrop'
import './comiteesetup.css';
import Swal from 'sweetalert2';
import { BsPlusCircle } from "react-icons/bs";
import StarRateIcon from '@material-ui/icons/StarRate';
import { BiReset } from "react-icons/bi";
import { IconContext } from 'react-icons';
import Header from './Header'
import { AiFillSave, AiFillEdit, AiFillDelete } from "react-icons/ai";
import Editbranch from './Editbranch';
import './datatable.css';


export default class branchsetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            officeid: '',
            branchid: '',
            branchname: '',
            adress: '',
            maximum_somitee: '',
            branch_in_charge: '',
            phone: '',
            email: '',
            getofficeid: [],
            getbranchid: [],
            editbranchData: {
                _id: '',
                officeid: '',
                branchid: '',
                branchname: '',
                adress: '',
                maximum_somitee: '',
                branch_in_charge: '',
                phone: '',
                email: ''
            },
            editbranchModal: false,
            noDataFound: "",
            errors: {}


        };
        this.officeid = this.officeid.bind(this);
        this.branchid = this.branchid.bind(this);
        this.branchname = this.branchname.bind(this);
        this.adress = this.adress.bind(this);
        this.maximum_somitee = this.maximum_somitee.bind(this);
        this.branch_in_charge = this.branch_in_charge.bind(this);
        this.phone = this.phone.bind(this);
        this.email = this.email.bind(this);
        this.getofficeid = this.getofficeid.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }


    officeid(event) {
        this.setState({ officeid: event.target.value })
    }
    branchid(event) {
        this.setState({ branchid: event.target.value })
    }
    branchname(event) {
        this.setState({ branchname: event.target.value })
    }
    adress(event) {
        this.setState({ adress: event.target.value })
    }
    maximum_somitee(event) {
        this.setState({ maximum_somitee: event.target.value })
    }
    branch_in_charge(event) {
        this.setState({ branch_in_charge: event.target.value })
    }
    phone(event) {
        this.setState({ phone: event.target.value })
    }
    email(event) {
        this.setState({ email: event.target.value })
    }


    DataTable() {
        return this.state.getofficeid.map((res, i) => {
            return <Branchdrop obj={res}
                key={i}
            />;
        });


    }

    componentDidMount() {


        this.allbranchid()
    }



    getofficeid(e) {
        // e.preventdefault();
        e.preventDefault();
        axios.get('http://192.168.0.111:8000/api/find_office_id')
            .then(res => {
                const getofficeid = res.data;
                this.setState({ getofficeid });
                //    console.log(officeid);
                // this.state.officeid=res.data.bind(this);

            })
    }
    handleValidation() {
        let fields = {
            officeid: this.state.officeid,
            branchid: this.state.branchid,
            branchname: this.state.branchname,
            adress: this.state.adress,
            maximum_somitee: this.state.maximum_somitee,
            branch_in_charge: this.state.branch_in_charge,
            phone: this.state.phone,
            email: this.state.email
        }
        let formIsValid = true;
        let errors = {};
        //Office Id Validation

        if (!fields["officeid"]) {
            formIsValid = false;
            errors["officeid"] = "Cannot be empty";
        }
        //Branch Id Validation

        if (!fields["branchid"]) {
            formIsValid = false;
            errors["branchid"] = "Cannot be empty";
        }
        //Branch Name Validation
        if (!fields["branchname"]) {
            formIsValid = false;
            errors["branchname"] = "Cannot be empty";
        }
        //Address Validation
        if (!fields["adress"]) {
            formIsValid = false;
            errors["adress"] = "Cannot be empty";
        }
        //Maximum-somitee validation
        if (!fields["maximum_somitee"]) {
            formIsValid = false;
            errors["maximum_somitee"] = "Cannot be empty";
        }

        if (fields["maximum_somitee"] > 20) {
            formIsValid = false;
            errors["maximum_somitee"] = "Sorry,maximum limit reached";
        }

        //Branch-In-Charge validation
        if (!fields["branch_in_charge"]) {
            formIsValid = false;
            errors["branch_in_charge"] = "Cannot be empty";
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

    allbranchid(e) {

        axios.get('http://192.168.0.111:8000/api/findallbranchid')
            .then(res => {
                const getbranchid = res.data;
                this.setState({ getbranchid });
            })
    }

    deleteMemberrship = (id) => {
        axios.delete(`http://192.168.0.111:8000/api/branch_delete/` + id)
            .then((res) => {
                this.allbranchid()
                console.log('delet sucessfully')

            }).catch((error) => {
                console.log(error)
            })


    }
    toggleEditbranchModal = () => {
        this.setState({
            editbranchModal: !this.state.editbranchModal,
        });
    };

    onChangeEditbranchHanler = (e) => {
        let { editbranchData } = this.state;
        editbranchData[e.target.name] = e.target.value;
        this.setState({ editbranchData });
    };

    editbranch = (_id, officeid, branchid, branchname, adress, maximum_somitee, branch_in_charge, phone, email) => {
        this.setState({
            editbranchData: { _id, officeid, branchid, branchname, adress, maximum_somitee, branch_in_charge, phone, email },
            editbranchModal: !this.state.editbranchModal,
        });
    };

    updateoffice = () => {
        let {
            _id, officeid, branchid, branchname, adress, maximum_somitee, branch_in_charge, phone, email
        } = this.state.editbranchData;

        // console.log(this.state.editofficeData);


        axios.post("http://192.168.0.111:8000/api/branchupdate", {
            _id, officeid, branchid, branchname, adress, maximum_somitee, branch_in_charge, phone, email
        })
            .then((response) => {
                console.log("i am from update")
                console.log(response.data)
                this.allbranchid();
                this.setState({
                    editbranchModal: false,
                    editbranchData: { _id, officeid, branchid, branchname, adress, maximum_somitee, branch_in_charge, phone, email },

                });
            })
            .catch((error) => {
                this.setState({ isLoading: false })
                console.log(error.response);
            });
    };




    handleSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            const packets = {
                officeid: this.state.officeid,
                branchid: this.state.branchid,
                branchname: this.state.branchname,
                adress: this.state.adress,
                maximum_somitee: this.state.maximum_somitee,
                branch_in_charge: this.state.branch_in_charge,
                phone: this.state.phone,
                email: this.state.email

            };

            axios.post('branchsetup', packets)
                .then(res => {
                    console.log(res.data)
                }

                )
                .catch(error => {
                    console.log("ERROR:: ", error.response.data);

                });

            this.setState({
                officeid: '',
                branchid: '',
                branchname: '',
                adress: '',
                maximum_somitee: '',
                branch_in_charge: '',
                phone: '',
                email: ''
            });

            Swal.fire({
                position: 'center',
                icon: 'sucess',
                title: 'Good Job ',
                text: 'New Branch Added Sucessfully',
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
            branchname: '',
            adress: '',
            maximum_somitee: '',
            branch_in_charge: '',
            phone: '',
            email: ''
        });
    }


    render() {
        let getbranchidDetails = [];
        if (this.state.getbranchid.length) {
            getbranchidDetails = this.state.getbranchid.map((getbranchid) => {
                return (
                    <tr>
                        <td>{getbranchid.branchid}</td>
                        <td>{getbranchid.branchname}</td>
                        <td>{getbranchid.officeid}</td>

                        <td>
                            <IconContext.Provider value={{ color: 'black', fontSize: '2.5rem' }}>
                                {/* <div className="add"> */}

                                <AiFillEdit style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'blue' }}
                                    onClick={() =>
                                        this.editbranch(
                                            getbranchid._id,
                                            getbranchid.officeid,
                                            getbranchid.branchid,
                                            getbranchid.branchname,
                                            getbranchid.adress,
                                            getbranchid.maximum_somitee,
                                            getbranchid.branch_in_charge,
                                            getbranchid.phone,
                                            getbranchid.email,

                                        )
                                    }
                                />

                                {/* </div> */}
                            </IconContext.Provider>


                        </td>
                        <td>
                            <IconContext.Provider value={{ color: 'black', fontSize: '1.5rem' }}>
                                {/* <div className="add"> */}
                                <AiFillDelete style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'red' }} onClick={() => this.deleteMemberrship(getbranchid._id)} />
                                {/* </div> */}
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
                                onClick={() => this.deleteMemberrship(getbranchid._id)}
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
                <Header />

                <div className='body'>
                    <div className='container'>
                        <div className="title" > Branch Setup Form </div>
                        <div className='content'>
                            <Editbranch
                                toggleEditbranchModal={this.toggleEditbranchModal}
                                editbranchModal={this.state.editbranchModal}
                                onChangeEditbranchHanler={this.onChangeEditbranchHanler}
                                editbranch={this.editbranch}
                                editbranchData={this.state.editbranchData}
                                updatebranch={this.updatebranch}
                            />
                            <form>
                                <div className="user-details">

                                    <div className="input-box">
                                        <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Office Id </span>
                                        <select value={this.state.officeid} onClick={this.getofficeid} onChange={this.officeid} >
                                            <option></option>
                                            {this.DataTable()}
                                        </select>
                                        {/* <input type = "text" placeholder = "Enter office name" onChange = { this.officename } required/> */}
                                        <span style={{ color: 'red' }}>{this.state.errors["officeid"]}</span>

                                    </div>

                                    <div className="input-box">
                                        <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Branch Id </span>
                                        <input type="text" value={this.state.branchid} placeholder="Enter Branch ID" onChange={this.branchid} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["branchid"]}</span>

                                    </div>

                                    <div className="input-box">
                                        <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Branch Name </span>
                                        <input type="text" value={this.state.branchname} placeholder="Enter Branch Name" onChange={this.branchname} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["branchname"]}</span>

                                    </div>

                                    <div className="input-box">
                                        <span className="details"> < StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Adress </span>
                                        <input type="text" value={this.state.adress} placeholder="Enter adress" onChange={this.adress} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["adress"]}</span>

                                    </div>

                                    <div className="input-box" >
                                        <span className="details" >< StarRateIcon color="secondary" style={{ fontSize: 15 }} /> Maximum Somitee Number(Max-20) </span>
                                        <input type="number" value={this.state.maximum_somitee} placeholder="Enter max_somitee " onChange={this.maximum_somitee} required />
                                        <span style={{ color: 'red' }} >{this.state.errors["maximum_somitee"]}</span>

                                    </div>

                                    <div className="input-box" >
                                        <span className="details" >  < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Branch In Charge </span>
                                        <input type="text" value={this.state.branch_in_charge} placeholder="Enter Branch in chargge" onChange={this.branch_in_charge} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["branch_in_charge"]}</span>

                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Branch Number </span>
                                        <input type="number" value={this.state.phone} placeholder="Enter phone Number" onChange={this.phone} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["phone"]}</span>

                                    </div>

                                    <div className="input-box" >
                                        <span className="details" > < StarRateIcon color="secondary" style={{ fontSize: 15 }} />Branch Email </span>
                                        <input type="email" value={this.state.email} placeholder="Enter email" onChange={this.email} required />
                                        <span style={{ color: 'red' }}>{this.state.errors["email"]}</span>

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

                                            <th>Branch Id</th>
                                            <th>Branch Name </th>
                                            <th>Office Id </th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody className='tbody'>

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
                                        {getbranchidDetails}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        );
    }
}
