
import { useState } from 'react';
import Cookies from 'universal-cookie';
const useCreatePrescription = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const cookies = new Cookies();
    const token = cookies.get('token');
    const addPrescription = async (data) => {
        try {
            setLoading(true);
            const response = await fetch(`https://healthsync.duckdns.org/create_prescription`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const data = await response.json();
                setError(null);
            } else {
                const errorResponse = await response.json();
                setError(errorResponse.message);
            }
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { addPrescription, loading, error };
};

export default useCreatePrescription;
