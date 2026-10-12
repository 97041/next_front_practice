"use client";
import React, { useEffect, useState } from 'react';
  import { ThreeDots } from "react-loader-spinner";


const Loading = () => {
    const [pic,setPic] = useState([]);

    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        setTimeout(() => {

               fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res=>res.json())
        .then((data)=>{
            setPic(data);
            setLoading(false);
        });
            
        }, 3000);

     

    },[])

    if(loading){
        return(
            <div className='flex justify-center items-center min-h-screen bg-black'>
               
                

            

   <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#fa003e"
        radius="9"
        ariaLabel="loading"
      />
            </div>
        )
    }


  return (
    <div>

        <div className='grid grid-cols-4'>

              {
            pic.map((singleimage,index)=>{
                return(
                    <div className='' key={index}>

                       

                        <img src={singleimage.url} alt="" />

                    </div>
                )
            })
        }

        </div>

      
      
    </div>
  )
}

export default Loading
