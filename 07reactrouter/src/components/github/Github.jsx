import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //    fetch('https://api.github.com/users/krishna-agg18')
    //    .then(response => response.json())
    //    .then(data => {
    //     console.log(data);
    //     setData(data);
    //    })
    // },[])
    const data = useLoaderData();
  return (
    <div className=' text-3xl  text-teal-400 font-bold p-4 flex flex-wrap gap-12 bg-gray-400 justify-center'>
        <img src="https://i.pinimg.com/474x/44/5b/e1/445be143097ef6abd43355b1c352ef8c.jpg" className='rounded-xl shadow-2xl p-2 bg-black/40' />
    <div className='flex flex-col g-y-4 justify-evenly p-4 bg-black/40 rounded-lg'>
      <p className=''>Name : {data.name}</p> 
      <p className=''>Login : {data.login}</p> 
      <p className=''>Bio : {data.bio}</p> 
      <p className=''>Github Followers : {data.followers}</p> 
      <p className=''>Public Repos : {data.public_repos}</p>
      <p className=''>Joined on : {data.created_at}</p>
    </div>
    </div>
  )
}

export default Github;
export const GithubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/krishna-agg18')
    return response.json()
}