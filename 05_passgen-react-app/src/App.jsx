import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [chars, setChars] = useState(false)
  const [passward, setPassward] = useState("")

  // useref hook
  const passref = useRef(null)
  const passwardGenerator = useCallback(()=>{
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "0123456789"
    if(chars) str += "!#$%&'()*<=>?@[^_`]{|}~"

    for(let i = 1; i<= length ; i++){
        let index = Math.floor(Math.random()*str.length)
        pass += str.charAt(index)
    }

    setPassward(pass)
  }, [length, number, chars, setPassward])  // here setPassward is passed only for optimisation

  // passwardGenerator() -- can't call it like this coz react decides the priorities not us on what to render and when

  const copyPasstoClip = useCallback(()=>{
    passref.current?.select()
    // passref.current?.setSelectionRange(0,3)  to select only 3 chars
    window.navigator.clipboard.writeText(passward)
  }, [passward])
  useEffect(()=>{
    passwardGenerator();
  },[length, number, chars, passwardGenerator])

  return (
    <div className='w-full max-h-full justify-center my-12'>
      <h1 className='text-5xl text-center font-bold py-4 animate-bounce'>Password Generator</h1>
      <div className=" flex gap-0.5 max-w-lg mx-auto rounded-lg my-8 back font-mono font-bold text-2xl p-4">
        <input 
        type="text" 
        value={passward}
        className='outline-none w-full py-1 px-3 rounded-lg bg-amber-50'
        placeholder='Password'
        readOnly
        ref={passref}
        />
        <button
        className='cursor-pointer outline-none px-3 py-0.5 shrink-0 backrev rounded-lg  '
        onClick={copyPasstoClip}
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-6 justify-center max-w-lg mx-auto">
        <div className="flex items-center gap-x-1">
          <input type="range"
            min={6}
            max={64}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
           />
           <label >Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked = {Number}
            id='numberInput'
            onChange={()=>{
              setNumber((prev)=>!prev)
            }}
          />
          <label >Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked = {chars}
            id='numberInput'
            onChange={()=>{
              setChars((prev)=>!prev)
            }}
          />
          <label >Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
