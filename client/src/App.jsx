import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import SignupDoctor from './pages/SignupDoctor'
import Login from './pages/Login'
import PatientLanding from './pages/patient/PatientLanding'
import Layout from './Layout'
import './App.css'
import SignupPatient from './pages/SignupPatient'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<><Layout/><Landing /></>} />
        <Route path='/signup/doctor' element={<><Layout/><SignupDoctor/></>} />
        <Route path='/signup/patient' element={<><Layout/><SignupPatient/></>} />
        <Route path='/login' element={<><Layout/><Login/></>}/>
        <Route path='/patient' element={<><Layout/><PatientLanding/></>}/>
        <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App
