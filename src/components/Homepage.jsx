import React, { useEffect, useState } from 'react'
import Card from './Card';


const Homepage = () => {
    const [user, setUser] = useState([]);

    async function fetchData() {
        try {
             const response = await fetch("https://vercel-backend-xt7u.onrender.com/api/v1/getAllEmployee");
            const data = await response.json();
            console.log(data);
            setUser(data.data);
                
        } catch (e) {
            console.error(e);            
        }
       
    }

    async function searchHandler(event) {
        try {
            const response = await fetch("http://localhost:3000/api/v1/searchEmployee",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({fullname:event.target.value})
            });
        const data = await response.json();
        setUser(data.data)
        console.log(data);

            
        } catch (e) {
            console.error(e.message)
            
        }
        
        
    }

    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 hidden-x">
  <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6">

    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Employee List</h1>
      <input 
        type="text" 
        onChange={(searchHandler)}
        placeholder="Search employee..." 
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div className="overflow-x-auto m-[10px]">
      {user.map((data)=>(
        <Card key={data._id} employee={data}/>
      ))}
    </div>

  </div>
</div>
    </div>
  )
}

export default Homepage
