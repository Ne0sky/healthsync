import { useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie"

const useGetDoctorByImage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getDoctorbyImage = async (imageFile, symptoms) => {
        try {
            const url = 'https://health.clasher.ovh/analyze_disease';

            // const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
            //     const [name, value] = cookie.split('=').map(c => c.trim());
            //     cookies[name] = value;
            //     return cookies;
            // }, {});
            const token = new Cookies().get('token');

            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            };

            const formData = new FormData();
            if (symptoms) {
                formData.append('symptoms', JSON.stringify(symptoms));
            }
            if (imageFile) {
                formData.append('image', imageFile);
            }

            setIsLoading(true);

            const response = await axios.post(url, formData, {
                headers: headers,
            });

            setIsLoading(false);
            console.log(response.data.specialist);
            return response.data.specialist;
        } catch (error) {
            setIsLoading(false);
            setError('Failed to get department');
            console.error('Request failed:', error.message);
        }
    };

    return { getDoctorbyImage, isLoading, error };
};

export default useGetDoctorByImage;
