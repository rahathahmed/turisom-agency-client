import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddServices = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => {
    
            axios.post("https://peaceful-fjord-08649.herokuapp.com/addservices",data)
            .then(res => {
                if(res.data.acknowledged){
                    alert("Added Success Fully")
                }
                console.log(res);
            })
    };
  
    return (
        <div className="p-5 mx-auto" style={{width:"400px"}}>
            <h2 className="text-primary ">Add To Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
        
            <input  {...register("name") }  placeholder="Name" className="mb-2 p-2 form-control"
             />
         
            <input  {...register("description") } placeholder="Description" className="mb-2 p-2 form-control"
             />
        
            <input {...register("image", { required: true } )} className="mb-2 p-2 form-control" placeholder="Image"/>
            <input {...register("price", { required: true } )} className="mb-2 p-2 form-control" placeholder="Price"/> 

            <select {...register("package")}  className="mb-2 p-2 form-control" >
                <option value="Primium">Primium</option>
                <option value="Silver">Silver</option>
                <option value="Free">Free</option>
            </select>

            {}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" value="Add " className="p-2 btn btn-primary form-control"/>
            </form>
        </div>
    );
};

export default AddServices;