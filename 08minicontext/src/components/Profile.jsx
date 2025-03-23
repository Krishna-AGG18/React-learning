import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div>Please Login Buddy</div>
    console.log(user);
    
  return (
    <div>
        Welcome : {user[0]} 🧡
    </div>
  )
}

export default Profile
