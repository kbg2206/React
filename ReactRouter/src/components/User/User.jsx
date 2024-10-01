import React from 'react'
import { useParams } from 'react-router-dom'

const User = ()=> {
    const {id} = useParams()
  return (
    <div className='bg-green-500 text-center text-xl'>
      User : {id}
    </div>
  )
}

export default User
