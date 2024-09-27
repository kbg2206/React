import { useEffect } from 'react'
import { useState , useCallback ,useRef} from 'react' // for taking any references - useref
import "./App.css"

function App() {

  
  const [Length, setLength] = useState(8)
  const [Number, setNumber] = useState(false)
  const [SpecialChar, setSpecialChar] = useState(false)
  const [Password, setPassword] = useState("")


  const passwordRef = useRef(null);

  const copyPasswordToSystem = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,Length);
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(Number){
      str += "0123456789";
    }

    if(SpecialChar){
      str += "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";
    }
    for(let i=1;i<=Length;++i){
      let ch = Math.floor(Math.random() * str.length + 1 )
      pass += str[ch-1]
    }


    setPassword(pass)
  },[Length,Number,SpecialChar])

  useEffect(() => {
    
    generatePassword(Length, Number, SpecialChar)
    // setPassword(randomPassword)
    // console.log("Component Mounted "+ Password)
  },[Length,Number,SpecialChar,generatePassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 text-2xl my-8  text-orange-600 bg-gray-700  ' >
      <h1 className='text-center text-white py-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
        <button className='outline-none bg-yellow-500 text-black px-3 py-0.5 shrink-0' onClick={copyPasswordToSystem}>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={100} value={Length} className='cursor-pointer' onChange={(e)=>{
            setLength(parseInt(e.target.value))
          }}/>
          <label>Length : {Length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {Number} onChange={()=>{
            setNumber((prev) =>{
              return !prev;
            })
          }}/>
          <label>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {SpecialChar} onChange={()=>{
            let prev = SpecialChar;
            setSpecialChar(!prev)
          }}/>
          <label>SpeChar</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
