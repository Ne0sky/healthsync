
import { useState } from 'react';
import Cookies from 'universal-cookie';
const useGetPatientPrescription = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [departments, setDepartments] = useState([]);

    const getAllPrescription = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const cookies = new Cookies();
            const token = cookies.get('token');
            const response = await fetch(`https://healthsync-one.vercel.app/get_my_prescriptions`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to get departments');
            }

            const data = await response.json();
            const array = data.data;
            return array;


        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { getAllPrescription, isLoading, error, departments };
};

export default useGetPatientPrescription;
