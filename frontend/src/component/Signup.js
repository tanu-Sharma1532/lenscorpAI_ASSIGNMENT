import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from '../store/auth';


const Signup = () => {
  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  })
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    const role = formData.get('role');
    
    try {
        const response = await axios.post(`${window.location.origin}/lenscorp/ai/signup`, {
            name, email, password, role
        });
        
        console.log(response);
        
        if (response.status === 200) {
            storetokenInLS(response.data.token);
            toast.success('Signup successful');
            navigate('/login');
        } else {
            toast.error('An error occurred. Please try again later.');
        }
    } catch (error) {
        if (error.response) {
            console.error("Error response from server:", error.response.data);
            toast.error(error.response.data.message);
        } else {
            console.error("An unexpected error occurred:", error.message);
            toast.error('An unexpected error occurred. Please try again later.');
        }
    }
};

  

  return (
    <div className='bg-white min-h-screen flex flex-col justify-center items-center'>

    <h1 className='text-3xl mb-6 pt-10'>Signup</h1>
  
    <form method="post" onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 mt-10'>
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        required
        className='w-60 font-sans border border-gray-300 rounded px-4 py-2'
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        required
        className='w-60 font-sans border border-gray-300 rounded px-4 py-2'
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        required
        className='w-60 font-sans border border-gray-300 rounded px-4 py-2'
      />
      <input
        type="text"
        name="role"
        placeholder="Enter your role Admin or Visitor"
        required
        className='w-60 font-sans border border-gray-300 rounded px-4 py-2'
      />
      <input type="submit" value="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer' />
    </form>
  <Toaster/>
  </div>
  
  )
}

export default Signup
