import React, { useEffect, useState } from 'react';
import ServiceContent from '../Servicecontent/ServiceContent';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch("https://peaceful-fjord-08649.herokuapp.com/allservices")
        .then(res => res.json())
        .then(data => setServices(data) )
    },[])
    return (
        <div className="py-5">
            <h2 className="text-center mb-4 "> Our Service </h2>
           <div className="row">
           {
                services.map(service => <div className="col-md-3">  <ServiceContent service={service}></ServiceContent> </div>  )
            } 
           </ div>
          
         
           

        </div>
    );
};

export default Services;
