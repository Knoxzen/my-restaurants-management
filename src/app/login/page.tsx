'use client';
import React, { useState } from "react";

export default function LoginPage() {
    const [userData,setUserData] = useState({
        userName:'',
        userPassword:''
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target;
        setUserData(param =>({
            ...param,
            [name]:value
        }));
    };

    const handleSubmit = ()=>{
        // console.log("Logged",userData.userName);
        // console.log("Logged",userData.userPassword);
    };

    return(
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-50 to-red-100">
          <div className="bg-white shadow-xl rounded-lg p-10 w-96 text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-6">Restaurant Login</h1>
            
            <p className="text-sm text-gray-500 mb-6">Welcome! Please log in to access the system.</p>

            <div className="text-left mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-red-400"
                type="text"
                name="userName"
                placeholder=""
                onChange={handleChange}
                value={userData.userName}
              />
            </div>

            <div className="text-left mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-red-400"
                type="password"
                name="userPassword"
                placeholder="••••••••"
                onChange={handleChange}
                value={userData.userPassword}
              />
            </div>

            <button
              type="button"
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition font-semibold"
              onClick={handleSubmit}
            >
              Log In
            </button>

            <p className="mt-6 text-xs text-gray-400">Your session will expire automatically after inactivity.</p>
          </div>
        </div>
    )
}