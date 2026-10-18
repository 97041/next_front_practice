"use client"
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Login = () => {

  const handlelogin=async(e)=>{

    e.preventDefault();

    const formval = new FormData(e.target);

    const email = formval.get("email");
    const password = formval.get("password");

    const url= "http://localhost:5000/api/auth/login";

    const data={
      email,
      password
    }

    const res = await fetch(url,{

      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data),

    })

    const res2 = await res.json();

    console.log(res2);

  }
  return (
    <div className='flex jusfiy-center items-center min-h-screen'>

      <div className='w-full'>
        <DotLottieReact
        src="/Login.json"
         autoplay
         loop
        />
      </div>
      <div className='w-full'>

        <form onSubmit={handlelogin} action="">


               <div className='flex flex-col  space-y-3'>
          <input name='email' type="email" className='border-2 border-black w-[250px] h-[45px]'/>
          
          <input name='password' type="password" className='border-2 border-black w-[250px] h-[45px]'/>

          <button type='submit' className='bg-red-500 text-white font-bold p-3 hover:cursor-pointer hover:scale-106  w-[250px] h-[45px]'>Submit</button>
        </div>



        </form>

   


      </div>
      
    </div>
  )
}

export default Login
