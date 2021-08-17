import React from 'react'
import img from './eralogo.jpg'
import {
  Link
} from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-dark">
      <div className="row">
        <div className="col-lg-5 m-auto">
          {/* <h2 className="text-white text-center mb-0 py-2"><Link to="/" className="nav-link text-white">Micro-Finance-App</Link></h2> */}
          <Link to="/"  ><img src={require('./era.png')} width="100" height="35" alt="" /></Link>
        </div>
        <div className="col-lg-7">
          <ul className="nav justify-content-center py-3">
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white"> <h4>About</h4></Link>

            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white"> <h4>Login</h4></Link>

            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link text-white"><h4>Register</h4></Link>

            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
