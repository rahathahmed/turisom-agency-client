import React from 'react';
import { Link } from 'react-router-dom';
import '../Banner/Banner.css'


const Banner = () => {

    return (
        
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                         <img className="d-block w-100" src="https://images.unsplash.com/photo-1523867904486-8153c8afb94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="First slide"/>

                         <div className="carousel-caption d-none d-md-block">
                            <h1>Enjoy Vacation With V-Travel</h1>
                            <p>Travel to the any corner of the world, without going around in circles.</p>
                            <Link to="/services"> 
                            <button className="btn btn-success">Book Travel </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Banner;