import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import logo from '../Img/logo.png';
import '../Header/Header.css'
const Header = () => {

 const {user , logOut}= useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg " >
              <div className="container-fluid">
              <a className="navbar-brand"> <img style={{width:'120px'}} src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto">
                  <li className="nav-item mx-2">
                        <Link to ="/home"><i className="fas fa-home"></i> Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to ="/services"><i className="fas fa-briefcase"></i> Services</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to ="/myorder"><i className="fas fa-shopping-cart"></i> My Order </Link>
                    </li>
                    <li className="nav-item mx-2">
                     <Link to ="/addservices"> <i className="fas fa-address-card"></i> Add Services</Link>
                    </li>
                    {
                      user.email ?
                       <div>
                         <button className="btn btn-danger" onClick={logOut}><i className="fas fa-sign-in-alt"></i> {user.displayName}</button> 
                         <img style={{width:'40px',height:"40px",borderRadius:"50%",marginLeft:"5px"}} a src={user.photoURL} alt="User" />
                         </div>:  
                      <li className="nav-item mx-2">
                        <Link to ="/login"> Log In   </Link>
                      </li>
                    }
                   
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    );
};

export default Header;