import React, { useEffect, useState } from 'react';

const Myorders = () => {
    const [orders,setOrders] = useState([])

    const email = sessionStorage.getItem("email")

    useEffect(()=>{ 
            fetch(`https://peaceful-fjord-08649.herokuapp.com/myOrder/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    },[email])
       

    const handleToDelete = id => {
        const confirmModal = window.confirm("Are You Seur To Deleted Your Order");
        if( confirmModal ){
            const url = `https://peaceful-fjord-08649.herokuapp.com/deleteorder/${id}`;
            fetch(url,{
                method:"DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert("Deleted Successfully");
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                }
            })
        }
        
     
     
    }
    
    return (
        <div >
            <div className="row">
                <h5>Total Product Selected : <span className="badge bg-secondary">{orders.length}</span> </h5>
              { 
              orders?.map(order =>
              <div className="col-md-3"> 
                <div className="card mb-4">
                        <div className="card-body">
                        <img style={{width:'100%',height:'180px',margin:'auto'}} src={order?.image}  className="card-img-top" alt="..."/>
                                <h5 className="card-title">  {order?.name}</h5>
                            <p className="card-text">Description : {order?.description}</p>
                            <p className="card-text">Price : {order?.price}</p>
                            <button className="btn btn-danger" onClick={()=>handleToDelete(order?._id)}> <i className="fas fa-trash-alt"></i> Delete Order</button>
                        </div>   
                    </div>
                </div>)
                }
            </div>
            
        </div>
    );
};

export default Myorders;