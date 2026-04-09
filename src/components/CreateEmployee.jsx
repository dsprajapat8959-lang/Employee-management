import React, { useState } from 'react'

const CreateEmployee = () => {

    const[data,setData] = useState({
        fullname: "",
        email: "",
        phonenumber: "",
        jobposition: "",
        salary: "",
    });

    function dataHandler(event){
        setData((prev)=>({
            ...prev,
            [event.target.name]: event.target.value
        }))
        
        
    }

   async function submitHandler(event) {
    event.preventDefault();
    console.log(data);
     const response = await fetch("https://vercel-backend-xt7u.onrender.com/api/v1/createEmployee",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"

        },
        body: JSON.stringify(data)
     });
     setData({
        fullname: "",
        email: "",
        phonenumber: "",
        jobposition: "",
        salary: "",
     });
    
   }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">

    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Create Employee
    </h2>

    <form onSubmit={submitHandler} className="space-y-5">

      <div>
        <label className="block text-gray-700 mb-1">Full Name</label>
        <input 
          onChange={dataHandler}
          name="fullname"
          value= {data.fullname}
          type="text" 
          placeholder="Enter full name"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          onChange={dataHandler} 
          type="email"
          name="email" 
          value= {data.email}
          placeholder="Enter email"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Phone Number</label>
        <input 
          onChange={dataHandler}
          type="text" 
          name="phonenumber"
          value= {data.phonenumber}
          placeholder="Enter phone number"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Job Position</label>
        <input 
          type="text"
          onChange={dataHandler}
          name="jobposition"
          value= {data.jobposition}
          placeholder="Enter job position"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Salary</label>
        <input 
          type="number" 
          onChange={dataHandler}
          name="salary"
          value= {data.salary}
          placeholder="Enter salary"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-md"
      >
        Create Employee
      </button>

    </form>

  </div>
</div>
  )
}

export default CreateEmployee
