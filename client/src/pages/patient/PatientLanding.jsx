import React from 'react'
import TextField from '@mui/material/TextField';
import  { useEffect } from 'react';

import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import useGetDoctorbySymptom from '../../hooks/useGetDoctorbySymptom'
import useGetDoctorByImage from '../../hooks/useGetDoctorbyImage';
const fileTypes = ["JPG", "PNG", "GIF", "WEBP"];
const PatientLanding = () => {
  const {getDoctor} = useGetDoctorbySymptom();
  const {getDoctorbyImage} = useGetDoctorByImage();
  const [response, setResponse] = useState(null);
  const [file, setFile] = useState(null);
  const [symptoms, setSymptoms] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitting form');
    const doctor = await getDoctorbyImage(file, symptoms)
    console.log(doctor);
    setResponse(doctor);
    console.log('response', response);
  };


  
  return (
    <div className='h-screen pt-20 px-8 w-screen justiy-center font-main flex flex-col'>
              <p className='text-4xl'>Welcome to your account</p>

      <div className='  flex flex-col w-full justify-center pt-20'>
        <form onSubmit={handleSubmit} className='w-1/2'action="">
          {/* <TextField
            className="border w-1/2 border-gray-300 bg-white rounded px-4 py-2 w-full"
            type="text"
            label="Enter your symptoms"
            name='symptoms'
            id='symptoms'
            onChange={(e) => setSymptoms(e.target.value)}
            /> */}
            <textarea name="symptoms" id="symptoms" cols="30" 
            onChange={(e) => setSymptoms(e.target.value)}
            rows="10"></textarea>
        
        <FileUploader multiple={false} handleChange={handleChange} name="file" types={fileTypes} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      </div>
      <div>
        {response && (
          <div> {response}</div>
        )}

      </div>
    </div>
  )
}

export default PatientLanding