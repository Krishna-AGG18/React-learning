import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-black p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-white'>
      <div className='flex flex-col justify-center'>
        <p className="text-xs text-gray-400 mt-2 text-center md:text-left">
          CA Karan Aggarwal
        </p>
        <p className="text-xs text-gray-400 mt-2 max-md:text-center">
          Business Accounting Associate | Simplifying your finances.
        </p>
        <p className="text-xs text-gray-400 mt-2 max-md:text-center">
          🔗LinkedIn : <a href="https://www.linkedin.com/in/karan2759" className='text-orange-500 hover:text-orange-600' target='_blank' rel="noopener noreferrer">CA Karan Aggarwal</a>
        </p>
      </div>
      <div className='flex flex-col justify-center'>
        <p className="text-xs text-gray-400 mt-2 text-center md:text-left"> 🔗 Quick Links </p>
        <div><Link to={"/"} className='text-[12px]  max-md:text-center'><li> Home </li></Link></div>
        <div><Link to={"/about"} className='text-[12px] max-md:text-center'><li> About  </li></Link></div>
        <div><Link to={"/services"} className='text-[12px] max-md:text-center'><li> Services </li> </Link></div>
        <div><Link to={"/contact"} className='text-[12px] max-md:text-center'><li> Contact  </li> </Link></div>
      </div>
      <div className='flex flex-col justify-center flex-wrap'>
        <p className="text-xs text-gray-400 mt-2 text-center md:text-left">📞 Contact </p>
        <p className="text-xs text-gray-400 mt-2  max-md:text-center">workwithme.karan.ac2759@gmail.com </p>
        <p className="text-xs text-gray-400 mt-2  max-md:text-center">+91 7836044774 </p>
        <p className="text-xs text-gray-400 mt-2  max-md:text-center">Delhi, India </p>
        <p className="text-xs text-gray-400 mt-2  max-md:text-center">
          Background image credit: <a
            href="https://www.pinterest.com/"
            className="text-orange-500 underline hover:text-orange-600"
            target="_blank"
            rel="noopener noreferrer"
          >Pinterest</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
