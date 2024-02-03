import Cookies from 'universal-cookie';
import { useState } from 'react';

const useGetDoctorBySymptom = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getDoctor = async (symptom) => {
        try {
            const req = {
                symptoms: symptom
            };
            const cookies = new Cookies();
            const token = cookies.get('token');
            const response = await fetch(`https://health.clasher.ovh/predict`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req)
            })
            if (!response.ok) {
                throw new Error('Failed to get department')
            }
            const data = await response.json()
            return data.data.answer;
            
        } catch (error) {
            console.log(error.message)
        }
    }
    return { getDoctor }
    
}

export default useGetDoctorBySymptom