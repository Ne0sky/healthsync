
import React, { useState } from 'react';

const Login = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              className="border border-gray-300 rounded px-4 py-2 w-full"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Password:</label>
            <input
              className="border border-gray-300 rounded px-4 py-2 w-full"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">User Type:</label>
            <select
              className="border border-gray-300 rounded px-4 py-2 w-full"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="">Select User Type</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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

