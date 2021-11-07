import React, { useState } from 'react';
import { Link, useHistory , useLocation  } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    // private route puch functinality
    const history = useHistory();
    const location = useLocation();

    // location state 
    const url= location.state?.from || "/home";

    //usestate declare for register emaiil validation
 
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    // call function using useauth
    const { signInWithGoogle,createAccountWithGoogle,setUser } = useAuth() ;
    
    //sign in functionality
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) =>{
              setUser(res.user);
              console.log(res.user);
              history.push(url)
            })
            .catch((err => console.log(err)))
    }

    //registration on submit functionality

    const handleRegistration = e =>{
        e.preventDefault();
        createAccountWithGoogle(email,password)
        .then((res) => {
            setUser(res.user)
            history.push(url)
          })
          if(email){
             alert("SuccessFull ")
          }
    }
    
    //email validation onclick functionaltiy
 
    
    const handleGetEmail=(e)=> {
        console.log(e.target.value);
       setEmail(e.target.value)
    }
   
    const handleGetPassword=(e)=> {
        console.log(e.target.value);
       setPassword(e.target.value)
    }
     
    return (
        <div className="row w-75 mx-auto mt-5 p-5">
            <div className="col-md-6">
                <div className="text-center mt-5">
                    <form onSubmit={handleRegistration} className="">
                        <input className="mt-2 form-control"  type="text" onBlur={handleGetEmail} placeholder="Name"/>
                        <br/>
                        <input className="mt-2 form-control"  type="email" onBlur={handleGetEmail} placeholder="email"/>
                            <br/>
                        <input className="mt-2 form-control"  type="password"  onBlur={handleGetPassword} placeholder="password"/>
                            <br/>
                        <input className="btn btn-primary form-control"  type="submit" value="Register"/>
                            <br/>
                    </form>
                    <p> <Link to="/login">log in</Link></p>
                    <button className="mt-2 google-btn" onClick={ handleGoogleLogin }> <i className="fab fa-google"></i> Google Sign In</button>
                </div>
            </div>
            <div className="col-md-6 bg-primary text-light">
                <div className="register-info p-5">
                    <h2> Bd Web Servicecom</h2>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestiae, voluptates pariatur rem, laudantium qui id eligendi, hic minima velit suscipit. Sed earum suscipit cupiditate.</p>
                </div>
            </div>
        </div>
       
    );
};

export default Register;