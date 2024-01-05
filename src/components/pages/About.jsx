import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

function About() {
  return (
    <div className='text-center p-5'>
      <h1 className="text-5xl font-bold mb-4">
        Facebook Finder
      </h1>
      <p className="mb-2 text-2xl text-dark">
        This is a Reactjs App created for finding facebook user, it returns some of the user's properties. However, this can only be done with the user's consent by providing some vital information. 
      </p>
      <p className="mb-4 text-2xl text-dark">
        It is clearly stated in the above statement that the App is just an API Integration Tester.
        By: <strong className='underline'>teeTech</strong> 
      </p>
      <p className="text-lg text-dark font-bold">
        Version : <span className='text-black'>1.0.0</span>
      </p>
      <p className="text-2xl text-dark font-bold">
        <div className="container  mx-auto">
           Contacts:<a href="https://github.com/teeTech32" target='_blank' rel='noreferrer' className="underline flex-none  pr-2 mx-2"><FaGithub className='inline text-2xl'/>@github.com/teeTech32</a>
        </div>
      </p>
      <p className="text-2xl text-dark font-bold">
        <a href="https://linkedin.com/in/timothy-atanda-55b36424a" target='_blank' rel='noreferrer' className="underline flex-none  pr-2 mx-2"><FaLinkedin className='inline text-2xl'/>@linkedin.com/Timothy Atanda</a>
      </p>
    </div>
  )
}

export default About