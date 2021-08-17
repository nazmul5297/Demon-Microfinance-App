import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import '../Navbar.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AiFillPushpin } from "react-icons/ai";
import { FlashOnRounded } from '@material-ui/icons';
import Example from '../../Example';





class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usertype: '',
            sidebar: false,
            sidemenu: []
        }


    }


    findmenu = () => {
        const userstatus = localStorage.getItem("userStatus");
        if (userstatus == 200) {
            axios.get('http://192.168.0.111:8000/api/menu_admin')
                .then(res => {
                    console.log(res.data);
                    this.setState({ sidemenu: (res.data) });
                    console.log("this is side menu")
                    // console.log(this.sidemenu.cName);
                })
            this.setState({ sidebar: !(this.state.sidebar) });
            this.setState({ usertype: 'Admin' })
            // this.props.seesidebar = !this.props.seesidebar
        }

        // if (userstatus == 50) {
        //     axios.get('http://192.168.0.111:8000/api/menu_checker')
        //         .then(res => {
        //             console.log(res.data);
        //             this.setState({ sidemenu: (res.data) });
        //             console.log("this is side menu")
        //             // console.log(this.sidemenu.cName);
        //         })
        //     this.setState({ sidebar: !(this.state.sidebar) });
        //     this.setState({ usertype: 'Admin' })
        //     // this.props.seesidebar = !this.props.seesidebar
        // }

    }
    // const [sidebar, setSidebar] = useState(false);
    onLogoutHandler(e) {
        // e.preventDefault();
        localStorage.clear();
        console.log(" i am here ");
    }

    showSidebar = () => {

        this.setState({ sidebar: !(this.state.sidebar) });
    }

    render() {

        return (



            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar' >
                    <div className="logo-area">
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={this.findmenu} />
                        </Link>
                    </div>

                    <div className='username-area' >
                        <div className="username-content">
                            <h4 >User email : {localStorage.getItem("userData")}</h4>
                            <h5 >User Type:{this.state.usertype}</h5>
                            <h6>Date:15/07/2021</h6>
                        </div>
                        <div className=" logout-area">
                            <button type="submit"
                                onClick={this.onLogoutHandler}>
                                <Link to='/' className="back">
                                    LogOut
                                </Link></button>
                        </div>

                        {/* <div className="username-content"> <h5>Date: </h5></div> */}
                    </div>

                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiFillPushpin onClick={this.showSidebar} />
                            </Link>
                        </li>

                        {this.state.sidemenu.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} >
                                    <Link to={item.path}>
                                        {/* {item.icon} */}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>

                            );
                        })}


                    </ul>

                </nav>


            </IconContext.Provider>




        );
    }
}

export default Header;


