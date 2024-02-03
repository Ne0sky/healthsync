
import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import toast from "react-hot-toast"
import Cookies from "universal-cookie"
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from "react-router-dom"


export const useDoctorSignup = () =>{
    const [pwError, setPwError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const nav = useNavigate()

    const signup = async(email, name, phone, specialty, password)=>{

        setIsLoading(true);
        setPwError(null)
        setEmailError(null)
        const data={
            'email' : email,
            'name' : name,
            'phone' : phone,
            'specialty' : specialty,
            'password' : password,
        }
        const response = await fetch(`auth/chef/`,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
            })

            const json = await response.json()

            if(!response.ok)
            {
                setIsLoading(false)
                setPwError(json.non_field_errors)
                setEmailError(json.email)
            }

            if(response.ok)
            {
                // Decode the JWT token
                const decodedData = jwtDecode(json.token)

                const cookies = new Cookies()
                cookies.set('token', json.token, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }) //expires in 7 days
                localStorage.setItem('user', JSON.stringify(decodedData))
                //update AuthContext
                dispatch({type:'LOGIN', payload: decodedData})

                setIsLoading(false)
                toast.success("Sign Successfully")
            }
    }

    return {signup, isLoading, pwError, emailError}
}