import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {


    // const [data,setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/kbg2206')
    //    .then(response => response.json())
    //    .then(data => {
    //     setData(data)
    //     console.log(data)
    //    })
    // },[]);

    const data = useLoaderData();
    
  return (
    <div className='text-center bg-slate-600 text-2xl m-4 p-4 text-white '>
      Github Followers : { data.followers}
      <img className = "p-4 m-4 flex justify-center" src={data.avatar_url} alt="Github Picture" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}