
import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import toast from "react-hot-toast"
import Cookies from "universal-cookie"
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from "react-router-dom"


export const useDoctorSignup = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const nav = useNavigate()

    const signup = async(email, name, phone, speciality, password)=>{

        setIsLoading(true);
        setError(null)
        const data={
            "email" : email,
            "name" : name,
            "phone" : phone,
            "speciality" : speciality,
            "password" : password,
        }
        console.log(data)
        const response = await fetch(`https://healthsync-one.vercel.app/register/doctor`,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
            })

            const json = await response.json()
            if(!response.ok)
            {
                toast.error(json.message)
                setIsLoading(false)
                setError(json.message)
            }

            if(response.ok)
            {
                // Decode the JWT token
                const decodedData = jwtDecode(json.token)

                const cookies = new Cookies()
                cookies.set('token', json.token, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }) //expires in 7 days
                localStorage.setItem('user', JSON.stringify({ ...json.data, type: decodedData.type }));
            
            //update AuthContext
            dispatch({type:'LOGIN', payload: { ...json.data, type: decodedData.type }})
                setIsLoading(false)
                toast.success("Sign Successfully")
                nav('/doctor')
            }
    }

    return {signup, isLoading, error}
}