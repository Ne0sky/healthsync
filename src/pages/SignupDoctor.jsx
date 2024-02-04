import React, { useState } from 'react';
import { useDoctorSignup } from '../hooks/useDoctorSignup';

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
      <h2 className="text-2xl font-bold mb-4">Signup Doctor</h2>
      <input
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <select
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
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
      
      <input
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSignup}
      >
        Signup
      </button>
    </div>
  );
};

export default SignupDoctor;
