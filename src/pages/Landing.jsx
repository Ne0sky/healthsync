import React from 'react'
import { Element } from 'react-scroll'
import Reviews from './Reviews'
import About from './About'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
    <div className='min-h-screen min-w-screen overflow-x-hidden font-main px-16'>
    <div className='flex  w-full gap-8 justify-around items-center'>
      <div>
      <div className='text-5xl font-bold py-8'>HealthSync</div>
      <p className='font-medium text-3xl'>Empowering Remote Healthcare</p> <p className='text-xl'> Bridging Gaps, Connecting Lives.</p>
      <div className='py-8'>
        <Link to='/signup/doctor'><button className='text-xl bg-lime-500 p-3 rounded '>Register as a Doctor</button></Link>
        <Link to='/signup/patient'><button className='text-xl bg-lime-500 p-3 rounded mx-4'>Register as a Patient</button></Link>
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

    </div>
  )
}

export default Landing