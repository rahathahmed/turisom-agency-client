import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';


const Details = () => {
    const [details,setDetails] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[id])

    const {title,description,image,category,rating} = details;

    return (
        <div>
            { details?.title  ?
            <div className="card mb-3" >
                <div className="mx-auto row g-0">
                    <div className="col-md-4">
                        <img src={image}className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description.slice(0,200)}</p>
                            <h4>ID No : {id}</h4>
                            <h4>Category : {category}</h4>
                            <h5>Rating :{rating.rate}</h5>
                        </div>
                    </div>
                </div>
            </div> : 
            <div className="text-center">
                <div className="spinner-border" role="status">
                    
                </div>
               <p>PLease Wait</p>
            </div>}
            
        </div>
    );
};

export default Details;

