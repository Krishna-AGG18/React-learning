import React from 'react'

function Contact() {
  return (
    <div
  className="p-4 bg-[url('https://i.pinimg.com/originals/bc/8d/02/bc8d026b258afad9a3d4b1b84ed6721f.gif')] h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
>
  <form
    action="https://formsubmit.co/workwithme.karan.ac2759@gmail.com"
    method="POST"
    className="flex flex-col gap-4 
               w-full max-w-lg 
               mx-4 sm:mx-auto 
               p-6 sm:p-8 
               backdrop-blur-sm bg-opacity-70 rounded shadow 
               h-auto sm:h-[80%]"
  >
    {/* Anti-spam hidden field */}
    <input type="text" name="_honey" style={{ display: 'none' }} />

    {/* Disable CAPTCHA */}
    <input type="hidden" name="_captcha" value="false" />

    {/* Redirect after submission */}
    <input
      type="hidden"
      name="_next"
      value="https://yourdomain.com/thank-you"
    />

    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
      Work With Me....
    </h2>

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-800"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-800"
    />

    <input
      type="tel"
      name="phone"
      placeholder="Your Contact Number"
      required
      className="px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-800"
    />

    <textarea
      name="message"
      rows="4"
      placeholder="Your Message"
      required
      className="px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-800 resize-none"
    ></textarea>

    <button
      type="submit"
      className="bg-orange-700 text-white px-6 py-2 rounded
                 hover:bg-orange-800 transition-colors"
    >
      Send Message
    </button>
  </form>
</div>


  )
}

export default Contact
