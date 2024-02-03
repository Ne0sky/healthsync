import React, { useState } from 'react';
import { usePatientSignup } from '../hooks/usePatientSignup';

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
            <select
                className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input
                className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                type="date"
                placeholder="Birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                pattern="\d{4}-\d{2}-\d{2}"
                title="Please enter a date in the format yyyy-mm-dd"
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
