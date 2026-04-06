import React from "react";

const Card = ({ employee }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 w-full m-4 transition-shadow duration-300 hover:shadow-lg">

      <div className="flex items-center gap-4 mb-5">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold text-xl">
          {employee.fullname?.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {employee.fullname}
          </h2>
          <p className="text-sm text-indigo-500 font-medium">
            {employee.jobposition}
          </p>
        </div>
      </div>

      <div className="h-px bg-gray-200 mb-4"></div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Email</span>
          <span className="text-gray-700 font-medium truncate max-w-[60%]">
            {employee.email}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Phone</span>
          <span className="text-gray-700 font-medium">
            {employee.phonenumber}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Salary</span>
          <span className="text-green-600 font-semibold">
            ₹{employee.salary}
          </span>
        </div>
      </div>

    </div>
  );
};

export default Card;