import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [name, setname] = useState('')
    const [pass, setPass] = useState('')

    const {setUser} = useContext(UserContext);

     const handleSubmit = (e)=>{
        e.preventDefault();
        setUser([name, pass]);
     }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter Name' /> <br />
      <input type="text" value={pass} placeholder='Password' onChange={(e)=>{setPass(e.target.value)}}/>
      <br /> <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
