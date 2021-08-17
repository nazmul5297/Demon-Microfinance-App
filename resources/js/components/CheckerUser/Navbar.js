import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './newnavbar.css';
import { IconContext } from 'react-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';


import Request from './pages/Request'
import Logout from './pages/Logout';
import pagesarea from './Navbar.css';
import { AiFillPushpin } from "react-icons/ai";
import Header from '../admin/pages/Header';




function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <Router >
        {/* <Header /> */}
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar' >
            < div className="logo-area" >
              < Link to='#' className='menu-bars' >
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>

            <div className='username-area' >
              <div className="username-content"><h4 > User Name:</h4></div>
              <div className="username-content"><h5>User Type: Checker User</h5></div>
              <div className="username-content"> <h5>Date:15/07/2021 :</h5></div>
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
            <Route path='/checkeruser' exact component={Home} />
            <Route path='/request' component={Request} />
            <Route path='/logout' component={Logout} />
          </Switch>


        </div>

      </Router>


    </>
  );
}

export default Navbar;

