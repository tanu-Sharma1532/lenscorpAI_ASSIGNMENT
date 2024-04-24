import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Data from './Data';
import { useNavigate } from 'react-router-dom';

const Employeedata = () => {
    const navigate = useNavigate();
    const [employees,setEmployees] = useState([]);
    const token = localStorage.getItem("token");
  
    const fetchdata = async() =>{
        try{
            const res = await fetch(`${window.location.origin}/lenscorp/ai/employee`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                },
              });
        
            const json = await res.json();
            const output = json.data;
            if(output.length>0){
                setEmployees(output);
            }
            console.log(output);

        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
     fetchdata();
    },[])
  return (
    <div class="min-h-screen flex flex-col justify-center items-center bg-white pt-20">
    
    <div class="flex-grow flex flex-col items-center justify-center">
        <div class="text-black text-4xl font-bold mb-8">LENS CORPORATION TEAM</div>
        <div class="overflow-x-auto bg-white rounded-lg p-6">
            <table class="table-auto border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th class="px-4 py-2 bg-gray-200 border border-gray-400 font-bold text-center">Name</th>
                        <th class="px-4 py-2 bg-gray-200 border border-gray-400 font-bold text-center">Profile</th>
                    </tr>
                </thead>
                <tbody>
                   <Data employees={employees}/>
                </tbody>
            </table>
        </div>
    </div>
</div>

  )
}

export default Employeedata
