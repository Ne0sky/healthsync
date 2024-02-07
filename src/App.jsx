import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import SignupDoctor from './pages/SignupDoctor'
import Login from './pages/Login'
import PatientLanding from './pages/patient/PatientLanding'
import Layout from './Layout'
import './App.css'
import SignupPatient from './pages/SignupPatient'
import Dashboard from './pages/doctor/Dashboard'
import Jitsi from './pages/Jitsi'
import { useAuthContext } from './hooks/useAuthContext'
import PatientPrescription from './pages/patient/PatientPrescription'

function App() {

  const {user} = useAuthContext()

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<><Layout/><Landing /></>} />
        <Route path='/signup/doctor' element={<><Layout/><SignupDoctor/></>} />
        <Route path='/signup/patient' element={<><Layout/><SignupPatient/></>} />
        <Route path='/login' element={<><Layout/><Login/></>}/>
        <Route path='/patient' element={user && user.type==='patient'? <><Layout/><PatientLanding/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/patient/prescriptions' element={user && user.type==='patient'? <><Layout/><PatientPrescription/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/doctor' element={user && user.type==='doctor'? <><Layout/><Dashboard/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
        <Route path='/meet/:id' element={user && user.type==='patient' || 'doctor'? <><Jitsi/></> : <div> Not Found or You do not have permission.</div>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
    </>
  )
}

export default App
