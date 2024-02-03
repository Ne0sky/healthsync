import React from 'react'
import { Element } from 'react-scroll'
import Reviews from './Reviews'
import About from './About'
const Landing = () => {
  return (
    <div className='min-h-screen min-w-screen overflow-x-hidden font-main px-16'>
    <div className='flex  w-full gap-8 justify-around items-center'>
      <div>
      <div className='text-5xl font-bold'>HealthSync</div>
      <p className='text-2xl '>Empowering Remote Healthcare: Bridging Gaps, Connecting Lives.</p>
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