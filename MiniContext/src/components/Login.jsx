import React from 'react'
import { useState ,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {

    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({username,password})
        
  
    }
  return (
    <div>
      <h2>Login</h2>

      <label htmlFor="Username">Username  : </label>
      <input type = "text" placeholder = "username" value = {username} onChange={(event)=>{
        setUserName(event.target.value)
      }}/>
      <br />
      <label htmlFor="Password"> Password : </label>
      <input type = "text" placeholder = "password" value = {password} onChange={(event)=>{
        setPassword(event.target.value)
      }}/>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
