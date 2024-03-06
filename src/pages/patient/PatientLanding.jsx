import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { IoMdCloudUpload } from "react-icons/io";
import { TbReportMedical } from "react-icons/tb";
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import useGetDoctorbySymptom from '../../hooks/useCreatePrescription'
import useGetDoctorByImage from '../../hooks/useGetDoctorbyImage';
import {useNavigate} from 'react-router-dom';

const fileTypes = ["JPG", "PNG", "GIF", "WEBP"];
const PatientLanding = () => {
  const nav = useNavigate();
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
    const doctor = await getDoctorbyImage(file, symptoms)
    setResponse(doctor);
  };

  const handleConnectClick = (e) => {
    e.preventDefault();
    const id = localStorage.getItem('doctorId')
    window.open(`/meet/${id}`, '_blank');

  }
  useEffect(() => {
    const doctor = getDoctorbyImage( file, 'test');
  } , [])
  
  return (
    <div className='h-screen pt-20 overflow-x-hidden px-8 max-w-screen justiy-center items-center font-main flex flex-col'>
              <p className='text-4xl py-8'>Welcome to your account</p>

      <div className='  flex flex-col w-full md:w-1/4 bg-white p-8 rounded shadow  justify-center items-center pt-20'>
        <form onSubmit={handleSubmit} className='w-full tr gap-8'action="">
          <h3 className='text-2xl font-bold text-center'>Analyze Symtoms </h3>
          <p className='py-4 text-sm font-medium'>Kindly elaborate on your symptoms for furthur medical advice</p>
          <TextField
            className="border mb-8 border-gray-300 bg-white rounded px-4 py-2 w-full"
            type="text"
            label="Enter your symptoms"
            name='symptoms'
            id='symptoms'
            onChange={(e) => setSymptoms(e.target.value)}
            />
            {/* <textarea name="symptoms" id="symptoms" cols="30" 
            onChange={(e) => setSymptoms(e.target.value)}
            rows="10"></textarea> */}
        
        <div className='py-8 '><FileUploader  multiple={false} handleChange={handleChange} name="file" types={fileTypes} /></div>
        <button className="bg-lime-600 w-full text-center my-8 text-white font-medium py-2 px-4 rounded" type="submit">Submit</button>
        </form>
        <div>
        {response && (
          <div className='w-full'> <p className='font-bold flex gap-2 items-center'>Report <TbReportMedical/> </p><p className='text-sm w-full font-bold italic rounded  bg-zinc-300 p-2'>You should consult with a {response}</p></div>
          
        )}
        {
          response && (
             <div className='flex my-4   items-center'><button className='bg-lime-500 p-2 rounded shadow-md text-md font-medium' onClick={handleConnectClick}> Connect  </button> <p className='px-2 text-sm font-sm'>with the available {response}</p></div>
          )}
      </div>
      </div>
      
    </div>
  )
}

export default PatientLanding