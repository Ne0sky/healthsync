import React, { useState } from 'react';
import { usePatientSignup } from '../hooks/usePatientSignup';

const SignupPatient = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const { signup,isLoading, pwError, emailError } = usePatientSignup();
    
    const handleSignup = async(e) => {
    e.preventDefault();
    console.log('SignupPatient:', name, email, phone,  password);
    await signup( email,name, phone, password);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">Signup Patient</h2>
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

export default SignupPatient;
