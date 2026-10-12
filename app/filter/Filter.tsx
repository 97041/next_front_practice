"use client";
import React, { useEffect, useState } from 'react'

const Filter = () => {

     const [prod,setProducts] = useState([]);

     const [catg,setCatg]=useState("ALL");

     const setcat=(cat)=>{
        console.log(cat);
        setCatg(cat);

       
     }

     useEffect(()=>{
    
            fetch("https://dummyjson.com/products")
            .then(res=>res.json())
            .then((data)=>{
    
                console.log(data);
    
                setProducts(data.products);
    
            })
    
        },[])


         const filtered = prod.filter((spro)=>{
            return catg=="ALL" || spro.category==catg;
        })




   
  return (
    <div>

        <div className='flex gap-4'>

              <button className='bg-green-500 p-4 text-white' onClick={()=>setcat("beauty")}>beauty</button>

        <button className='bg-green-500 text-white p-4' onClick={()=>setcat("fragrances")}>fragrances</button>

         <button className='bg-green-500 text-white p-4' onClick={()=>setcat("ALL")}>ALL</button>

        </div>



     


        {
          filtered.map((spro,index)=>{
            return(
                <div key={index}>

                    <p>{spro.title}</p>

                </div>
            )
          })
        }

      
      
    </div>
  )
}

export default Filter
