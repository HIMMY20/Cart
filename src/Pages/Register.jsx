import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Register = () => {
 let [form,setForm] = useState({
    name:"",
    age:"",
    email:"",
    password:"",
  })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("http://localhost:5000/signup",form);
     const res =  await axios.post("https://backend-cart-v1o5.vercel.app/signup", form);
       alert(res.data.message);
      
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Something went wrong"));

    }
  }

  return (
    <>
    <div className='login-contain'>
      <h1>Register </h1>
      <div className='login-form'>
        <form onSubmit={handlesubmit}>
          
          <input type="text" 
              name="name" 
              id="name" 
              placeholder='Enter Your Name'
              value={form.name}  
              onChange={handleChange}   
              />
              <input type="number" 
                  name='age' 
                  placeholder='Enter your Age'
                  id='age' 
                  value={form.enroll}
              onChange={handleChange}   
                      />
          <input type="email" 
              name="email" 
              id="email" 
              placeholder='Enter Your Email' 
              value={form.email}
              onChange={handleChange}   
              />
          <input type="password" 
              name='password'
              id='password' 
              placeholder='Enter your Password'
              value={form.password}
              onChange={handleChange}   
              />
          <input type="submit" value="Register" />
          <Link to="/login"><button>Login</button></Link>
        </form>
      </div>
    </div>

    </>
  )
}

export default Register