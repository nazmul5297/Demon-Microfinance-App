import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Somiteesetup from './pages/somiteesetup';
import Officesetup from './pages/officesetup';
import Branchsetup from './pages/Branchsetup'
import Report from './pages/Reports';
// import pagesarea from './Navbar.css';
import { AiFillPushpin } from "react-icons/ai";
import { FlashOnRounded } from '@material-ui/icons';
import Example from '../Example';
import Header from './pages/Header';



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    }


  }
  // const [sidebar, setSidebar] = useState(false);

  showSidebar = () => this.setState({ sidebar: !(this.state.sidebar) });

  render() {



    return (

      <>


        <Router >


          {/* <div className={this.state.sidebar ? 'pagesarea' : 'closesidebarpagesarea'}> */}

          < Switch >
            <Route path='/admin' exact component={Home} />
            <Route path='/officesetup' component={Officesetup} />
            <Route path='/somiteesetup' component={Somiteesetup} />
            <Route path='/branchsetup' component={Branchsetup} />
            <Route path='/reports' component={Report} />
            <Route path='/' component={Example} />


          </Switch>




          {/* </div> */}

        </Router>


      </>
    );
  }
}

export default Navbar;

