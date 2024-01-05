import React from 'react'
import{FaFaceSmile} from 'react-icons/fa6'

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer text-content-primary footer-center bg-blue-700 p-5'>
      <div>
        <FaFaceSmile className='text-5xl text-white mb-none  '/>
        <p className='text-white'>teeTech &copy;{footerYear} All copy rights reserved!</p>
      </div>
         
    </footer>
  )
}

export default Footer