import React from 'react'
import { useEffect, useState } from 'react'
import useGetPatientPrescription from '../../hooks/useGetPatientPrescription'
import { GrDocumentCloud } from "react-icons/gr";

const PatientPrescription = () => {
    const {getAllPrescription} = useGetPatientPrescription();
    const [prescriptions, setPrescriptions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPrescription();
            setPrescriptions(data);
            
        };
        fetchData();
    }, []);

    return (
        <div className='min-h-screen w-screen flex flex-col font-main justify-center items-center'>
            <h1 className='text-4xl flex items-center gap-2 py-8 font-semibold'>Prescriptions <GrDocumentCloud/></h1>
            {   
                prescriptions.map((prescription) => {
                    return (
                        <div className='border flex flex-col justify-center rounded-xl shadow-md p-4 my-4'>
                            <div className='flex'><p className='font-semibold'>Diagnosis -  </p><p className='italic text-sm'>{prescription.diagnosis}</p></div>
                            <p className='font-semibold'>Medications- </p>
                            {prescription.medication.map((medication) => {
                                return (
                                    <div className='flex italic text-sm gap-2'>
                                        <div >
                                        <p>{medication.name}</p>
                                        <p>{medication.dosage}</p>
                                        </div>
                                        <p>{medication.instructions}</p>
                                    </div>
                                )
                            })}
                            <div className='flex'><p className='font-semibold'>Created at-</p><p className='text-sm italic'>{prescription.created_at}</p></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PatientPrescription