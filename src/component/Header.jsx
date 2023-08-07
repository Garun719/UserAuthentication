import React from "react";
import logo from '../component/assets/Images/logo.svg'
import  './assets/css/header.css';
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary nav-bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand"><img src={logo} alt="" width="70px" /></a>
        <ul className="nav-links" >
          <li><Link to={'/'}>HOME</Link></li>
          <li><Link to='/contact'>CONTACT</Link>
          </li>
          <li><Link to ='/About'>ABOUT</Link></li>
        </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
