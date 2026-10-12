"use client";
import React, { useState } from 'react'

const Pagination = () => {
    const [page,setPage] = useState(1);
    const letters = [
  "A", "B", "C", "D", "E",
  "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T"
];

const limit = 2;

const pagiletter= letters.slice((page-1)*limit,page*limit);
const totalPages = Math.ceil(letters.length / limit);
  return (
    <div  className='flex min-h-screen justify-center items-center flex-col text-2xl font-bold'>
        <div >

        <div className='flex gap-4'>

                {
            pagiletter.map((single,index)=>{
                return(
                    <div key={index}>

                        <p>{single}</p>

                    </div>
                )
            })
        }

        </div>

        </div>

        <div>

            <button  disabled={page === totalPages} onClick={()=>setPage(page+1)} className='bg-red-500 p-2 text-white mr-5 text-xl'>Next</button>

         <button disabled={page === 1} onClick={()=>setPage(page-1)} className={` bg-red-500 p-2 text-white mr-5 text-xl`}>Prev</button>

        </div>

    

        
      
    </div>
  )
}

export default Pagination;
