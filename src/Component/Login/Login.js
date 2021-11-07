import React, { useState } from 'react';
import { Link, useHistory , useLocation  } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import img from '../Img/img.jpg';
import  '../Login/Login.css';
import logo from '../Img/logo.png'


const Login = () => {

     const history = useHistory();
    const location = useLocation();
    const url= location.state?.from || "/home";
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  
    const { signInWithGoogle,setUser ,logInWithEmailPassword} = useAuth() ;
    
    //log in with goggle 
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) =>{
              setUser(res.user);
              sessionStorage.setItem("email",res.user.email)
              history.push(url)
              console.log(res.codeuser);
            })
            .catch((err => console.log(err)))
    }
   
    // submit functionality email & password

    const handleLoginWithEmailandPassword = e => {
        e.preventDefault();
        logInWithEmailPassword(email,password)
        .then((res) => {
            setUser(res.user);
            history.push(url)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log( errorCode , errorMessage);
          });
        
    }
    const handleGetEmail = e => {
        setEmail(e.target.value);
    }

    const handleGetPassword = e => {
        setPassword(e.target.value);
    }
    
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="text-center mt-5">
                   
                    <form onSubmit={handleLoginWithEmailandPassword} className="w-75 mx-auto border p-5"> 
                    <img src={logo} style={{width:'150px'}} alt="" /> 
                        <input type="email" onChange={handleGetEmail} className="mt-2 form-control" placeholder="email"/>
                            <br/>
                        <input type="password" onChange={handleGetPassword} className="mt-2 form-control"  placeholder="password"/>
                            <br/>
                        <input  className="mt-2 btn btn-primary form-control" type="submit" value="Log in" />
                    </form>
                <h4>OR </h4>
                <div>
                <button className="mt-2 google-btn" onClick={ handleGoogleLogin }> <i class="fab fa-google"></i> Google Sign In</button>
                </div>
               
                <p className="mt-2"> Please Signin Or <Link to="/register">Registered</Link></p>
                </div>
            </div>
            <div className="col-md-6">
                <img src={img} alt="" />
            </div>
        </div>
       
    );
};

export default Login;

