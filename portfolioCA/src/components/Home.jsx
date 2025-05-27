import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-[url('https://i.pinimg.com/originals/59/89/b7/5989b7149f2d899ac53c1078bdddc919.gif')] 
                bg-no-repeat bg-cover bg-center 
                w-full flex justify-center"
      style={{ height: 'calc(100vh - 80px)' }}>

      <div className='w-[90%] sm:w-[80%] p-4 sm:p-8 text-white backdrop-blur-xs flex flex-col justify-center'>

        <p className="text-sm sm:text-base">Accounting, Taxation and Auditing Services</p>

        <p className="relative inline-block w-fit 
text-3xl sm:text-4xl md:text-5xl font-bold cursor-pointer my-3 
pb-2 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
after:h-[3px] after:w-0 after:bg-orange-700 
after:transition-all after:duration-300 hover:after:w-full"
        >
          Karan Aggarwal
        </p>

        <div>
          <Link to="/services">
            <button className="bg-orange-700 text-white px-5 sm:px-6 py-2 rounded hover:bg-orange-800 mt-2 cursor-pointer text-sm sm:text-base">
              View Services
            </button>
          </Link>
        </div>

        <p className="max-w-xl text-gray-300 my-4 text-sm sm:text-base">
          Welcome! I provide expert financial services tailored for individuals, startups, and businesses.
          From precise tax filing to deep-dive audits, I'm here to handle your finances so you can focus on growth.
        </p>

        <p className="text-gray-200 mt-4 text-sm sm:text-base">Need expert financial advice?</p>

        <a href="/contact" className="text-orange-500 underline font-bold text-sm sm:text-base">Get in touch →</a>

      </div>
      <div className='text-white flex justify-center items-center'>
        
      </div>
    </div>
  )
}

export default Home
