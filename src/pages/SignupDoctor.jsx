import React, { useState } from 'react';
import { useDoctorSignup } from '../hooks/useDoctorSignup';
import TextField from '@mui/material/TextField';
import { MdAccountCircle } from "react-icons/md";

const SignupDoctor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [password, setPassword] = useState('');

  const { signup,isLoading, error} = useDoctorSignup();

  const handleSignup = async(e) => {
  e.preventDefault();
  console.log('SignupDoctor:', name, email, phone, specialty, password);
  await signup( email,name, phone, specialty, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='flex flex-col gap-4 w-1/4 bg-lime-100 rounded border p-4 border-lime-700'>
      <h2 className="text-2xl font-bold mb-4">Signup Doctor</h2>
      <TextField
        className="border bg-white border-gray-300 rounded-md px-4 py-2 mb-2"
        type="text"
        value={name}
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className="border bg-white border-gray-300 rounded-md px-4 py-2 mb-2"
        type="email"
  
        value={email}
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Phone"
        className="border bg-white border-gray-300 rounded-md px-4 py-2 mb-2"
        type="tel"
     
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <select
        className="border bg-white border-gray-300 rounded-md px-4 py-2 mb-2"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      >
        <option value="General physician">General physician</option>
    <option value="Primary care physician">Primary care physician</option>
    <option value="Pulmonologist">Pulmonologist</option>
    <option value="ENT specialist">ENT specialist</option>
    <option value="Allergist">Allergist</option>
    <option value="Ophthalmologist">Ophthalmologist</option>
    <option value="Dentist">Dentist</option>
    <option value="Gastroenterologist">Gastroenterologist</option>
    <option value="Cardiologist">Cardiologist</option>
    <option value="Neurologist">Neurologist</option>
    <option value="Sleep specialist">Sleep specialist</option>
    <option value="Rheumatologist">Rheumatologist</option>
    <option value="Orthopedic surgeon">Orthopedic surgeon</option>
    <option value="Dermatologist">Dermatologist</option>
    <option value="Audiologist">Audiologist</option>
    <option value="Speech-language pathologist">Speech-language pathologist</option>
    <option value="Psychiatrist">Psychiatrist</option>
      </select>
      
      <TextField
        label="Password"
        className="border bg-white border-gray-300 rounded-md px-4 py-2 mb-2"
        type="password"

        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-lime-600 w-full text-white font-bold py-2 px-4 rounded"
        onClick={handleSignup}
      >
        Signup
      </button>
      </div>
    </div>
  );
};

export default SignupDoctor;
