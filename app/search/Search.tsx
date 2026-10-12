"use client";
import React, { useEffect, useState } from 'react'


const Search = () => {
    const [prod,setProducts] = useState([]);
    const [titles, setTitles] = useState("");

    const searchtitle=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        setTitles(e.target.value);
    }


    useEffect(()=>{

        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then((data)=>{

            console.log(data);

            setProducts(data.products);

        })

    },[])

    const filteredprod=prod.filter((singleprod)=>{
        return singleprod.title.toLowerCase().includes(titles.toLowerCase());
    })
  return (
    <div className='max-w-[1536px] mx-auto'>

        <p className='text-3xl text-center text-white my-4'>Front end based Search implementation</p>

       <section className='flex justify-center py-5'>

         <input type="text" className='w-[350px] h-[45px] border-2 border-white' onChange={searchtitle} />

       </section>

       


        <div className='grid grid-cols-5 gap-4 '>

              {
            filteredprod.map((singleprod,index)=>{
                return(
                    <div className='p-3 bg-white text-black' key={index}>

                        <p>{singleprod.title}</p>
                        <p>{singleprod.price}</p>
                         
        

                    </div>
                )
            })
        }

        </div>

      
      
    </div>
  )
}

export default Search

