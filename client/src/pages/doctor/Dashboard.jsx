

import React, { useState } from 'react';
// import useCreatePrescription from '../../hooks/doctor/useCreatePrescription';
import toast from 'react-hot-toast';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const Dashboard = () => {
    // const { addPrescription, error } = useCreatePrescription();
    const [patientId, setPatientId] = useState('');
    const [medications, setMedications] = useState([]);
    const [medication, setMedication] = useState({ medication_name: '', dosage: '', instructions: '' });
    const [prescriptionInstructions, setPrescriptionInstructions] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMedication({ ...medication, [name]: value });
    };

    const handleAddMedication = () => {
        if (medication.name !== '' && medication.dosage !== '' && medication.instructions !== '') {
            setMedications([...medications, medication]);
            setMedication({ medication_name: '', dosage: '', instructions: '' });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const prescriptionData = {
            patient_id: patientId,
            medications,
            instructions: prescriptionInstructions,
        };
        console.log(prescriptionData);
        // await addPrescription(prescriptionData);
        // if (!error) {
        //     toast.success('Prescription added successfully');
        //     resetForm();
        // } else {
        //     toast.error('Something went wrong');
        // }
    };

    const handleDelete = (index) => {
        const updatedMedications = [...medications];
        updatedMedications.splice(index, 1);
        setMedications(updatedMedications);
    };

    const resetForm = () => {
        setPatientId('');
        setMedications([]);
        setMedication({ medication_name: '', dosage: '', instructions: '' });
        setPrescriptionInstructions('');
    };

    return (
        <div className='w-screen h-screen flex justify-around items-center gap-8'>
            <div>
                <p className='text-2xl font-bold'>Join a meeting</p>
                
            </div>
            <div>
            <h2 className='text-3xl py-4 font-medium'>Create a new Prescription</h2>
            <form onSubmit={handleSubmit} className='flex rounded-md bg-zinc-100 flex-col w-[360px] justify-center gap-4 shadow-zinc-500 shadow-xl items-center p-4'>
                <ArticleOutlinedIcon style={{fontSize:'80px'}} />
                <div className='w-full'>
                <label htmlFor="">Patient ID</label>
                <input
                    type="text"
                    name="patient_id"
                    value={patientId}
                    onChange={(event) => setPatientId(event.target.value)}
                    placeholder="Patient ID"
                    className='border border-zinc-500 focus:outline-none rounded-md w-full p-2'
                />
                </div>
                <div className='w-full'>
                <label htmlFor="">Medications</label>
                <div className='flex w-full flex-wrap gap-2'>
                    {medications.map((medication, index) => (
                        <div key={index} className='flex gap-2 bg-blue-200  border border-blue-800 rounded p-1'>
                            <div className='flex gap-2'>
                                <p>{medication.medication_name}</p>
                                <p>{medication.dosage}</p>
                                <p>{medication.instructions}</p>
                            </div>
                            <button onClick={() => handleDelete(index)}><ClearOutlinedIcon style={{fontSize:'16px'}} /></button>
                        </div>
                    ))}
                </div>
                </div>
                <div className='w-full flex flex-col items-end gap-2'>
                    <input
                        type='text'
                        name='medication_name'
                        value={medication.medication_name}
                        onChange={handleInputChange}
                        placeholder='Medication Name'
                        className='border w-full rounded-md border border-zinc-500 p-1'
                    />
                    <div className='flex gap-2'>
                    <input
                        type='text'
                        name='dosage'
                        value={medication.dosage}
                        onChange={handleInputChange}
                        placeholder='Dosage'
                        className='border w-1/3 rounded-md border border-zinc-500 p-1'
                    />
                    <select
                        name='instructions'
                        value={medication.instructions}
                        onChange={handleInputChange}
                        className='border w-1/3 rounded-md border border-zinc-500 p-1'
                    >
                        <option value=''>Instructions</option>
                        <option value='ODAC'>ODAC</option>
                        <option value='BDAC'>BDAC</option>
                        <option value='BDPC'>BDPC</option>
                        <option value='TDS'>TDS</option>
                    </select>
                    
                    <button
                        type='button'
                        className='bg-green-200 border border-green-800 rounded-md w-1/3 text-center h-8 text-xl'
                        onClick={handleAddMedication}
                    >
                        +
                    </button>
                    </div>
                </div>
                <div className='w-full'>
                <label  htmlFor="">Prescription Instructions</label>
                <input
                    type="text"
                    name="prescription_instructions"
                    value={prescriptionInstructions}
                    onChange={(event) => setPrescriptionInstructions(event.target.value)}
                    placeholder="Prescription Instructions"
                    className='border w-full border-zinc-500 focus:outline-none rounded-md  p-2'
                />
                </div>
                <button type="submit" className='submit_button w-full'>Submit</button>
            </form>
            </div>
        </div>
    );
};

export default Dashboard;
