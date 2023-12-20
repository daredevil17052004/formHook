import { useState } from 'react'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {

  const {register, handleSubmit , formState:{errors}}  = useForm();

  console.log(errors);

  function onSubmit(data){
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input type="text" placeholder='First Name' {...register('firstName',{required:true})} /><br/>
        <label>Last Name</label>
        <input type="text" placeholder='Last Name' {...register('lastName', {required:true})}/><br/>
        <label>Email</label>
        <input type="email" placeholder='Email ID'  {...register('emailID' , {required:"Email is required.", pattern:/^\S+@\S+\.\S+$/} )}/><br/>
        <span>{errors.emailID?.message}</span><br/>
        <label >Password</label>
        <input type="password" placeholder='Password'  {...register('password' , {required:true})}/><br/>
        <button type='submit'>Submit</button>
      </form>   
    </>
  )
}

export default App
