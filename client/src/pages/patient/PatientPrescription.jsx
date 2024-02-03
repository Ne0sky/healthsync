import React from 'react'
import { useEffect } from 'react'
import useGetPatientPrescription from '../../hooks/useGetPatientPrescription'

const PatientPrescription = () => {
    const {getAllPrescription} = useGetPatientPrescription();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPrescription();
            console.log(data);
            
        };
        fetchData();
    }, []);

    return (
        <div className='route'>PatientPrescription</div>
    )
}

export default PatientPrescription