import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>
    { 
        console.log(data);
        const url = `http://localhost:5000/inventory`
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        });
    }

    return (
      <div>
          <h2 className='mt-2'>Please Add new user </h2>
            <form className='m-4' onSubmit={handleSubmit(onSubmit)}>
        <input className='mt-2 w-50' placeholder='Your Name'{...register("name", { required: true, maxLength: 20 })} /> <br />
        <textarea className='mt-2 w-50' placeholder='Description' {...register("about")} /> <br />
        <input className='mt-2 w-50' placeholder='Price' type="number" {...register("price")} /> <br />
        <input className='mt-2 w-50' placeholder='Photo URL' type="text" {...register("img")} /> <br />
        <input className='mt-2' value="Add Fruits" type='submit'/>
      </form>
      </div>
    );
};

export default AddProduct;

