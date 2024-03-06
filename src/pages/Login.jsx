
import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import TextField from '@mui/material/TextField';
import { MdAccountCircle } from "react-icons/md";
import {Link} from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";

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
    <div className="flex justify-center items-center min-h-screen p-8 font-main">
      <div className="w-full md:w-1/2 lg:w-1/3 mt-16 bg-lime-100 rounded-md border border-lime-600 shadow-md">
        <form onSubmit={handleSubmit} className='p-4 flex flex-col justify-center'>
          <div className='text-5xl mx-auto '><MdAccountCircle/></div>
        <h2 className="text-lg font-medium text-center pb-8">Welcome, login to your account </h2>

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
            className="bg-lime-600 flex items-center gap-4 justify-center hover:bg-lime-700 text-white font-medium py-2 px-4 rounded"
            type="submit"
          >
            Login <IoLogInOutline className='text-2xl'/>
          </button>
          <div className='py-2 text-center'>
          <p className='text-sm font-bold'>Don't have an accout ? Signup now  </p>
          <div className='flex gap-2 justify-center w-full py-2'>
          <Link to='/signup/doctor'> <button className='bg-lime-500 text-whte p-2 rounded-lg text-sm font-medium'> Doctor Signup </button></Link>
          <Link to='/signup/patient'> <button className='bg-lime-500 text-whie p-2 rounded-lg text-sm font-medium'> Patient Signup </button></Link>
          </div>
          </div>
        </form>
        <div className='flex gap-4 items-center justify-center p-2 text-sm'>
          <div className='p-4 rounded-2xl bg-white border border-lime-700'>
            <p className='font-semibold  '>Demo patient details</p>
            <p>email: patient@gmail.com</p>
            <p>password: 123456</p>
          </div>
          <div className='p-4 rounded-2xl bg-white border border-lime-700'>
            <p className='font-semibold  '>Demo doctor details</p>
            <p>email: doctor@gmail.com</p>
            <p>password: 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

