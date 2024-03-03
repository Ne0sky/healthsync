

import React, { useState } from 'react';
// import useCreatePrescription from '../../hooks/doctor/useCreatePrescription';
import toast from 'react-hot-toast';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useAuthContext } from '../../hooks/useAuthContext';
import { MdAccountCircle } from "react-icons/md";
import useCreatePrescription from '../../hooks/useCreatePrescription';
const Dashboard = () => {
    const {user} = useAuthContext();
    const { addPrescription, error } = useCreatePrescription();
    const[doctorId, setDoctorId] = useState(user._id);
    const [patientId, setPatientId] = useState('');
    const [medications, setMedications] = useState([]);
    const [medication, setMedication] = useState({ name: '', dosage: '', instructions: '' });
    const [prescriptionInstructions, setPrescriptionInstructions] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMedication({ ...medication, [name]: value });
    };

    const handleAddMedication = () => {
        if (medication.name !== '' && medication.dosage !== '' && medication.instructions !== '') {
            setMedications([...medications, medication]);
            setMedication({ name: '', dosage: '', instructions: '' });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const prescriptionData = {
            patient_email: patientId,
            medication: medications,
            diagnosis: prescriptionInstructions,
        };
        await addPrescription(prescriptionData);
        if (!error) {
            toast.success('Prescription added successfully');
            resetForm();
        } else {
            toast.error('Something went wrong');
        }
    };

    const handleDelete = (index) => {
        const updatedMedications = [...medications];
        updatedMedications.splice(index, 1);
        setMedications(updatedMedications);
    };

    const resetForm = () => {
        setPatientId('');
        setMedications([]);
        setMedication({ name: '', dosage: '', instructions: '' });
        setPrescriptionInstructions('');
    };

    return (
        <div className='max-w-screen font-main h-screen flex flex-col lg:flex-row pt-60 md:pt-40 lg:pt-10 justify-around gap-8  items-center '>
            <div className='w-full h-[100%] bg-gradient-to-r from-lime-100 via-lime-00 to-transparent  p-4 rounded text-center flex flex-col  justify-center items-center'>
                
                <p className='text-2xl font-semibold py-8'>Welcome Dr.{user.name}, <br/> to your account</p>
                <div className='bg-white border border-lime-700 p-8 w-1/2 rounded-xl shadow shadow-xl'>
                {/* {doctorId && <p>Doctor ID: {doctorId}</p>} */}
                {user && user.type==='doctor' &&(
                    <div className='py-4 rounded-xl flex flex-col justify-center items-center font-medium'>
                        <MdAccountCircle className='text-6xl'/>
                        <ul>
                            <li className='text-xl'>{user.name}</li>
                            <li>{user.speciality}</li>
                            <li>{user.email}</li>
                        </ul>
                    </div>

                )}
            </div>
            </div>
            <div className='w-full flex items-center flex-col'>
            <h2 className='text-3xl py-4 font-medium'>Create a new Prescription</h2>
            <form onSubmit={handleSubmit} className='flex rounded-md bg-lime-100 flex-col w-[360px] justify-center border border-lime-700 gap-4 items-center p-4'>
                <ArticleOutlinedIcon style={{fontSize:'80px'}} />
                <div className='w-full'>
                <label className='font-medium' htmlFor="">Patient Email</label>
                <input
                    type="text"
                    name="patient_id"
                    value={patientId}
                    onChange={(event) => setPatientId(event.target.value)}
                    placeholder="Patient Email"
                    className='border border-zinc-500 focus:outline-none rounded-md w-full p-2'
                />
                </div>
                <div className='w-full'>
                <label className='font-medium'  htmlFor="">Medications</label>
                <div className='flex w-full flex-wrap gap-2'>
                    {medications.map((medication, index) => (
                        <div key={index} className='flex gap-2 bg-blue-200  border border-blue-800 rounded p-1'>
                            <div className='flex gap-2'>
                                <p>{medication.name}</p>
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
                        name='name'
                        value={medication.name}
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
                        className='bg-blue-200 border border-green-800 rounded-md w-1/3 text-center h-8 text-xl'
                        onClick={handleAddMedication}
                    >
                        +
                    </button>
                    </div>
                </div>
                <div className='w-full'>
                <label className='font-medium'  htmlFor="">Prescription Instructions</label>
                <input
                    type="text"
                    name="prescription_instructions"
                    value={prescriptionInstructions}
                    onChange={(event) => setPrescriptionInstructions(event.target.value)}
                    placeholder="Prescription Instructions"
                    className='border w-full border-zinc-500 focus:outline-none rounded-md  p-2'
                />
                </div>
                <button type="submit" className='bg-lime-700 rounded text-white p-2 w-full'>Submit</button>
            </form>
            </div>
        </div>
    );
};

export default Dashboard;
