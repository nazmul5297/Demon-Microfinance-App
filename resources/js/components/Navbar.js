import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomeHome from './WelcomeHome';
// import pagesarea from './Navbar.css';
import './Navbar.css';
import Membership from './Membership';
import Reports from './Reports';
import Logout from './Logout';
import Footer from './homepage/Footer';

import { AiFillPushpin } from "react-icons/ai";



function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <Router >
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar' >
            < div className="logo-area" >
              < Link to='#' className='menu-bars' >
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>

            <div className='username-area' >
              <div className="username-content"><h4 >  User Name : </h4></div>
              <div className="username-content"><h5>User Type : Maker User</h5></div>
              <div className="username-content"> <h5>Date :</h5></div>
            </div>

          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiFillPushpin onClick={showSidebar} />
                </Link>
              </li>

              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName} >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>

                );
              })}


            </ul>

          </nav>


        </IconContext.Provider>

        <div className={sidebar ? 'pagesarea' : 'closesidebarpagesarea'}>

          < Switch >
            <Route path='/makerdashboard' exact component={WelcomeHome} />
            <Route path='/membership' component={Membership} />
            <Route path='/reports' component={Reports} />
            <Route path='/logout' component={Logout} />
          </Switch>


        </div>

      </Router>



    </>
  );
}

export default Navbar;

