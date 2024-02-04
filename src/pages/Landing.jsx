import React from 'react'
import { Element } from 'react-scroll'
import Reviews from './Reviews'
import About from './About'
import {Link} from 'react-router-dom'
import { TbSettingsAutomation } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiHospitalCross } from "react-icons/gi";

const Landing = () => {
  return (
    <div className='min-h-screen min-w-screen pt-10 overflow-x-hidden font-main px-16'>
    <div className='flex  w-full gap-8 justify-around items-center'>
      <div>
      <div className='text-5xl font-bold py-8 flex items-center gap-2'><GiHospitalCross />HealthSync</div>
      <p className='font-medium text-3xl'>Empowering Remote Healthcare</p> <p className='text-xl'> Bridging Gaps, Connecting Lives.</p>
      <div className='py-8'>
        <Link to='/signup/doctor'><button className='text font-semibold shadow shadow-blue-200 shadow-2xl bg-blue-300 p-3 border border-blue-700 rounded-2xl  hover:bg-blue-600 '>Register as a Doctor</button></Link>
        <Link to='/signup/patient'><button className='text font-semibold shadow shadow-lime-200 shadow-2xl bg-lime-300 p-3 rounded-2xl border border-lime-700  hover:bg-lime-600 mx-4'>Register as a Patient</button></Link>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <div className='bg-white border-lime-600 shadow border p-4 rounded-xl h-48'>
          <p className='text-2xl font-semibold py-2 flex items-center gap-1'>AI powered<TbSettingsAutomation/></p>
          <p className='text-sm font italic'>Harnesses the capabilities of Artificial Intelligence to offer intelligent and optimized user interactions.</p>
        </div>
        <div className='bg-white border-lime-600 border p-4 rounded-xl h-48'>
          <p className='text-2xl font-semibold  py-2 flex items-center gap-1'>Containerized<FaDocker/></p>
          <p className='text-sm font italic'>Utilizes containerization technology like Docker for streamlined deployment, scalability, and consistent performance across diverse environments.</p>
        </div>
        <div className='bg-white border-lime-600 border p-2 rounded-xl h-48'>
          <p className='text-2xl font-semibold py-4 flex items-center gap-1'>Secure<RiSecurePaymentLine/></p>
          <p className='text-sm font italic'>Prioritizes robust security measures, including encryption protocols like jwt  to safeguard user data and ensure a trustworthy platform.</p>
        </div>
      </div>
      </div>
      <img className='w-[600px] h-[600px]' src="/hero.svg" alt="" />
    </div>
      <Element name='about'>
        <About  />
      </Element>
      <Element name='reviews'>
        <Reviews />
      </Element>
      <div className='  py-4'>
            <div className='container mx-auto text-center font-semibold  p-4 rounded-xl'>
                Zenith@2024 Diversion 2k24 
            </div>
        </div>
    </div>
  )
}

export default Landing