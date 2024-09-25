import { useState } from 'react'


function App() {
  const [Color, setColor] = useState("pink")

  

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: Color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black rounded-xl px-3 py-2 ' >
            <button className='bg-red-600 outline-none px-4  rounded-full py-1 shadaw-lg' onClick={()=>{setColor("red")}}>red</button>
            <button className='bg-green-600 outline-none px-4 rounded-full py-1 shadaw-lg' onClick={()=>{setColor("green")}}>green</button>
            <button className='bg-purple-600 outline-none px-4 rounded-full py-1 shadaw-lg' onClick={()=>{setColor("purple")}}>purple</button>
            <button className='bg-yellow-600 outline-none px-4 rounded-full py-1 shadaw-lg' onClick={()=>{setColor("yellow")}}>yellow</button>
            <button className='bg-blue-600 outline-none px-4 rounded-full py-1 shadaw-lg' onClick={()=>{setColor("blue")}}>blue</button>
          </div>
        </div>
    </div>
  )
}

export default App
