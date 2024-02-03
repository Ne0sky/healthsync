
import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import TextField from '@mui/material/TextField';
import { MdAccountCircle } from "react-icons/md";

const Login = () => {
  const {login} = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(email, password, userType);
  };

  return (
    <div className="flex justify-center items-center h-screen p-8 font-main">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-lime-100 rounded-md border border-lime-600 shadow-md">
        <form onSubmit={handleSubmit} className='p-4 flex flex-col justify-center'>
          <div className='text-5xl mx-auto'><MdAccountCircle/></div>
        <h2 className="text-lg font-medium mb-4 flex">Welcome, login to your account </h2>

          <div className="mb-4">
            <TextField
              className="border border-gray-300 bg-white rounded px-4 py-2 w-full"
              type="email"
              value={email}
              label="Email"
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-4">
            <TextField
              className="border border-gray-300 bg-white rounded px-4 py-2 w-full"
              type="password"
              value={password}
              label="Password"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mb-4">
            <select
              className="border border-gray-300   rounded px-4 py-4 w-full"
              labelId="demo-simple-select-label"
          id="demo-simple-select"
              value={userType}
              onChange={handleUserTypeChange}
              label="UserType"
            >
              <option value=''>Select User Type</option>
              <option value='patient'>patient</option>
              <option value='doctor'>doctor</option>
        
            </select>
          </div>

          <button
            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

