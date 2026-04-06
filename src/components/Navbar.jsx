import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-16 sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
        
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
          EmployeeMS
        </div>

        <div className="flex items-center gap-4">
        <NavLink to="/createEmployee">
            <button className="px-4 py-2 rounded-xl text-gray-700 font-medium transition-all duration-300 hover:bg-blue-50 hover:text-blue-600">
            Create Employee
          </button>
        </NavLink>  
          
        <NavLink to="/">
            <button className="px-4 py-2 rounded-xl text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            View Employees
          </button>
        </NavLink>

          

        </div>

      </div>
    </nav>
  );
}

export default Navbar;