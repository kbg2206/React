import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj1 = {
    name : "Kushagra jain",
    age : 25,
    email : "kushagra@gmail.com"
  }

  let myobj2 = {
    name : "john jain",
    age : 30,
    email : "john@gmail.com"
  }
  return (
    <div>
      <h1 className='flex mt-4 bg-red-700 text-black '>Tailwind Test</h1>
      <button className='flex mt-4 bg-yellow-700 text-black rounded-xl'>add value</button>
      
      <Card price= "20" number="453" about = {myobj1}/>
      <Card price="50" number="420" about = {myobj2}/>
      <Card price="100" about = {myobj1}/>
      
    </div>
  )
}

export default App
