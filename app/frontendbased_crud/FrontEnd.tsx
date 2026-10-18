"use client";
import React, { useState } from 'react'

const FrontEnd = () => {

    const [writing,setWriting] = useState("");

    const [value,setValue] = useState([]);

    const changethepath=(e)=>{

        e.preventDefault();
        setWriting(e.target.value);

    }

    const handleinput=(e)=>{

       

        if(e.key=="Enter"){
            setValue([...value,writing]);
             setWriting("");

        }
        
    }

    const makedelete=(sval)=>{

        console.log(sval);

         const result = value.filter((singleitem)=>{
            return singleitem !== sval;
         })

         setValue(result);

    }
  return (
    <div className='bg-green-600 min-h-screen'>

        <div className='flex justify-center py-15'>

            <input onKeyDown={handleinput} onChange={changethepath} type="text" className='w-[500px] h-[50px] border-2 border-grey-600 text-black' />

        </div>

        <div className='flex flex-col justify-center items-center'>
            {
                value.map((singleval,index)=>{
                    return(
                        <div className='flex gap-2 text-xl text-white font-bold items-center' key={index}>

                            <p>{index}.</p>

                            <p>{singleval}</p>

                            <button onClick={()=>makedelete(singleval)} className="btn btn-outline btn-error mt-2  py-1 px-1">X</button>

                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default FrontEnd;
