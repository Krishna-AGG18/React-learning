import React from 'react'

function Thank() {
  return (
   <div
  className="p-4 bg-[url('https://i.pinimg.com/originals/78/a5/ff/78a5ff90131c88c3e0fa328c54451c3e.gif')] h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
>
      <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-white text-lg mb-6">
          Your message has been successfully sent.  <br></br>
          I truly appreciate you taking the time to reach out — <br></br>
          I’ll get back to you as soon as possible.
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
        >
          🔙 Go Back to Home
        </a>
    </div>
  )
}

export default Thank
