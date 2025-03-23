import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userID} = useParams();
  return (
    <div className='p-8 bg-amber-600 text-8xl text-center font-extrabold flex flex-wrap justify-evenly'>
     <img className="h-80 rounded-4xl overflow-hidden" src="https://i.pinimg.com/474x/d4/7d/78/d47d78098e620c4dfa048eca50975882.jpg" alt="image2" />
      <p className='text-center flex items-center'>User : {userID}</p>
    </div>
  )
}

export default User
