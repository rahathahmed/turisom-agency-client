import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';



const ServiceContent = ({service}) => {
    
    const history = useHistory();

    const {_id,name,description,image,price} = service;
    
    const handleClickToDetails = _id => {
       const uri = `/details/${_id}`;
       history.push(uri);
    }
   
    return (
        <div className="container">
            <div className="card mb-4 text-center pb-3">
                
                <img style={{width:'100%',height:'180px',margin:'auto'}} src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-success ">{name}</h5>
                    <p className="card-text">Description : {description}</p>
                    <h4 className="card-text text-primary ">$ {price}</h4>
                   
                </div>
                <Link to={`/booking/${_id}`}>
                    <button className="btn btn-primary" onClick={()=>{handleClickToDetails(_id)}}> <i className="fas fa-shopping-cart"></i> Booking Now</button>
                </Link>
                 
            </div>
              
        </div>
    );
};

export default ServiceContent;