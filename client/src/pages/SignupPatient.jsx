import React, { useState } from 'react';
import { usePatientSignup } from '../hooks/usePatientSignup';
import TextField from '@mui/material/TextField';
import { MdAccountCircle } from "react-icons/md";

const SignupPatient = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const { signup, isLoading, pwError, emailError } = usePatientSignup();
    
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log('SignupPatient:', name, email, phone, password, gender, birthdate);
        await signup(email, name, phone, password, gender, birthdate);
    };

    return (
        <div className="flex flex-col items-center font-main  pt-20 px-4 justify-center h-screen">
            <div className='bg-lime-200 p-8 w-full border border-lime-700 md:w-1/3 lg:w-1/4 rounded shadow-md flex flex-col items-center  justify-center'>
            <h2 className="text-2xl font-bold mb-4  ">Signup Patient</h2>
            <div className='flex flex-col font-main gap-2 w-full '>
            <TextField
                className="border bg-white font-main mb-2 border-gray-300 rounded-md px-4  mb-2"
                type="text"
                value={name}
                label="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                className="border  bg-white mb-2 border-gray-300 rounded-md px-4  mb-2"
                type="email"
                value={email}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                className="border bg-white mb-2 border-gray-300 rounded-md px-4  mb-2"
                type="tel"
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
                className="border bg-white mb-2 border-gray-300 rounded-md px-4  "
                type="password"
                value={password}
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <select
                className="border w-full bg-white border-gray-300 rounded-md px-4 py-4 mb-2"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input
                className="border w-full bg-white border-gray-300 rounded-md px-4 py-4 mb-2"
                type="date"
                placeholder="Birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                pattern="\d{4}-\d{2}-\d{2}"
                title="Please enter a date in the format yyyy-mm-dd"
            />
            </div>
            <button
                className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 w-full px-4 rounded"
                onClick={handleSignup}
            >
                Signup
            </button>
            </div>
        </div>
    );
};

export default SignupPatient;
