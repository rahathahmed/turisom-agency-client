import axios from 'axios';
import React, {  useEffect ,useState} from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';


const Booking = () => {

    const [service,setService] = useState({})

    const email = sessionStorage.getItem("email");
    const image = service.image;

    const { id } = useParams(); 

    useEffect(()=>{
        fetch(`https://peaceful-fjord-08649.herokuapp.com/singleproducts/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[id])

    const { register, handleSubmit,  formState: { errors } } = useForm();

    const onSubmit = data => {   
        data.email = email;
        data.image = image;
        axios.post("https://peaceful-fjord-08649.herokuapp.com/orderconfirm",data)
        .then(res => {
            if(res.data.acknowledged){
                alert("Order SuccesFull")
            }
            console.log(data);
        })

      };
    
      return (
          <div className="row">
              <div className="col-md-4"> 
              <div className="card mx-auto" style={{width: "18rem"}}>
                   <img src={service.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.description}</p>
                        <h5 className="card-title">{service.price}</h5>
                        <h5 className="card-title">{service.package}</h5>
                    </div>
                </div>
              </div>
              <div className="col-md-6">
                    <div className="p-5 mx-auto" style={{width:"400px"}}>
                        <h2 className="text-primary ">Add To Order </h2>
                        <h5>{service?.name} </h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                    
                        <input  {...register("name") }  Value={service?.name} placeholder="Name" className="mb-2 p-2 form-control"
                        />
                       
                       <input {...register("text",  { required: true } )} Value={service?.image} className="mb-2 p-2 form-control" placeholder="Price"/> 
                    
                        <input {...register("price",  { required: true } )} Value={service?.price} className="mb-2 p-2 form-control" placeholder="Price"/> 
            
                        <select {...register("Payment")}  className="mb-2 p-2 form-control" >
                            <option value="Visa">Visa </option>
                            <option value="Bank">Bank</option>
                            <option value="Visa">Visa</option>
                        </select>
            
                        {}
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input type="submit" value="Order Place" className="p-2 btn btn-primary form-control"/>
                        </form>
                    </div>
               </div>
              


          </div>
        
      );
  };


  export default Booking;