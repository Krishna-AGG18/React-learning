import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [chars, setChars] = useState(false)
  const [passward, setPassward] = useState("")

  const passwardGenerator = useCallback(()=>{
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "0123456789"
    if(chars) str += "!#$%&'()*<=>?@[^_`]{|}~"

    for(let i = 1; i<= length ; i++){
        let index = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(index)
    }

    setPassward(pass)
  }, [length, number, chars, setPassward])
  return (
    <div className='w-full max-h-full justify-center'>
      <h1 className='text-5xl text-center font-bold py-4'>Password Generator</h1>
      <div className="max-w-lg mx-auto rounded-lg my-8 back font-mono font-bold text-2xl mx-6 p-4">hello</div>
    </div>
  )
}

export default App
