import React from 'react'

const About = () => {
  return (
    <div className='w-full p-16 flex flex-row-reverse font-main gap-8 items-center'>
        <div>
        <div className='flex items-center'><h2 className='text-4xl  font-bold py-8 flex'>About <span className='ml-2 text-lime-600'>HealthSync ? </span></h2><span></span></div>
        <p>
        Welcome to HealthSync, where we merge cutting-edge AI technology with healthcare to provide you with a seamless and efficient experience. Input your symptoms, and our advanced AI model swiftly analyzes the information, offering reliable insights into potential health issues. Enhance your diagnosis by uploading relevant images, providing our healthcare professionals with additional context. Connect with licensed doctors through secure video consultations, receiving expert advice from the comfort of your home. After your consultation, your prescriptions are delivered digitally as PDFs to your email, ensuring a streamlined and convenient process.
        </p>
        </div>
        <img className='w-[500px] h-[500px]' src="about.svg" alt="" />
    </div>
  )
}

export default About