import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../store/auth";

const Hrform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", Profile: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const token = localStorage.getItem("token");
  console.log("token",token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, Profile } = formData;

    try {
      const res = await fetch(`${window.location.origin}/lenscorp/ai/addemp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ name, Profile })
      });

      if (res.status === 200) {
        toast.success('Entry Created successfully');
        navigate('/allemployees');
      } else {
        toast.error('An error occurred. Please try again later.');
      }

      const data = await res.json();
      console.log(data); // Log response data for debugging
    } catch (error) {
      console.error("Error:", error.message);
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
    <div className="bg-white min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">NEW EMPLOYEE</h2>
        <input type='text' placeholder='Enter Name' className="w-full mb-4 px-3 py-2 border rounded-md" onChange={handleInputChange} name='name' value={formData.name} />
        <input type='text' placeholder='Enter Designation' className="w-full mb-4 px-3 py-2 border rounded-md" onChange={handleInputChange} name='Profile' value={formData.Profile} />
        <button type='submit' className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
      <Toaster />
    </div>
  );
};

export default Hrform;
